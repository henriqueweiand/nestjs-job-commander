import { Module } from '@nestjs/common';

import { EnvModule } from '@app/env';

import { CliCommand } from './cli-command';
import { TicketMasterEventRefreshModule } from './ticketmaster-event-refresh/ticketmaster_event_refresh.module';

const app = 'CLI-ENRICHER';

@Module({
    imports: [
        EnvModule.register(app),
        // PersistenceModule.registerTypeOrm(app),
        TicketMasterEventRefreshModule,
    ],
    providers: [CliCommand],
})
export class AppModule { }