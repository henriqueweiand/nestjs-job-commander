import { Command, CommandRunner, Option, SubCommand } from 'nest-commander';

interface BasicCommandOptions {
    string?: string;
    boolean?: boolean;
    number?: number;
}

@SubCommand({ name: 'test', arguments: '<task>' })
export class SubCommandTest extends CommandRunner {
    constructor() {
        super()
    }

    async run(
        passedParam: string[],
        options?: BasicCommandOptions,
    ): Promise<void> {
        console.log('sub command', passedParam, options);
    }
}