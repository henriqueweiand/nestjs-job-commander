import { registerAs } from '@nestjs/config';

export const TicketmasterConfig = registerAs('ticketmasterConfig', () => {
  return {
    tokenApi: process.env.TICKETMASTER_API_TOKEN,
    appURL: process.env.TICKETMASTER_BASE_URL,
  };
});
