import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { property } from "@/data/property";

type PhotoExperienceProps = {
  open: boolean;
  initialIndex: number;
  onClose: () => void;
};

export function PhotoExperience({ open, initialIndex, onClose }: PhotoExperienceProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const lightboxOpenerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = () => {
    setLightboxIndex(null);
    requestAnimationFrame(() => lightboxOpenerRef.current?.focus());
  };

  const openLightbox = (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    lightboxOpenerRef.current = event.currentTarget;
    setLightboxIndex(index);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) closeLightbox();
        else onClose();
      }
      if (lightboxIndex !== null && event.key === "ArrowLeft") {
        setLightboxIndex((lightboxIndex - 1 + property.photos.length) % property.photos.length);
      }
      if (lightboxIndex !== null && event.key === "ArrowRight") {
        setLightboxIndex((lightboxIndex + 1) % property.photos.length);
      }
      if (event.key === "Tab") {
        const activeDialog = document.querySelector<HTMLElement>(lightboxIndex === null ? '[aria-label="Photo tour"]' : '[aria-label="Photo lightbox"]');
        const focusable = activeDialog ? Array.from(activeDialog.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')).filter((element) => !element.hasAttribute("disabled")) : [];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, onClose, open]);

  useEffect(() => {
    if (lightboxIndex !== null) lightboxCloseRef.current?.focus();
  }, [lightboxIndex]);

  useEffect(() => {
    if (!open) setLightboxIndex(null);
  }, [open]);

  if (!open) return null;
  const next = () => setLightboxIndex((current) => current === null ? 0 : (current + 1) % property.photos.length);
  const previous = () => setLightboxIndex((current) => current === null ? 0 : (current - 1 + property.photos.length) % property.photos.length);

  return (
    <div className="fixed inset-0 z-50 bg-background animate-overlay-in" role="dialog" aria-modal="true" aria-label="Photo tour">
      <header className="sticky top-0 z-10 flex h-20 items-center justify-between bg-background px-8">
        <Button ref={closeButtonRef} variant="ghost" size="icon" className="size-11 rounded-full" onClick={onClose} aria-label="Close photo tour"><ChevronLeft /></Button>
        <h2 className="text-base font-semibold">Photo tour</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="size-11 rounded-full" aria-label="Share listing"><Share /></Button>
          <Button variant="ghost" size="icon" className="size-11 rounded-full" aria-label="Save listing"><Heart /></Button>
        </div>
      </header>
      <div className="h-[calc(100vh-5rem)] overflow-y-auto pb-24">
        <nav className="mx-auto flex w-[1038px] gap-3 py-3" aria-label="Photo categories">
          {property.photos.map((photo, index) => (
            <button key={photo.room} className="w-[118px] shrink-0 text-left text-sm text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" onClick={() => document.getElementById(`photo-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}>
              <img src={photo.src} alt="" width={1280} height={960} className="mb-2 h-28 w-full rounded-lg object-cover transition-opacity hover:opacity-85" />
              <span>{photo.room}</span>
            </button>
          ))}
        </nav>
        <div className="mx-auto mt-12 w-[1038px]">
          {property.photos.map((photo, index) => (
            <section id={`photo-${index}`} key={photo.room} className="grid min-h-[590px] grid-cols-[1fr_500px] gap-20 border-b border-border py-16">
              <div><h3 className="text-3xl font-semibold">{photo.room}</h3><p className="mt-2 text-lg text-muted-foreground">{photo.details}</p></div>
              <button className="self-start overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" onClick={openLightbox(index)} aria-label={`Open ${photo.room} in lightbox`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.01]" />
              </button>
            </section>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-20 grid place-items-center bg-lightbox animate-overlay-in" role="dialog" aria-modal="true" aria-label="Photo lightbox">
          <Button ref={lightboxCloseRef} variant="ghostInverse" size="icon" className="absolute left-7 top-6 size-11 rounded-full" onClick={closeLightbox} aria-label="Close lightbox"><X /></Button>
          <div className="absolute right-8 top-8 text-sm text-lightbox-foreground">{lightboxIndex + 1} / {property.photos.length}</div>
          <Button variant="ghostInverse" size="icon" className="absolute left-7 size-12 rounded-full" onClick={previous} aria-label="Previous photo"><ChevronLeft /></Button>
          <img key={lightboxIndex} src={property.photos[lightboxIndex]?.src} alt={property.photos[lightboxIndex]?.alt ?? "Property photo"} width={1280} height={960} className="max-h-[78vh] max-w-[78vw] object-contain animate-photo-in" />
          <Button variant="ghostInverse" size="icon" className="absolute right-7 size-12 rounded-full" onClick={next} aria-label="Next photo"><ChevronRight /></Button>
        </div>
      )}
    </div>
  );
}