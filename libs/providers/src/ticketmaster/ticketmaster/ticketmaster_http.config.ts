import { registerAs } from '@nestjs/config';

export const TicketmasterHttpConfig = registerAs('ticketmasterHttpConfig', () => {
  return {
    tokenApi: process.env.TICKETMASTER_API_TOKEN,
    baseURL: process.env.TICKETMASTER_BASE_URL,
  };
});
