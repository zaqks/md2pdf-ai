// LocalStorage utility for managing markdown files

const STORAGE_KEY = 'md2pdf_files';
const CURRENT_FILE_KEY = 'md2pdf_current_file';

export function generateFileName() {
  const timestamp = new Date().getTime();
  return `document_${timestamp}`;
}

export function getAllFiles() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error reading files from localStorage:', error);
    return {};
  }
}

export function getFile(fileName) {
  const files = getAllFiles();
  return files[fileName] || null;
}

export function saveFile(fileName, content) {
  try {
    const files = getAllFiles();
    files[fileName] = {
      content,
      lastModified: new Date().getTime(),
      created: files[fileName]?.created || new Date().getTime()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
    return true;
  } catch (error) {
    console.error('Error saving file to localStorage:', error);
    return false;
  }
}

export function deleteFile(fileName) {
  try {
    const files = getAllFiles();
    delete files[fileName];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
    return true;
  } catch (error) {
    console.error('Error deleting file from localStorage:', error);
    return false;
  }
}

export function renameFile(oldName, newName) {
  try {
    const files = getAllFiles();
    if (files[oldName] && !files[newName]) {
      files[newName] = files[oldName];
      delete files[oldName];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error renaming file:', error);
    return false;
  }
}

export function getCurrentFileName() {
  return localStorage.getItem(CURRENT_FILE_KEY);
}

export function setCurrentFileName(fileName) {
  localStorage.setItem(CURRENT_FILE_KEY, fileName);
}

export function initializeNewFile() {
  const fileName = generateFileName();
  const defaultContent = `# How to Use This App

- **Left Panel**: Type or edit your markdown text here.  
- **Right Panel**: See the live preview that will look exactly as it does when exported to PDF.


# Markdown Illustration

Demo of various Markdown features.

## Headings

# H1 Heading  
## H2 Heading  
### H3 Heading  
#### H4 Heading  
##### H5 Heading  
###### H6 Heading  

## Paragraphs

Add text separated by a blank line.

## Emphasis

*Italic*  
**Bold**  
***Bold Italic***  
~~Strikethrough~~

## Lists

- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2

## Links

[Github](https://github.com/zaqks)

## Images

![Wilson](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWg5MTJ1YnRxMDExc2JpbGVnd3lzZjlibnM4bHZzdTJqaWVqOHB5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekY2EfNPAsojzqWZbY/giphy.gif)

## Code

Inline \`code\` or block:

\`\`\`python
def hello():
    print("Hello, world!")
\`\`\`

## Blockquotes

> This is a quote.

## Tables

| Header | Value |
|--------|-------|
| Key    | Data  |

## Horizontal Rule

---
When we add a line on top of the text:

---
This is a paragraph that appears after a horizontal rule.
`;
  saveFile(fileName, defaultContent);
  setCurrentFileName(fileName);
  return { fileName, content: defaultContent };
}

export function getFileList() {
  const files = getAllFiles();
  return Object.entries(files).map(([name, data]) => ({
    name,
    lastModified: data.lastModified,
    created: data.created
  })).sort((a, b) => b.lastModified - a.lastModified);
}
