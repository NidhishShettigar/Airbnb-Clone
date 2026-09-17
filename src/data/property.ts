import terrace from "@/assets/terrace-jacuzzi.jpg";
import living from "@/assets/living-room.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import exterior from "@/assets/exterior.jpg";
import nearbyStudio from "@/assets/nearby-studio.jpg";
import nearbyNaqab from "@/assets/nearby-naqab.jpg";
import nearbyGreentique from "@/assets/nearby-greentique.jpg";
import nearbyTropical from "@/assets/nearby-tropical.jpg";
import nearbyCasaBella from "@/assets/nearby-casa-bella.jpg";

export type PropertyPhoto = {
  src: string;
  alt: string;
  room: string;
  details: string;
};

export type NearbyStay = {
  src: string;
  alt: string;
  title: string;
  price: string;
  rating: string;
};

export const nearbyStayPages: NearbyStay[][] = [
  [
    { src: nearbyStudio, alt: "Sunny studio overlooking green hills", title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91" },
    { src: nearbyNaqab, alt: "Bright white living room with an orange armchair", title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95" },
    { src: nearbyGreentique, alt: "Double-height living room with a teal sofa", title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94" },
    { src: nearbyTropical, alt: "Tropical studio with green walls and a large bed", title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
    { src: nearbyCasaBella, alt: "Airy living room with navy seating", title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
  ],
  [
    { src: nearbyCasaBella, alt: "Airy living room with navy seating", title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
    { src: nearbyTropical, alt: "Tropical studio with green walls and a large bed", title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
    { src: nearbyGreentique, alt: "Double-height living room with a teal sofa", title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94" },
    { src: nearbyNaqab, alt: "Bright white living room with an orange armchair", title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95" },
    { src: nearbyStudio, alt: "Sunny studio overlooking green hills", title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91" },
  ],
];

export const property = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  location: "Candolim, Goa, India",
  rating: 4.95,
  reviews: 19,
  price: "₹28,499",
  nights: 5,
  guests: 3,
  host: "Mirashya Homes",
  photos: [
    { src: terrace, alt: "Private terrace with a jacuzzi and rattan seating", room: "Additional photos", details: "Private hot tub · Outdoor lounge" },
    { src: living, alt: "Warm living room with leather sofa and dining area", room: "Living room 1", details: "Sofa · Air conditioning · Ceiling fan · TV" },
    { src: kitchen, alt: "Full kitchen with wood cabinets and dark counters", room: "Full kitchen", details: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery" },
    { src: bedroom, alt: "Bright bedroom with white double bed and terrace doors", room: "Bedroom", details: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi" },
    { src: bathroom, alt: "Modern full bathroom with glass shower", room: "Full bathroom", details: "Walk-in shower · Hot water · Essentials" },
    { src: exterior, alt: "Aerial view of the apartment building in Goa", room: "Exterior", details: "Residential building · Tropical neighbourhood" },
  ] satisfies PropertyPhoto[],
  reviewsList: [
    { name: "Amit", meta: "2 months on Airbnb", date: "1 week ago", text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property." },
    { name: "Aheesh", meta: "3 years on Airbnb", date: "2 weeks ago", text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay." },
    { name: "Samiksha", meta: "8 months on Airbnb", date: "May 2026", text: "the host nitish was really great help" },
    { name: "Vedant", meta: "4 years on Airbnb", date: "May 2026", text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained." },
    { name: "Vaibhav S", meta: "3 years on Airbnb", date: "May 2026", text: "Great experience living out there, couldn't expect more. We will always look forward to returning." },
    { name: "Mohd", meta: "5 years on Airbnb", date: "May 2026", text: "Great place. Exactly as described in the listing." },
  ],
  amenities: ["Kitchen", "Wifi", "Dedicated workspace", "Free parking on premises", "Pool", "Hot tub", "Pets allowed", "Exterior security cameras on property","Carbon monoxide alarm","Smoke alarm"],
};