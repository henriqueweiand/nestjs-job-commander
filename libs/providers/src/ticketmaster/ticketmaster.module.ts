import { Providers } from '@app/providers/providers.interface';
import { Module } from '@nestjs/common';

import { TicketmasterProvider } from './ticketmaster.provider';
import { TicketmasterHttpModule } from './ticketmaster/ticketmaster_http.module';
import { TicketmasterTransformer } from './ticketmaster.transformer';

@Module({
  imports: [
    TicketmasterHttpModule
  ],
  providers: [
    {
      provide: Providers,
      useClass: TicketmasterProvider,
    },
    TicketmasterTransformer
  ],
  exports: [Providers],
})
export class TicketmasterModule { }
