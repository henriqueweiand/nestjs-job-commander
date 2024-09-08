import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { TicketMasterEvent } from '../interface/events.interface';
import { TicketMasterPagination } from '../interface/pagination.interface';
import { TicketmasterCredentialsConfig } from '../ticketmaster_credentials.config';

@Injectable()
export class TicketmasterHttpService {
  constructor(
    @Inject(TicketmasterCredentialsConfig.KEY)
    private readonly ticketmasterCredentialsConfig: ConfigType<typeof TicketmasterCredentialsConfig>,
    protected readonly httpService: HttpService,
  ) { }

  private async _request<TReponse>(config: AxiosRequestConfig): Promise<AxiosResponse> {
    config.url = `${config.url}&apikey=${this.ticketmasterCredentialsConfig.apiKey}`;

    return this.httpService
      .axiosRef<TReponse>(config)
      .then(response => {
        return response;
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async eventSearch(query?: string): Promise<AxiosResponse<TicketMasterPagination<{ events: TicketMasterEvent[] }>>> {
    return this._request<TicketMasterPagination<{ events: TicketMasterEvent[] }>>({
      url: `https://app.ticketmaster.com/discovery/v2/events.json?${query}`,
      method: 'GET',
    });
  }
}
