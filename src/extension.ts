// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let wrapWithTags = vscode.commands.registerCommand(
    "extension.wrapWithTags",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const { selection, document } = editor;
        const selectedText = document.getText(selection);

        // If text is selected, wrap it with tags
        editor
          .edit((editBuilder) => {
            const wrappedText = `<>${selectedText}</>`;
            editBuilder.replace(selection, wrappedText);
          })
          .then(() => {
            // Move the cursor inside the opening tag
            const cursorPosition = selection.start.translate(0, 1);
            editor.selection = new vscode.Selection(
              cursorPosition,
              cursorPosition
            );
          });
      }
    }
  );

  let wrapWithBackTicks = vscode.commands.registerCommand(
    "extension.wrapWithBackTicks",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const { selection, document } = editor;
        let selectedText = document.getText(selection);
        let wrappedText = selectedText;
        if (selectedText[0] === `"` || selectedText[0] === `'`) {
          wrappedText = "`" + wrappedText.substring(1);
        }
        if (
          selectedText[selectedText.length - 1] === `"` ||
          selectedText[selectedText.length - 1] === `'`
        ) {
          wrappedText = wrappedText.substring(0, wrappedText.length - 1) + "`";
        }
        // If text is selected, wrap it with backticks
        editor
          .edit((editBuilder) => {
            editBuilder.replace(selection, wrappedText);
          });
      }
    }
  );

  context.subscriptions.push(wrapWithTags);
  context.subscriptions.push(wrapWithBackTicks);
}

// This method is called when your extension is deactivated
export function deactivate() {}
