// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
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

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
