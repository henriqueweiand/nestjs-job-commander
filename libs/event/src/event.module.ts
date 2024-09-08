import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EVENT_ENTITIES } from './constants';
import { EventRepository } from './event.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature(EVENT_ENTITIES),
  ],
  providers: [EventRepository],
  exports: [EventRepository],
})
export class EventModule { }
