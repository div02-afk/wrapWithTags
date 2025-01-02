# Wrap-with-Tags Extension

The **Wrap-with-Tags** extension allows you to wrap selected text with customizable HTML-like tags using a simple keyboard shortcut. This is ideal for developers and content creators who frequently work with markup or template languages.

---

## Features

- **Wrap Selected Text with Tags**: Quickly wrap text with opening and closing tags using the default shortcut (`Shift+Alt+P`).
- **Customizable Tags**: Modify the extension to use any tags you prefer.
- **Ease of Use**: Seamlessly integrates into your workflow with minimal setup.
  
**Example:**

1. Select some text.
2. Press the shortcut (`Shift+Alt+P`).
3. The text transforms from:

   ```html
   Example Text
   ```

   to:

   ```html
   <Example Text></Example>
   ```

---

## Requirements

This extension does not have additional dependencies or requirements beyond a standard Visual Studio Code installation.

---

## Usage

1. Highlight the text you want to wrap.
2. Press the shortcut (`Shift+Alt+P`).
3. Your selected text will be wrapped with `<` and `>` tags.

---

## Extension Settings

This extension does not currently add settings to VS Code. Future versions may include configuration options such as:

- Customizable tag names.
- Support for additional markup formats.

---

## Known Issues

- The extension assumes a basic structure for tags and may not work with complex nested tags or specific tag formats.
- Tag wrapping does not currently support tag customization directly from the UI or settings.

---

## Release Notes

### 1.0.0

- Initial release.
- Added the ability to wrap selected text with tags using the `Shift+Alt+P` shortcut.
- Default tags: `<` and `>`.

### 1.1.0

- Added an icon to the extension.
- Updated extension dependencies (adds `formulahendry.auto-rename-tag`).

---

## Future Enhancements

- Add a configuration option for default tags.
- Support more advanced text transformations, such as wrapping with attributes or nested tags.
- Provide additional shortcuts for different wrapping patterns.

---

## Contributing

If you'd like to contribute to this project, feel free to submit issues or pull requests on the [GitHub repository](https://github.com/div02-afk/wrapWithTags).

---

**Enjoy wrapping your text effortlessly!** 🎉
