from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import json
import os  # Import os to read environment variables
from .llm import ask_llm
from .database import engine, Base
from .routes import auth, documents, media

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Read APP_URL from environment variables
APP_URL = os.getenv("APP_URL", "http://localhost:8000")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(documents.router)
app.include_router(media.router)


@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}


@app.websocket("/ws/llm")
async def websocket_llm_endpoint(websocket: WebSocket):
    """
    WebSocket endpoint for LLM interactions.
    
    Expected message format:
    {
        "type": "question",
        "content": "your question here",
        "currentFile": "markdown content here (optional)"
    }
    
    Response format:
    {
        "type": "answer",
        "content": "AI response here"
    }
    or
    {
        "type": "error",
        "message": "error description"
    }
    """
    await websocket.accept()
    
    try:
        while True:
            # Receive message from client
            data = await websocket.receive_text()
            
            try:
                message = json.loads(data)
                
                if message.get("type") == "question":
                    question = message.get("content", "")
                    current_file = message.get("currentFile", "")
                    
                    if not question:
                        await websocket.send_json({
                            "type": "error",
                            "message": "Question content is required"
                        })
                        continue
                    
                    # Get LLM response with current file context
                    answer = await ask_llm(question, current_file)
                    
                    # Send response back to client
                    await websocket.send_json({
                        "type": "answer",
                        "content": answer
                    })
                else:
                    await websocket.send_json({
                        "type": "error",
                        "message": f"Unknown message type: {message.get('type')}"
                    })
                    
            except json.JSONDecodeError:
                await websocket.send_json({
                    "type": "error",
                    "message": "Invalid JSON format"
                })
            except Exception as e:
                await websocket.send_json({
                    "type": "error",
                    "message": f"Error processing request: {str(e)}"
                })
                
    except WebSocketDisconnect:
        print("Client disconnected from LLM WebSocket")
    except Exception as e:
        print(f"WebSocket error: {str(e)}")
        try:
            await websocket.close()
        except:
            pass
