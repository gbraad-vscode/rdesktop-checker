import * as vscode from 'vscode';

export class Context {
    private static readonly KEY = 'rdesktop-checker:isKclientAvailable';
    
    static async set(value: boolean): Promise<void> {
        await vscode.commands.executeCommand('setContext', this.KEY, value);
    }
}
