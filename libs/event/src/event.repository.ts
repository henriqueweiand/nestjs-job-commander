import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Event } from '@app/event/entities/event.entity';

@Injectable()
export class EventRepository extends Repository<Event> {
    constructor(dataSource: DataSource) {
        super(Event, dataSource.manager);
    }
}