import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,
    ) { }

    async create(): Promise<Event> {
        const event = Object.assign(new Event(), {
            name: `New Event ${new Date().toISOString()}`,
        });

        return this.eventRepository.save(event);
    }
}
