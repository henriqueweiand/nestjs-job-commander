import { registerAs } from '@nestjs/config';

export const TicketmasterCredentialsConfig = registerAs('ticketmasterCredentialsConfig', () => {
  return {
    apiKey: process.env.TICKETMASTER_API_TOKEN,
  };
});
