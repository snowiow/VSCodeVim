import * as node from "./node";
import * as command_node from './command_node';

// maps command names to parsers for said commands.
export const commandParsers = {
    w: parseWriteCommandArgs,
    write: parseWriteCommandArgs
};

export function parseWriteCommandArgs(args : command_node.WriteCommandArguments = {}) {
    // TODO: actually parse arguments.
    return new node.WriteCommand(args);
}
