
import { Event } from '@app/event/entities/event.entity';
import { Injectable } from '@nestjs/common';

import { TicketMasterEvent } from './interface/events.interface';

@Injectable()
export class TicketmasterTransformer {
    transformEvent(event: TicketMasterEvent): Event {
        return Object.assign(new Event(), {
            externalId: event.id,
            name: event.name,
            url: event.url,
            locale: event.locale,
            type: event.type,
        });
    }
}
