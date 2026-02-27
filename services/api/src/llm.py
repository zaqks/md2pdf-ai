"""
Groq LLM Integration
"""
import os
import asyncio
from functools import partial
from groq import Groq
from pathlib import Path


# Initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Load prompt template
PROMPT_PATH = Path(__file__).parent.parent / "PROMPT.txt"
PROMPT_TEMPLATE = PROMPT_PATH.read_text() if PROMPT_PATH.exists() else ""


async def ask_llm(question: str, current_file: str = "") -> str:
    """
    Send a question to the LLM via Groq and return the response.
    Runs the synchronous Groq call in a thread pool to avoid blocking.
    
    Args:
        question: The user's question/message
        current_file: The current Markdown file content to be edited
        
    Returns:
        str: The AI-generated response text
    """
    loop = asyncio.get_event_loop()
    
    # Format the prompt with user question and current file
    if PROMPT_TEMPLATE and current_file:
        formatted_prompt = PROMPT_TEMPLATE.format(
            user_question=question,
            current_file=current_file
        )
    else:
        # Fallback if no template or no current file
        formatted_prompt = question
    
    # Run the synchronous Groq call in a thread pool
    completion = await loop.run_in_executor(
        None,
        partial(
            client.chat.completions.create,
            model=os.getenv("GROQ_MODEL"),
            messages=[{"role": "user", "content": formatted_prompt}],
            temperature=1,
            max_completion_tokens=8192,
            top_p=1,
            stream=False,
        )
    )
    return completion.choices[0].message.content
