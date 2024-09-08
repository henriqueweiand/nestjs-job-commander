import { Module } from '@nestjs/common';

import { EventModule } from '@app/event';
import { ProvidersModule, TicketmasterModule } from '@app/providers';

import { TicketMasterEventRefreshCommand } from './ticketmaster_event_refresh.command';

@Module({
    imports: [
        ProvidersModule.with(TicketmasterModule),
        EventModule
    ],
    providers: [TicketMasterEventRefreshCommand],
})
export class TicketMasterEventRefreshModule { }