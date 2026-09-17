import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "@/components/ListingPage";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" },
    { name: "description", content: "Explore a romantic one-bedroom Candolim stay with a private jacuzzi, pool and guest-favourite rating." },
    { property: "og:title", content: "Romantic Jacuzzi 1BHK Candolim" },
    { property: "og:description", content: "A guest-favourite one-bedroom stay in Candolim, Goa." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ListingPage,
});
