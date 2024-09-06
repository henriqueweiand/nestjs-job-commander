import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventService } from './event.service';
import { EVENT_ENTITIES } from './constants';

@Module({
  imports: [
    TypeOrmModule.forFeature(EVENT_ENTITIES),
  ],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule { }
