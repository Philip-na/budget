import { EventType } from "./types";
export const events: EventType[] = [
    {   
        id: 'unique-id-1',
        img: "/js.jpeg",
        title: "Tech Disrupt 2024",
        description: "Explore groundbreaking innovations and network with industry leaders at Tech Disrupt 2024.",
        location: "San Francisco, USA",
        date: "2024-05-15",
        price: "$200",
        organizer: "Disrupt Global",
        promotionDetails: {
            type: "Early Bird",
            discount: "20% Off",
            validUntil: "2024-03-31"
        },
        category: "Technology",
        attendeesLimit: 5000,
        registrationLink: "https://example.com/tech-disrupt",
        isFeatured: true,
        tags: ["Tech", "Conference", "Innovation"],
        duration: "3 days",
        accessibilityInfo: "Fully accessible venue",
        virtualEvent: false,
        contactEmail: "contact@disruptglobal.com",
        contactPhone: "+1234567890",
        ratings: {
            average: 4.8,
            count: 980
        },
        socialLinks: {
            facebook: "https://facebook.com/techdisrupt",
            twitter: "https://twitter.com/techdisrupt",
            instagram: "https://instagram.com/techdisrupt"
        },
        timezone: "PST",
        language: "English",
        sponsors: ["Tech Giants Inc.", "Innovators Hub"],
        agenda: [
            { time: "9:00 AM", description: "Opening Keynote" },
            { time: "10:30 AM", description: "Panel: The Future of AI" }
        ],
        ticketTiers: [
            { tierName: "Standard", price: "$200", benefits: ["Conference Entry"] },
            { tierName: "VIP", price: "$500", benefits: ["Conference Entry", "VIP Lounge Access"] }
        ]
    },
    {
        id: 'unique-id-2',
        img: "/entertainment.jpg",
        title: "Global Music Festival",
        description: "A weekend of world-class music performances featuring top artists from various genres.",
        location: "Berlin, Germany",
        date: "2024-07-20",
        price: "€100",
        organizer: "World Music Alliance",
        promotionDetails: {
            type: "Limited Offer",
            discount: "€20 Off",
            validUntil: "2024-06-15"
        },
        category: "Music",
        attendeesLimit: 10000,
        registrationLink: "https://example.com/global-music",
        isFeatured: true,
        tags: ["Music", "Festival", "Live Performances"],
        duration: "2 days",
        virtualEvent: false,
        contactEmail: "info@worldmusicalliance.org",
        ratings: {
            average: 4.7,
            count: 1200
        },
        socialLinks: {
            facebook: "https://facebook.com/globalmusicfestival",
            twitter: "https://twitter.com/globalmusic",
            instagram: "https://instagram.com/globalmusic"
        },
        language: "English, German",
        sponsors: ["Music Stream Co.", "Berlin Tourism Board"],
        agenda: [
            { time: "4:00 PM", description: "Opening Performance" },
            { time: "8:00 PM", description: "Headline Act: The Sound Makers" }
        ]
    },
    {
        id: 'unique-id-3',
        img: "/art.jpg",
        title: "Art & Culture Exhibition",
        description: "Discover diverse artistic creations and cultural heritage at the Art & Culture Exhibition.",
        location: "Paris, France",
        date: "2024-06-10",
        price: "Free",
        organizer: "Cultural Alliance",
        category: "Art",
        attendeesLimit: 3000,
        tags: ["Art", "Culture", "Exhibition"],
        accessibilityInfo: "Wheelchair accessible",
        virtualEvent: false,
        contactEmail: "support@culturalalliance.org",
        ratings: {
            average: 4.9,
            count: 450
        },
        language: "French, English",
        sponsors: ["Artisan Group", "Heritage Council"]
    },
    {
        id: 'unique-id-4',
        img: "/inetl.webp",
        title: "Sustainability Summit",
        description: "Join experts and advocates to discuss innovative solutions for a sustainable future.",
        location: "Amsterdam, Netherlands",
        date: "2024-09-12",
        price: "$75",
        organizer: "Green Future Initiative",
        promotionDetails: {
            type: "Discount",
            discount: "10% Off",
            validUntil: "2024-08-01"
        },
        category: "Environment",
        attendeesLimit: 2000,
        registrationLink: "https://example.com/sustainability-summit",
        tags: ["Environment", "Sustainability", "Green"],
        duration: "1 day",
        accessibilityInfo: "Hearing loops available",
        virtualEvent: false,
        contactEmail: "info@greenfuture.org",
        ratings: {
            average: 4.6,
            count: 300
        },
        socialLinks: {
            facebook: "https://facebook.com/sustainabilitysummit",
            twitter: "https://twitter.com/sustainsummit"
        },
        language: "English"
    },
    {
        id: 'unique-id-5',
        img: "/fit.webp",
        title: "Fitness & Wellness Expo 2024",
        description: "An interactive event featuring fitness workshops, wellness talks, and product showcases.",
        location: "Sydney, Australia",
        date: "2024-08-05",
        price: "$50",
        organizer: "FitLife Events",
        promotionDetails: {
            type: "Group Discount",
            discount: "Buy 4 Tickets, Get 1 Free",
            validUntil: "2024-07-15"
        },
        category: "Health & Wellness",
        attendeesLimit: 500,
        registrationLink: "https://example.com/fitness-wellness-expo",
        isFeatured: false,
        tags: ["Fitness", "Wellness", "Expo"],
        duration: "1 day",
        accessibilityInfo: "Sign language interpreters available",
        virtualEvent: true,
        contactEmail: "info@fitlifeevents.com",
        ratings: {
            average: 4.4,
            count: 200
        },
        socialLinks: {
            facebook: "https://facebook.com/fitnessexpo",
            instagram: "https://instagram.com/fitnessexpo"
        },
        timezone: "GMT+10",
        language: "English",
        sponsors: ["HealthPro", "Active Gear Co."],
        agenda: [
            { time: "9:00 AM", description: "Yoga Workshop" },
            { time: "1:00 PM", description: "Nutrition Talk: Healthy Eating Habits" }
        ],
        ticketTiers: [
            { tierName: "General Admission", price: "$50", benefits: ["Expo Entry"] },
            { tierName: "VIP", price: "$100", benefits: ["Expo Entry", "Free Wellness Kit"] }
        ]
    },
    {
        id: 'unique-id-6',
        img: "/film.webp",
        title: "International Film Festival",
        description: "Showcasing films from around the globe, with awards and networking opportunities for filmmakers.",
        location: "Toronto, Canada",
        date: "2024-11-02",
        price: "$20",
        organizer: "Global Cinema Forum",
        promotionDetails: {
            type: "Student Discount",
            discount: "50% Off with Student ID",
            validUntil: "2024-10-20"
        },
        category: "Film & Entertainment",
        attendeesLimit: 1000,
        registrationLink: "https://example.com/film-festival",
        isFeatured: true,
        tags: ["Film", "Festival", "Cinema"],
        duration: "3 days",
        accessibilityInfo: "Audio descriptions available",
        virtualEvent: false,
        contactEmail: "contact@globalcinemaforum.org",
        contactPhone: "+1987654321",
        ratings: {
            average: 4.7,
            count: 700
        },
        socialLinks: {
            facebook: "https://facebook.com/internationalfilmfestival",
            twitter: "https://twitter.com/intfilmfest"
        },
        timezone: "GMT-5",
        language: "English, French",
        sponsors: ["MovieWorld", "Cinema Lovers Association"],
        agenda: [
            { time: "5:00 PM", description: "Opening Film Screening" },
            { time: "8:00 PM", description: "Filmmakers' Networking Dinner" }
        ],
        ticketTiers: [
            { tierName: "Standard", price: "$20", benefits: ["Festival Entry"] },
            { tierName: "Premium", price: "$50", benefits: ["Festival Entry", "Reserved Seating"] }
        ],
        ageRestriction: "16+"
    }
];
