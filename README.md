# Wrapper Extension

Quickly wrap selected text with HTML-like tags or convert quotes to backticks using keyboard shortcuts.

## Features

### Wrap with Tags (`Shift+Alt+P`)

Wraps selected text with opening and closing tags, placing the cursor inside the opening tag for easy tag naming.

**Example:**

```text
Example Text  →  <>Example Text</>
```

### Wrap with Backticks (`Shift+Alt+I`)

Converts surrounding quotes (`"` or `'`) to backticks (`` ` ``), perfect for converting strings to template literals in JavaScript.

**Example:**

```text
"Hello World"  →  `Hello World`
'Hello World'  →  `Hello World`
```

## Usage

1. Select the text you want to wrap
2. Press the appropriate shortcut:
   - `Shift+Alt+P` for tags
   - `Shift+Alt+I` for backticks

## Requirements

- Visual Studio Code 1.96.0 or higher
- Dependencies: `formulahendry.auto-rename-tag` (automatically installed)

## Release Notes

### 1.3.0

- Added backtick wrapper feature with `Shift+Alt+I` shortcut

### 1.2.0

- Added extension icon
- Added auto-rename-tag dependency

### 1.0.0

- Initial release with tag wrapper feature

## Contributing

Submit issues or pull requests on [GitHub](https://github.com/div02-afk/wrapWithTags).

---

**Happy wrapping!** 🎉
