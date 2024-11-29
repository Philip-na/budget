import { ArrowDownZA, Calculator, CalendarCheck, CalendarRange, ChartGantt, ContactRound, FileUser, Globe, HandPlatter, HeartHandshake, ListTodo, SquareSigma, Sun } from "lucide-react"

export const  univesell:{title:string,href:string,description:string, icon: React.ReactNode}[] = [
  // {
  //   title: "Market Place",
  //   href: "/marketplace",
  //   description: "find all your needs",
  //   icon: <Sun />
  // },
    {
      title: "Events",
      href: "/venue",
      description: "All our venues",
      icon: <CalendarRange />
      },
    {
      title: "Services",
      href: "/services",
      description: "All what Our different vsendors offer",
      icon: <HandPlatter />
    },
    {
      title: "Promotions",
      href: "/promotions",
      description: "All our promotions",
      icon: <Sun />
      },
    {
      title: "Vendor",
      href: "/vendor",
      description: "All our vendors",
      icon: <ContactRound />
    },
  
    
  ]


  export const categories:{name:string,href:string,description:string, icon?: React.ReactNode, image: string}[] = [

    {
      name: "Catering and Food Services",
      href: "/catering",
      description: "Find all your catering needs",
      image: "/catering.jpg"
    },
    {
      name: "Event Planning",
      href: "/eventplanning",
      description: "Find all your event planning needs",
      image: "/eventplanning.jpg"
    },
    {
      name: "Decor and Design",
      href: "/decor",
      description: "Find all your decor needs",
      image: "/decor.jpeg"
    },
    {
      name: "Photography and Videography",
      href: "/photography",
      description: "Find all your photography needs",
      image: "/photography.jpeg"
    },
    {
      name: "Floral Arrangements",
      href: "/floral",
      description: "Find all your floral needs",
      image: "/floral.jpeg"
    },
    {
      name: "Beauty and Grooming",
      href: "/beauty_and_grooming",
      description: "Find all your beauty and grooming needs",
      image: "/beauty.webp"
    },
    {
      name: "Entertainment",
      href: "/entertainment",
      description: "Find all your entertainment needs",
      image: "/entertainment.jpg"
    },
    {
      name: "Transportation",
      href: "/transportation",
      description: "Find all your transportation needs",
      image: "/transportation.jpg"
    },
    {
      name: "Accomodation",
      href: "/accomodation",
      description: "Find all your accomodation needs",
      image: "/accomodation.jpeg"
    },
    {
      name: "Health and Beauty",
      href: "/healthandbeauty",
      description: "Find all your health and beauty needs",
      image: "/healthandbeauty.avif"
    },
    {
      name: "Gifts and Favors",
      href: "/gifts",
      description: "Find all your gifts and favors needs",
      image: "/gifts.webp"
    },

    {
      name: "Fashion",
      href: "/fashion",
      description: "Find all your fashion needs",
      image: "/fashion.jpg"
    },
  
    
  ]


  export const tools:{name:string,href:string,description:string, icon?: React.ReactNode, image: string}[] = [
    {
      name: "Budget Calculator",
      href: "/budget",
      description: "Calculate your budget",
      image: "/budget.jpg",
      icon: <Calculator size={36} />
    },
    {
      name: "Checklist",
      href: "/checklist",
      description: "Checklist for your event",
      image: "/checklist.jpg",
      icon: <ListTodo size={36} />
    },
    {
      name: "Guest List",
      href: "/guestlist",
      description: "Manage your guest list",
      image: "/guestlist.jpg",
      icon: <FileUser size={36} />
    },
    {
      name: "Seating Arrangement",
      href: "/seating",
      description: "Arrange your seating",
      image: "/seating.jpg",
      icon: <ArrowDownZA size={36} />
    },
    {
      name: "Event Timeline",
      href: "/timeline",
      description: "Plan your event",
      image: "/timeline.jpg",
      icon: <ChartGantt size={36} />
    },
 
    {
      name: "Event Planner",
      href: "/eventplanner",
      description: "Plan your event",
      image: "/eventplanner.jpg",
      icon: <Sun />
    },
    {
      name: "Registry",
      href: "/registry",
      description: "Create your registry",
      image: "/registry.jpg",
      icon: <Sun />
    },
    {
      name: "RSVP",
      href: "/rsvp",
      description: "Manage your RSVP",
      image: "/rsvp.jpg",
      icon: <CalendarCheck size={36} />
    },
    {
      name: "Event Website",
      href: "/website",
      description: "Create your event website",
      image: "/website.jpg",
      icon: <Globe size={36} />
    },
    {
      name: "Collaboration",
      href: "/collaboration",
      description: "Collaborate with your team",
      image: "/collaboration.jpg",
      icon: <HeartHandshake size={36} />

    }
  
  ]