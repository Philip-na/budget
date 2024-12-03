export type EventType = {
    id: string; // Required: Unique identifier for the event
    img: string; // Optional: Image URL for the event
    title: string; // Optional: Title of the event
    description: string; // Optional: Brief description of the event
    location?: string; // Optional: Location of the event
    date: string; // Optional: Scheduled date for the event
    price?: string; // Optional: Ticket price or "Free"
    organizer?: string; // Optional: Organizer of the event
    promotionDetails?: {
        type?: string; // Optional: Type of promotion (e.g., "Discount", "Early Bird")
        discount?: string; // Optional: Discount details (e.g., "10% Off")
        validUntil?: string; // Optional: Expiration date for the promotion
    };
    category?: string; // Optional: Category of the event (e.g., "Music", "Technology", "Art")
    attendeesLimit?: number; // Optional: Maximum number of attendees allowed
    registrationLink?: string; // Optional: URL for registration or tickets
    isFeatured?: boolean; // Optional: Whether the event is highlighted as featured
    tags?: string[]; // Optional: Tags or keywords for filtering (e.g., ["Conference", "Tech"])
    duration?: string; // Optional: Duration of the event (e.g., "2 hours", "Full Day")
    accessibilityInfo?: string; // Optional: Accessibility details (e.g., "Wheelchair accessible")
    virtualEvent?: boolean; // Optional: Indicates if the event is virtual
    contactEmail?: string; // Optional: Contact email for inquiries
    contactPhone?: string; // Optional: Contact phone number for inquiries
    ratings?: {
        average?: number; // Optional: Average rating (e.g., 4.5)
        count?: number; // Optional: Number of ratings
    };
    socialLinks?: {
        facebook?: string; // Optional: Facebook event page URL
        twitter?: string; // Optional: Twitter link
        instagram?: string; // Optional: Instagram link
    };
    timezone?: string; // Optional: Timezone of the event (e.g., "GMT+2")
    language?: string; // Optional: Language used in the event (e.g., "English", "Spanish")
    repeatFrequency?: string; // Optional: For recurring events (e.g., "Weekly", "Monthly", "Yearly")
    cancellationPolicy?: string; // Optional: Details on cancellation terms
    sponsors?: string[]; // Optional: List of event sponsors
    attendeeTypes?: string[]; // Optional: Types of attendees (e.g., "Students", "Professionals")
    mediaGallery?: string[]; // Optional: Array of additional image or video URLs
    agenda?: { 
        time: string; // Required: Time slot for each agenda item
        description: string; // Required: Description of the agenda item
    }[]; // Optional: Agenda or schedule details
    weatherConsiderations?: string; // Optional: Notes about weather-related contingencies (e.g., "Rain or shine")
    ticketTiers?: {
        tierName: string; // Required: Name of the ticket tier (e.g., "VIP", "Standard")
        price: string; // Required: Price of the ticket tier
        benefits: string[]; // Optional: Benefits included with this tier
    }[]; // Optional: Array of ticket tier details
    ageRestriction?: string; // Optional: Age requirement for the event (e.g., "18+")
};
