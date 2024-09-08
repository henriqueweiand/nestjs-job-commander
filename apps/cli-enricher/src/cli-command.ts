import { Command, CommandRunner } from 'nest-commander';

import { TicketMasterEventRefreshCommand } from './ticketmaster-event-refresh/ticketmaster_event_refresh.command';

@Command({
    name: 'cli',
    description: 'run a command',
    arguments: '<sub-command>',
    subCommands: [TicketMasterEventRefreshCommand],
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