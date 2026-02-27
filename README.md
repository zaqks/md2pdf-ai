# md2pdf-ai

A modern Markdown to PDF converter with live preview, syntax highlighting, and PDF export.

## Project Structure

```
md2pdf-ai/
├── services/
│   ├── app/                 # Vue.js application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Editor.vue         # CodeMirror editor wrapper
│   │   │   │   └── Editor/
│   │   │   │       ├── MD.vue         # Markdown editor component
│   │   │   │       └── Preview.vue    # Markdown preview component
│   │   │   ├── pages/
│   │   │   │   └── Home.vue           # Main application page
│   │   │   ├── App.vue
│   │   │   ├── main.js
│   │   │   └── style.css
│   │   └── Dockerfile
│   └── api/                 # Future API service (optional)
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zaqks/md2pdf-ai.git
   cd md2pdf-ai
   ```

2. **Start the application**:
   ```bash
   docker-compose up
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

## Original Reference

This project is based on the [md2pdf simplified version](https://github.com/realdennis/md2pdf), rewritten in Vue.js with enhanced features and modern tooling.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**zaqks** - [GitHub](https://github.com/zaqks)
