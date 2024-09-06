import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Providers } from '@app/providers/providers.interface';

import { TicketmasterConfig } from './ticketmaster.config';
import { TicketmasterProvider } from './ticketmaster.provider';

@Module({
  imports: [
    ConfigModule.forFeature(TicketmasterConfig),
  ],
  providers: [
    {
      provide: Providers,
      useClass: TicketmasterProvider,
    },
  ],
  exports: [Providers],
})
export class TicketmasterModule { }
