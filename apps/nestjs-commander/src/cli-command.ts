import { Command, CommandRunner } from 'nest-commander';

import { SubCommandTest } from './sub-command-test/sub_command_test';

@Command({
    name: 'cli',
    description: 'run a command',
    arguments: '<sub-command>',
    subCommands: [SubCommandTest],
})
export class CliCommand extends CommandRunner {
    constructor() {
        super();
    }

    async run([name]: string[]): Promise<void> {
        const errMessage = `Sub-command ${name} not found.`;
        throw new Error(errMessage);
    }
}
