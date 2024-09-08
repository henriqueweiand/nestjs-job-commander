import { CommandRunner, SubCommand } from 'nest-commander';

import { EventRepository } from '@app/event/event.repository';
import { Providers } from '@app/providers/providers.interface';

interface BasicCommandOptions {
    string?: string;
    boolean?: boolean;
    number?: number;
}

@SubCommand({ name: 'ticketmaster-event-refresh' })
export class TicketMasterEventRefreshCommand extends CommandRunner {
    constructor(
        private readonly ticketmasterProvider: Providers,
        private readonly eventRepository: EventRepository
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
        const data = await this.ticketmasterProvider.getEvents();

        try {
            for (const event of data) {
                const registredEvent = await this.eventRepository.findOneBy({ externalId: event.externalId });

                if (registredEvent) {
                    await this.eventRepository.update(event, registredEvent);
                    console.info(`Event updated: ${event.name}`);
                } else {
                    const newEvent = this.eventRepository.create(event);
                    await this.eventRepository.save(newEvent);

                    console.info(`Event created: ${event.name}`);
                }
            }
        } catch (error) {
            console.error('Error while refreshing events', error);
        }

        console.log('sub command', passedParam, options);
    }
}