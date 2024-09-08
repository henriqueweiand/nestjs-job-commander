import { CommandRunner, SubCommand } from 'nest-commander';

import { Providers } from '@app/providers/providers.interface';
import { EventService } from '@app/event';

interface BasicCommandOptions {
    string?: string;
    boolean?: boolean;
    number?: number;
}

@SubCommand({ name: 'ticketmaster-event-refresh' })
export class TicketMasterEventRefreshCommand extends CommandRunner {
    constructor(
        private readonly ticketmasterProvider: Providers,
        private readonly eventService: EventService
    ) {
        super()
    }

    // @Option({
    //     flags: '-ex, --example <example>',
    //     required: true,
    //     description: 'example how to pass a parameter',
    // })
    // parseParameter(value: string): string {
    //     return value + 'test';
    // }

    async run(
        passedParam: string[],
        options?: BasicCommandOptions,
    ): Promise<void> {
        try {
            const data = await this.ticketmasterProvider.getData();
            const event = await this.eventService.create();

            console.info(data);
            console.info(event);
        } catch (error) {
            console.error(error);
        }

        console.log('sub command', passedParam, options);
    }
}