import { Injectable } from '@nestjs/common';

import { Event } from '@app/event/entities/event.entity';

@Injectable()
export abstract class Providers {
  abstract getEvents(): Promise<Event[]>;
}
