export interface TicketMasterEvent {
    id: string;
    name: string;
    type: string;
    url: string;
    locale: string;
    images: TicketMasterImage[];
    classifications: TicketMasterClassification[];
    dates: TicketMasterEventDates;
    priceRanges?: TicketMasterPriceRange[];
    accessibility?: TicketMasterAccessibility;
    ageRestrictions?: TicketMasterAgeRestrictions;
    products?: TicketMasterProduct[];
    promoter?: TicketMasterPromoter;
    promoters?: TicketMasterPromoter[];
    sales?: TicketMasterSales;
    seatmap?: TicketMasterSeatMap;
    ticketing?: TicketMasterTicketing;
    ticketLimit?: TicketMasterTicketLimit;
    _links: TicketMasterEventLinks;
    _embedded: {
        attractions: Attraction[];
        venues: TicketMasterVenue[];
    };
}

interface TicketMasterImage {
    url: string;
    height: number;
    width: number;
    ratio: string;
    fallback: boolean;
}

interface TicketMasterClassification {
    family: boolean;
    genre: TicketMasterGenre;
    primary: boolean;
    segment: TicketMasterSegment;
    subGenre?: TicketMasterSubGenre;
    type: TicketMasterType;
    subType?: TicketMasterSubType;
}

interface TicketMasterGenre {
    id: string;
    name: string;
}

interface TicketMasterSegment {
    id: string;
    name: string;
}

interface TicketMasterSubGenre {
    id: string;
    name: string;
}

interface TicketMasterType {
    id: string;
    name: string;
}

interface TicketMasterSubType {
    id: string;
    name: string;
}

interface TicketMasterEventDates {
    start: {
        dateTime: string;
        localDate: string;
        localTime: string;
        noSpecificTime: boolean;
        timeTBA: boolean;
        dateTBA: boolean;
        dateTBD: boolean;
    };
    status: {
        code: string;
    };
    timezone: string;
    spanMultipleDays: boolean;
}

interface TicketMasterPriceRange {
    currency: string;
    min: number;
    max: number;
    type: string;
}

interface TicketMasterAccessibility {
    id: string;
    ticketLimit: number;
}

interface TicketMasterAgeRestrictions {
    id: string;
    legalAgeEnforced: boolean;
}

interface TicketMasterProduct {
    id: string;
    name: string;
    type: string;
    url: string;
    classifications: TicketMasterClassification[];
}

interface TicketMasterPromoter {
    id: string;
    name: string;
    description: string;
}

interface TicketMasterSales {
    public: {
        startDateTime: string;
        endDateTime: string;
        startTBA: boolean;
        startTBD: boolean;
    };
    presales?: TicketMasterPreSale[];
}

interface TicketMasterPreSale {
    name: string;
    startDateTime: string;
    endDateTime: string;
}

interface TicketMasterSeatMap {
    id: string;
    staticUrl: string;
}

interface TicketMasterTicketing {
    allInclusivePricing: {
        enabled: boolean;
    };
    safeTix: {
        enabled: boolean;
        inAppOnlyEnabled: boolean;
    };
}

interface TicketMasterTicketLimit {
    id: string;
    info: string;
}

interface TicketMasterEventLinks {
    self: {
        href: string;
    };
    attractions: TicketMasterAttractionLink[];
    venues: TicketMasterVenueLink[];
}

interface TicketMasterAttractionLink {
    href: string;
}

interface TicketMasterVenueLink {
    href: string;
}

interface Attraction {
    id: string;
    name: string;
    type: string;
    url: string;
    locale: string;
    images: TicketMasterImage[];
    externalLinks: TicketMasterExternalLinks;
    classifications: TicketMasterClassification[];
}

interface TicketMasterExternalLinks {
    facebook?: TicketMasterSocialLink[];
    twitter?: TicketMasterSocialLink[];
    instagram?: TicketMasterSocialLink[];
    homepage?: TicketMasterSocialLink[];
    wiki?: TicketMasterSocialLink[];
}

interface TicketMasterSocialLink {
    url: string;
}

interface TicketMasterVenue {
    id: string;
    name: string;
    url: string;
    locale: string;
    images: TicketMasterImage[];
    city: TicketMasterCity;
    state: TicketMasterState;
    country: TicketMasterCountry;
    postalCode: string;
    location: Location;
}

interface TicketMasterCity {
    name: string;
}

interface TicketMasterState {
    name: string;
    stateCode: string;
}

interface TicketMasterCountry {
    name: string;
    countryCode: string;
}

interface TicketMasterLocation {
    latitude: string;
    longitude: string;
}
