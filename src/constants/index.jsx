import { Hotel } from "lucide-react"
import { Plane } from "lucide-react"
import { Ship } from "lucide-react"
import { Car } from "lucide-react"

import tokyo from "../assets/tokyo.jpg"
import beijing from "../assets/beijing.jpg"
import hawaii from "../assets/hawaii.jpg"
import semporna from "../assets/semporna.jpg"
import bangkok from "../assets/bangkok.jpg"
import yushin from "../assets/yushin.jpg"

export const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Packages", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
]

export const numbers = [
    { value: "534", description: "Trips Done" },
    { value: "424", description: "Corporate Clients" },
    { value: "35", description: "Visited Countries" },
    { value: "15", description: "Team Members" }
]

export const packages = [
    {
        img: tokyo,
        place: "Tokyo, Japan",
        price: "$399"
    },
    {
        img: beijing,
        place: "Beijing, China",
        price: "$599"
    },
    {
        img: hawaii,
        place: "Hawaii, USA",
        price: "$799"
    },
    {
        img: semporna,
        place: "Semporna, Malaysia",
        price: "$999"
    },
    {
        img: bangkok,
        place: "Bangkok, Thailand",
        price: "$499"
    },
    {
        img: yushin,
        place: "Yushin, Singapore",
        price: "$299"
    }

]

export const services = [
    {
        icon: <Hotel size={52} />,
        text: "Hotel Booking",
        description: "Perfect stay, from budget-friendly rooms to luxury resorts, at the best prices."
    },
    {
        icon: <Plane />,
        text: "Flight Booking",
        description: "Easy and affordable flight reservations to destinations around the globe."
    },
    {
        icon: <Ship />,
        text: "Ship Booking",
        description: "Cruise through oceans and rivers with seamless ship and ferry bookings."
    },
    {
        icon: <Car />,
        text: "Car Booking",
        description: "Convenient car rentals for stress-free local travel and road trips."
    }
]

export const testimonials = [
    {
        id: 1,
        view: "I had always dreamed of visiting Japan but was nervous about planning it alone. Travia’s customized itinerary gave me the confidence I needed. They arranged my flights, JR passes, and even unique experiences like a sushi-making class in Tokyo and a traditional tea ceremony in Kyoto. I felt safe, supported, and free to enjoy every moment. I came back with lifelong memories.",
        name: "Karan M."
    },
    {
        id: 2,
        view: "Traveling with two kids can be overwhelming, but Travia made it simple. They helped us plan our USA trip covering Disneyland, the Grand Canyon, and even a relaxing stop in Miami. The hotels were kid-friendly, the activities were perfectly paced, and transport was seamless. Instead of stressing about logistics, we actually got to enjoy time together as a family.",
        name: "Meera and family"
    },
    {
        id: 3,
        view: "Organizing a corporate trip for 40 employees isn’t easy, but Travia handled it flawlessly. Our retreat in Malaysia included excellent 4-star accommodation, guided city tours, team-building activities, and smooth transfers. Every detail was well thought out, and our team came back motivated and refreshed. We’ll definitely partner with them again for future events",
        name: "Arjun S., HR Manager"
    },
    {
        id: 4,
        view: "Visiting China was always on my bucket list, but I worried about the language barrier and logistics. Travia planned everything from Beijing to Shanghai—Great Wall tours, local guides, comfortable hotels, and even a day trip to Suzhou. I never felt lost or stressed, and I got to truly enjoy the culture, food, and history. It was an experience I’ll never forget",
        name: "Sneha R."
    }
]

export const QuickLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "About" },
    { href: "#", text: "Trip Package" },
    { href: "#", text: "Services" },
    { href: "#", text: "Gallery" },
];

export const SupportLinks = [
    { href: "#", text: "Customer Support" },
    { href: "#", text: "Privacy & Policy" },
    { href: "#", text: "Terms & Condition" },
    { href: "#", text: "Forum" },
    { href: "#", text: "Tour Guide" },
];

export const socialMediaIcons = [
    "facebook", "twitter", "instagram", "linkedin"
]