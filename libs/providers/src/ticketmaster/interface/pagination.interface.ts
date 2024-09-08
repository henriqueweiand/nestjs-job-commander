export interface TicketMasterPagination<T> {
    page: TicketMasterPageDetails;
    _embedded: T;
    _links: TicketMasterPaginationLinks;
}

interface TicketMasterPageDetails {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number; // current page number
}

interface TicketMasterPaginationLinks {
    first: {
        href: string;
    };
    last: {
        href: string;
    };
    next?: {
        href: string;
    };
    prev?: {
        href: string;
    };
    self: {
        href: string;
    };
}
