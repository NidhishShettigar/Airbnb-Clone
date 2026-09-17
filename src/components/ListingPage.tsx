import { useEffect, useRef, useState } from "react";
import { AirVent, BadgeAlert, Bath, CalendarDays, Car, ChevronDown, ChevronLeft, ChevronRight,
  CircleCheck, CircleOff, DoorOpen, Fan, Grid3X3, Heart, House, KeyRound, Map, Menu,
  MessageCircle, PawPrint, Search, Share, ShieldCheck, SprayCan, Tag, Utensils, Waves, Wifi,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { nearbyStayPages, property } from "@/data/property";
import { PhotoExperience } from "@/components/PhotoExperience";
import { Globe } from "lucide-react";

const amenities = [Utensils, Wifi, House, Car, Waves, Bath, PawPrint, ShieldCheck, CircleOff, CircleOff,  ];
const highlights: Array<[LucideIcon, string, string]> = [
  [Waves, "Outdoor entertainment", "The pool and alfresco dining are great for summer trips."],
  [Fan, "Designed for staying cool", "Beat the heat with the A/C and ceiling fan."],
  [DoorOpen, "Self check-in", "You can check in with the building staff."],
];
const thingsToKnow: Array<[LucideIcon, string, string]> = [
  [CalendarDays, "Cancellation policy", "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.\nReview this host’s full policy for details."],
  [KeyRound, "House rules", "Check-in after 2:00 pm\nCheckout before 11:00 am\n3 guests maximum"],
  [ShieldCheck, "Safety & property", "Carbon monoxide alarm not reported\nSmoke alarm not reported\nExterior security cameras on property"],
];

function AirbnbMark() {
  return <div className="flex items-center gap-2 text-brand" aria-label="Airbnb home"><svg viewBox="0 0 32 32" className="size-9 fill-none stroke-current stroke-[1.8]"><path d="M16 4c-2.2 0-3.5 2.2-4.8 5.1L6.4 20c-1.5 3.4.2 6.5 3.1 7.3 2 .6 4-.4 6.5-3.5 2.5 3.1 4.5 4.1 6.5 3.5 2.9-.8 4.6-3.9 3.1-7.3L20.8 9.1C19.5 6.2 18.2 4 16 4Z"/><path d="M16 13.5c-2.1 0-3.8 1.8-3.8 4s1.7 4 3.8 6.3c2.1-2.3 3.8-4.1 3.8-6.3s-1.7-4-3.8-4Z"/></svg><span className="text-[23px] font-bold">airbnb</span></div>;
}
<div className="text-7xl font-semibold">
  <span style={{ fontFamily: "'Noto Sans Symbols 2', sans-serif" }}>🙙</span>
  {" "}{property.rating}{" "}
  <span style={{ fontFamily: "'Noto Sans Symbols 2', sans-serif" }}>🙛</span>
</div>
function Header() {
  return <header className="border-b border-border"><div className="mx-auto flex h-[92px] w-page items-center justify-between"><AirbnbMark/><div className="ml-28 flex h-12 items-center rounded-full border border-border bg-background pl-7 pr-2 shadow-search"><button className="font-semibold">🏡 &nbsp; Anywhere</button><span className="mx-5 h-6 w-px bg-border"/><button className="font-semibold">Anytime</button><span className="mx-5 h-6 w-px bg-border"/><button className="text-muted-foreground">Add guests</button><Button size="icon" className="ml-4 size-9 rounded-full bg-brand text-brand-foreground shadow-none hover:bg-brand-hover" aria-label="Search"><Search/></Button></div><div className="flex items-center gap-3"><Button variant="ghost" className="h-11 rounded-full">Become a host</Button><Button variant="secondary" size="icon" className="size-11 rounded-full shadow-none" aria-label="Language and region"> <Globe className="size-5" strokeWidth={2} /></Button><Button variant="secondary" size="icon" className="size-11 rounded-full shadow-none" aria-label="Open menu"><Menu/></Button></div></div></header>;
}

function BookingCard() {
  return <aside className="sticky top-28"><div className="mb-6 flex items-center justify-between rounded-2xl border border-border p-5"><div className="flex items-center gap-4"><Tag className="text-offer"/><span>Get 10% off your next stay.<br/><u>Terms apply.</u></span></div><Button variant="secondary">Claim</Button></div><div className="rounded-2xl border border-border bg-card p-6 shadow-booking"><p><span className="text-2xl font-semibold underline">{property.price}</span> for {property.nights} nights</p><div className="mt-5 overflow-hidden rounded-lg border border-input"><div className="grid grid-cols-2"><div className="border-r border-input p-3"><span className="block text-[11px] font-bold">CHECK-IN</span>10/18/2026</div><div className="p-3"><span className="block text-[11px] font-bold">CHECKOUT</span>10/23/2026</div></div><button className="flex w-full items-center justify-between border-t border-input p-3 text-left"><span><b className="block text-[11px]">GUESTS</b>2 guests</span><ChevronDown className="size-5"/></button></div><div className="mt-4 rounded-lg bg-muted py-2 text-center text-sm text-muted-foreground">Free cancellation before <b className="text-foreground">17 October</b></div><Button className="mt-5 h-13 w-full rounded-full bg-brand text-base text-brand-foreground shadow-none hover:bg-brand-hover">Reserve</Button><p className="mt-4 text-center text-sm text-muted-foreground">You won't be charged yet</p></div><button className="mx-auto mt-7 block text-sm text-muted-foreground underline">⚑ &nbsp; Report this listing</button></aside>;
}

function Calendar() {
  const days = Array.from({length:31},(_,i)=>i+1);
  return <section id="availability" className="border-t border-border py-10"><h2 className="text-2xl font-semibold">5 nights in Candolim</h2><p className="mt-2 text-muted-foreground">18 Oct 2026 - 23 Oct 2026</p><div className="mt-6 grid grid-cols-2 gap-16"><Month title="October 2026" days={days}/><Month title="November 2026" days={days.slice(0,30)}/></div><div className="mt-6 text-right"><button className="font-semibold underline">Clear dates</button></div></section>;
}

function Month({title,days}:{title:string;days:number[]}) { return <div><h3 className="mb-5 text-center font-semibold">{title}</h3><div className="grid grid-cols-7 text-center text-xs font-semibold">{"SMTWTFS".split("").map((d,i)=><span key={`${d}-${i}`}>{d}</span>)}</div><div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-sm">{days.map(d=><span key={d} className={`grid size-10 place-items-center rounded-full ${title.startsWith("October")&&(d===18||d===23)?"bg-foreground text-background":""}`}>{d}</span>)}</div></div> }

function NearbyStays() {
  const [page, setPage] = useState(0);
  const stays = nearbyStayPages[page] ?? nearbyStayPages[0] ?? [];

  return <section className="border-t border-border py-12"><div className="mx-auto w-page"><div className="flex items-center justify-between"><h2 className="text-2xl font-semibold">More stays nearby</h2><div className="flex items-center gap-3"><span className="mr-1 text-sm text-muted-foreground" aria-live="polite">{page + 1} / {nearbyStayPages.length}</span><Button type="button" variant="outline" size="icon" className="size-9 rounded-full shadow-none" onClick={() => setPage(0)} disabled={page === 0} aria-label="Previous nearby stays"><ChevronLeft className="size-5"/></Button><Button type="button" variant="outline" size="icon" className="size-9 rounded-full shadow-none" onClick={() => setPage(1)} disabled={page === nearbyStayPages.length - 1} aria-label="Next nearby stays"><ChevronRight className="size-5"/></Button></div></div><div className="mt-7 grid grid-cols-5 gap-5">{stays.map((stay) => <article key={stay.title}><img src={stay.src} alt={stay.alt} loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-xl object-cover"/><h3 className="mt-2 min-h-12 text-[15px] font-semibold leading-5">{stay.title}</h3><p className="text-sm"><span>{stay.price}</span><span className="mx-2">★</span><span>{stay.rating}</span></p></article>)}</div></div></section>;
}

export function ListingPage() {
  const [tourOpen,setTourOpen]=useState(false); const [initialIndex,setInitialIndex]=useState(-1); const opener=useRef<HTMLButtonElement|null>(null);
  const [activeSection, setActiveSection] = useState("Photos");
  const openTour=()=>(event:React.MouseEvent<HTMLButtonElement>)=>{opener.current=event.currentTarget; setInitialIndex(-1); setTourOpen(true)};
  const closeTour=()=>{setTourOpen(false);setInitialIndex(-1);requestAnimationFrame(()=>opener.current?.focus())};
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = [["Location", "location"], ["Reviews", "reviews"], ["Amenities", "amenities"]] as const;
      const active = sections.find(([, id]) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 120);
      setActiveSection(active?.[0] ?? "Photos");
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);
  return <><Header/><main><div className="mx-auto w-page pt-8"><div className="flex items-end justify-between"><h1 className="text-[28px] font-semibold">{property.title}</h1><div className="flex gap-3"><Button variant="ghost" className="underline"><Share/>Share</Button><Button variant="ghost" className="underline"><Heart/>Save</Button></div></div><div className="mt-6 grid h-[522px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
    {property.photos.slice(0,5).map((photo,index)=><button key={photo.room} onClick={openTour()} className={`group relative overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${index===0?"col-span-2 row-span-2":""}`} aria-label={index===4?"Show all photos":`Open ${photo.room}`}><img src={photo.src} alt={photo.alt} width={1280} height={960} className="size-full object-cover transition-opacity group-hover:opacity-90"/>{index===4&&<span className="absolute bottom-7 right-7 flex items-center gap-2 rounded-lg border border-foreground bg-background px-4 py-2 text-sm font-semibold"><Grid3X3 className="size-4"/>Show all photos</span>}</button>)}
  </div></div>
  <div className="sticky top-0 z-20 mt-10 border-y border-border bg-background"><div className="mx-auto flex h-[68px] w-page items-center justify-between"><nav className="flex h-full gap-8" aria-label="Listing sections">{[["Photos","details"],["Amenities","amenities"],["Reviews","reviews"],["Location","location"]].map(([name,id])=><a key={id} href={`#${id}`} className={`grid h-full place-items-center border-b-2 text-sm font-semibold ${activeSection === name ? "border-foreground" : "border-transparent hover:border-foreground"}`} aria-current={activeSection === name ? "location" : undefined}>{name}</a>)}</nav><div className="flex items-center gap-5"><div className="text-right text-sm"><b>{property.price}</b> for 5 nights<br/><span>★ {property.rating} · {property.reviews} reviews</span></div><Button className="h-11 rounded-full bg-brand px-7 text-brand-foreground shadow-none hover:bg-brand-hover">Reserve</Button></div></div></div>
  <div className="mx-auto grid w-page grid-cols-[694px_396px] gap-[102px] pt-1"><div>
    <section id="details" className="py-1"><h2 className="text-2xl font-semibold">Entire serviced apartment in Candolim, India</h2><p className="mt-1">3 guests · 1 bedroom · 1 bed · 1 bathroom</p><div className="my-8 grid grid-cols-[155px_1fr_90px_90px] items-center rounded-2xl border border-border px-7 py-5 text-center"><b>🙙Guest Favourite🙛</b><span className="border-x border-border px-5 text-left">One of the most loved homes on Airbnb, according to guests</span><b className="text-xl">4.95<br/><small>★★★★★</small></b><b className="text-xl">19<br/><small>Reviews</small></b></div><div className="flex items-center gap-4 border-b border-border pb-7"><div className="grid size-12 place-items-center rounded-full bg-host text-host-foreground text-xs">M</div><div><b>Hosted by Mirashya Homes</b><p className="text-sm text-muted-foreground">2 years hosting</p></div></div><div className="space-y-6 py-8">{highlights.map(([Icon,title,text])=><div key={title} className="flex gap-5"><Icon className="size-6"/><div><b>{title}</b><p className="text-muted-foreground">{text}</p></div></div>)}</div><div className="border-y border-border py-7"><div className="rounded-xl bg-muted p-5 text-sm">Some info has been automatically translated. <u><b>Show original</b></u></div><p className="mt-4 leading-6">🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴</p><button className="mt-4 font-semibold underline">Show more</button></div></section>
    <section className="py-9"><h2 className="text-2xl font-semibold">Where you'll sleep</h2><div className="mt-6 grid grid-cols-2 gap-5">{property.photos.slice(1,3).map((p,i)=><div key={p.room}><img src={p.src} alt={p.alt} loading="lazy" width={1280} height={960} className="aspect-[3/2] w-full rounded-lg object-cover"/><b className="mt-3 block">{i===0?"Living room":"Full kitchen"}</b><p className="text-muted-foreground">{i===0?"1 sofa":"Dining area"}</p></div>)}</div></section>
    <section id="amenities" className="border-t border-border py-9"><h2 className="text-2xl font-semibold">What this place offers</h2><div className="mt-7 grid grid-cols-2 gap-y-6">{property.amenities.map((item, i) => {const Icon = amenities[i] ?? AirVent; const unavailable = item === "Carbon monoxide alarm" || item === "Smoke alarm"; return ( <div key={item} className={`flex items-center gap-4 ${ unavailable ? "text-muted-foreground" : "" }`} ><Icon className="size-6" /> <span className={unavailable ? "line-through" : ""}> {item} </span></div>); })}</div><Button variant="outline" className="mt-8 h-12 border-foreground px-6 text-base">Show all 50 amenities</Button></section><Calendar/>
  </div><div className="pt-10"><BookingCard/></div></div>
  
<section id="reviews" className="border-t border-border py-14">
  <div className="mx-auto w-page">
    <div className="text-center">
      <div className="flex items-center justify-center gap-4">
  <span className="text-7xl font-semibold" style={{ fontFamily: "'Noto Sans Symbols 2', sans-serif" }}>🙙</span>
  <span className="text-7xl font-semibold">{property.rating}</span>
  <span className="text-7xl font-semibold" style={{ fontFamily: "'Noto Sans Symbols 2', sans-serif" }}>🙛</span>
</div>
      <h2 className="mt-6 text-2xl font-semibold">Guest favourite</h2>
      <p className="mt-2">This home is a guest favourite based on ratings, reviews and reliability</p>
      <button className="mt-4 font-semibold underline">How reviews work</button>
    </div>

    <div className="mt-12 grid grid-cols-7 border-y border-border py-6">
      {/* Overall rating bar chart */}
      <div className="border-r border-border px-6">
        <b>Overall rating</b>
        <div className="mt-4 space-y-1.5">
          {[["5", 100], ["4", 5], ["3", 0], ["2", 0], ["1", 0]].map(([label, pct]) => (
            <div key={label} className="flex items-center gap-2 text-xs">
              <span className="w-2">{label}</span>
              <div className="h-[3px] flex-1 rounded bg-border">
                <div className="h-[3px] rounded bg-foreground" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category scores with icons */}
      {(
  [
    ["Cleanliness", "5.0", SprayCan],
    ["Accuracy", "5.0", CircleCheck],
    ["Check-in", "5.0", KeyRound],
    ["Communication", "5.0", MessageCircle],
    ["Location", "4.8", Map],
    ["Value", "4.8", Tag],
  ] as Array<[string, string, LucideIcon]>
).map(([label, score, Icon]) => (
  <div
    key={label}
    className="border-r border-border px-6 last:border-0"
  >
    <b>{label}</b>
    <div className="mt-2 text-xl font-semibold">{score}</div>
    <Icon className="mt-3 size-7" />
  </div>
))}
    </div>

    {/* Tag pills row */}
    <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
      {[
        ["🛏️", "Comfort", 6],
        ["✅", "Accuracy", 5],
        ["🛁", "Hot tub", 5],
        ["📦", "Condition", 4],
        ["🎁", "Hospitality", 8],
        ["🧴", "Cleanliness", 4],
        ["🎀", "Amenities", 2],
      ].map(([emoji, label, count]) => (
        <span
          key={label as string}
          className="flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
        >
          <span>{emoji}</span>
          <b>{label}</b>
          <span className="text-muted-foreground">{count}</span>
        </span>
      ))}
    </div>

    {/* Reviews grid */}
    <div className="mt-10 grid grid-cols-2 gap-x-28 gap-y-14">
      {property.reviewsList.map((r, i) => (
        <article key={r.name}>
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-full bg-avatar font-semibold">
  {r.name[0]}
</div>
            <div>
              <b>{r.name}</b>
              <p className="text-sm text-muted-foreground">{r.meta}</p>
            </div>
          </div>
          <p className="mt-3 text-sm">★★★★★ · {r.date}</p>
          <p className="mt-2 leading-6">{r.text}</p>
          {i % 2 === 1 && <button className="mt-2 font-semibold underline">Show more</button>}
        </article>
      ))}
    </div>
  </div>
</section>
  <section id="location" className="border-t border-border py-12"><div className="mx-auto w-page"><h2 className="text-2xl font-semibold">Where you’ll be</h2><p className="mt-5">{property.location}</p><div className="relative mt-7 h-[510px] overflow-hidden rounded-xl bg-map"><div className="map-grid absolute inset-0"/><div className="absolute left-0 top-0 h-full w-[38%] bg-water [clip-path:polygon(0_0,100%_0,50%_100%,0_100%)]"/><div className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-foreground text-background shadow-booking"><House/></div><div className="absolute right-4 top-4 grid gap-2"><Button size="icon" variant="secondary" aria-label="Zoom in">+</Button><Button size="icon" variant="secondary" aria-label="Zoom out">−</Button></div></div><p className="mt-4 text-sm">Exact location will be provided after booking.</p></div></section>
  <section className="border-t border-border py-8">
  <div className="mx-auto w-page">
    <h2 className="text-2xl font-semibold">Neighbourhood highlights</h2>

    <p className="mt-5 text-base leading-1">
      Located in the heart of Candolim, Amor de Goa offers a peaceful stay
      with easy access to beaches, cafés, and popular attractions.
    </p>

    <button
      type="button"
      className="mt-6 flex items-center gap-1 font-semibold underline underline-offset-2"
    >
      Show more
      <ChevronRight className="size-5" strokeWidth={2} />
    </button>
  </div>
</section>
  <section className="border-t border-border py-12">
  <div className="mx-auto w-page">
    <h2 className="text-2xl font-semibold">Meet your host</h2>

    <div className="mt-7 grid grid-cols-[360px_1fr] gap-14">

      {/* LEFT SIDE */}
      <div>
        <div className="grid grid-cols-[1fr_105px] rounded-2xl border border-border p-8 shadow-booking">
          <div className="text-center">
            <div className="mx-auto grid size-24 place-items-center rounded-full bg-host text-host-foreground">
              MIRASHYA
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
              Mirashya
              <br />
              Homes
            </h3>

            <span>Host</span>
          </div>

          <div className="border-l border-border pl-5">
            <b className="text-xl">1,463</b>
            <small className="block">Reviews</small>

            <hr className="my-4" />

            <b className="text-xl">4.68★</b>
            <small className="block">Rating</small>

            <hr className="my-4" />

            <b className="text-xl">2</b>
            <small className="block">Years hosting</small>
          </div>
        </div>

        {/* HOST INFORMATION */}
        <div className="mt-7 space-y-5">
          <div className="flex items-center gap-4">
            <span className="text-2xl">✤</span>
            <span>Born in the 80s</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl">㉆</span>
            <span>Where I went to school: NICMAR GOA</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h3 className="text-xl font-semibold">Co-Hosts</h3>

        <div className="mt-5 grid grid-cols-3 gap-7">
          {[
            "Sharath",
            "Aman Dev Palhwa",
            "Maria Karen Priyanka",
            "Simran",
            "Pallavi",
            "Sanyukta",
            "Shruti",
            "Amisha",
          ].map((n) => (
            <span
              key={n}
              className="flex items-center gap-3"
            >
              <i className="grid size-9 place-items-center rounded-full bg-avatar not-italic">
                {n[0]}
              </i>
              {n}
            </span>
          ))}
        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Host details
        </h3>

        <p className="mt-4 leading-7">
          Response rate: 100%
          <br />
          Responds within an hour
        </p>

        <Button
          variant="secondary"
          className="mt-5 h-12 px-6"
        >
          Message host
        </Button>

        {/* PAYMENT SAFETY MESSAGE */}
        <div className="mt-8 flex items-start gap-4 text-sm text-muted-foreground">
          <ShieldCheck
            className="mt-0.5 size-7 shrink-0"
            strokeWidth={1.5}
          />

          <p className="leading-6">
            To help protect your payment, always use Airbnb
            to send money and communicate with hosts.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  <section className="border-t border-border py-12"><div className="mx-auto w-page"><h2 className="text-2xl font-semibold">Things to know</h2><div className="mt-7 grid grid-cols-3 gap-20">{thingsToKnow.map(([Icon,title,text])=><div key={title}><Icon className="size-7"/><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-4 whitespace-pre-line leading-[30px]">{text}</p><Button type="button" variant="link" className="mt-1 h-auto p-0 font-semibold text-foreground underline">Learn more</Button></div>)}</div></div></section>
  <NearbyStays/>
  </main><PhotoExperience open={tourOpen} initialIndex={initialIndex} onClose={closeTour}/></>;
}