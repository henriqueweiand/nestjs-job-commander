import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TicketmasterHttpService } from './ticketmaster_http.service';
import { TicketmasterHttpConfig } from './ticketmaster_http.config';
import { TicketmasterCredentialsConfig } from '../ticketmaster_credentials.config';

@Module({
  imports: [
    ConfigModule.forFeature(TicketmasterCredentialsConfig),
    HttpModule.registerAsync(TicketmasterHttpConfig.asProvider()),
  ],
  providers: [TicketmasterHttpService],
  exports: [TicketmasterHttpService],
})
export class TicketmasterHttpModule { }
