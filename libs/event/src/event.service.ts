import { Injectable } from '@nestjs/common';

import { Event } from './entities/event.entity';
import { EventRepository } from './event.repository';

@Injectable()
export class EventService {
    constructor(
        private readonly eventRepository: EventRepository
    ) { }

    async create(event: Event): Promise<Event> {
        return this.eventRepository.save(event);
    }
}
