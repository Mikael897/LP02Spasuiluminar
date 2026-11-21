import { createFileRoute } from "@tanstack/react-router";
import {
  useRef,
  useEffect,
  useState,
  type FocusEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Sun,
  MessageCircle,
  Leaf,
  Wind,
  Heart,
  Instagram,
  MapPin,
  Menu,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import carouselImageOne from "@/images/images_videos_carrosel/imagemCarrosel01.jpg?url";
import carouselImageTwo from "@/images/images_videos_carrosel/ImagemCarrosel02.jpg?url";
import carouselImageThree from "@/images/images_videos_carrosel/imagemCarrosel03.JPG?url";
import carouselVideoTwo from "@/images/images_videos_carrosel/video02Carrosel.mp4?url";
import professionalPhoto from "@/images/fotoProfissional/ImagemFotoProssifional.PNG?url";
import escaldaPesImage from "@/images/cardEfeitos/escaldaPes.jpeg?url";
import massagemRelaxanteImage from "@/images/cardEfeitos/MassagemRelaxante.png?url";
import massagemTerapeuticaImage from "@/images/cardEfeitos/Terapeutica.png?url";
import facialImage from "@/images/cardEfeitos/Facial.PNG?url";
import capilarImage from "@/images/cardEfeitos/Capilar.PNG?url";
import googleReviewImage01 from "@/images/avaliacaoGoogle/avaliacao01.png?url";
import googleReviewImage02 from "@/images/avaliacaoGoogle/avaliacao02.png?url";
import googleReviewImage03 from "@/images/avaliacaoGoogle/avaliacao03.png?url";
import googleReviewImage04 from "@/images/avaliacaoGoogle/avaliacao04.png?url";
import googleReviewImage05 from "@/images/avaliacaoGoogle/avaliacao05.png?url";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpaSu Iluminar — Massagens e experiências de bem-estar" },
      {
        name: "description",
        content:
          "Massagem terapêutica, relaxante, escalda-pés e Head Spa. Um momento para desacelerar e cuidar de você. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "SpaSu Iluminar — Um momento para desacelerar" },
      {
        property: "og:description",
        content:
          "Massagens e rituais de autocuidado com atendimento individual. Agende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function usePageAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".hero-copy-entry", { autoAlpha: 0, y: 30, duration: 1.15 })
          .from(".hero-image-entry", { autoAlpha: 0, scale: 0.96, duration: 1.3 }, 0.15)
          .from(".hero-cta-entry", { autoAlpha: 0, y: 24, duration: 0.9 }, 1.5);

        gsap.to(".hero-glow-motion", {
          scale: 1.035,
          y: 8,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".scroll-card").forEach((card, index) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 48, scale: 0.93, rotation: 1.5 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.85,
              delay: (index % 4) * 0.12,
              ease: "back.out(1.3)",
              overwrite: "auto",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        gsap.fromTo(
          ".needs-title",
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".needs-section",
              start: "top 76%",
              once: true,
            },
          },
        );

        media.add("(max-width: 767px)", () => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".head-spa",
                start: "top 92%",
                once: true,
              },
            })
            .fromTo(
              ".head-spa-photo",
              { autoAlpha: 0, y: 12, scale: 1.025 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
            )
            .fromTo(
              ".head-spa-panel",
              { autoAlpha: 0, x: 24 },
              { autoAlpha: 1, x: 0, duration: 0.45, ease: "power2.out" },
              "-=0.2",
            )
            .fromTo(
              ".head-spa-content",
              { autoAlpha: 0, y: 12 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
              },
              "-=0.15",
            );
        });

        media.add("(min-width: 768px)", () => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".head-spa",
                start: "top 88%",
                once: true,
              },
            })
            .fromTo(
              ".head-spa-photo",
              { autoAlpha: 0, y: 12, scale: 1.025 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "power2.out" },
            )
            .fromTo(
              ".head-spa-panel",
              { autoAlpha: 0, x: 40 },
              { autoAlpha: 1, x: 0, duration: 0.55, ease: "power2.out" },
              "-=0.25",
            )
            .fromTo(
              ".head-spa-content",
              { autoAlpha: 0, y: 16 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.12,
                ease: "power2.out",
              },
              "-=0.2",
            );
        });

        gsap.utils.toArray<HTMLElement>(".attendance-counter").forEach((counter) => {
          gsap.fromTo(
            counter,
            { textContent: 0 },
            {
              textContent: 700,
              duration: 5,
              ease: "none",
              snap: { textContent: 1 },
              immediateRender: false,
              scrollTrigger: {
                trigger: counter,
                start: "top 82%",
                once: true,
              },
            },
          );
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".personal-section",
              start: "top 76%",
              once: true,
            },
          })
          .fromTo(
            ".personal-title",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          )
          .fromTo(
            ".journey-line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1, ease: "power2.out" },
            0.35,
          )
          .fromTo(
            ".personal-icon",
            { autoAlpha: 0, y: 10, scale: 0.82 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.18,
              ease: "back.out(1.4)",
            },
            0.45,
          );
      });

      return () => media.revert();
    },
    { scope },
  );
}

function WaButton({
  children,
  variant = "primary",
  className = "",
  whatsappService,
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  whatsappService?: string;
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
    outline: "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground",
    light: "bg-background text-primary hover:bg-card shadow-soft",
  }[variant];
  return (
    <a
      href={whatsappLink(whatsappService)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className = "",
  reveal = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  reveal?: boolean;
}) {
  return (
    <div className={`${reveal ? "reveal " : ""}mx-auto max-w-2xl text-center ${className}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#agendamento", label: "Agendamento" },
];

const carouselMedia = [
  { type: "image", src: carouselImageOne, alt: "Momento de cuidado no SpaSu Iluminar" },
  { type: "image", src: carouselImageTwo, alt: "Experiência de bem-estar no SpaSu Iluminar" },
  { type: "image", src: carouselImageThree, alt: "Ambiente de relaxamento do SpaSu Iluminar" },
  { type: "image", src: escaldaPesImage, alt: "Escalda-pés no SpaSu Iluminar" },
  { type: "image", src: massagemRelaxanteImage, alt: "Massagem relaxante no SpaSu Iluminar" },
  { type: "image", src: massagemTerapeuticaImage, alt: "Massagem terapêutica no SpaSu Iluminar" },
  { type: "image", src: facialImage, alt: "Terapia facial no SpaSu Iluminar" },
  { type: "image", src: capilarImage, alt: "Terapia capilar no SpaSu Iluminar" },
  { type: "video", src: carouselVideoTwo, alt: "Vídeo de um momento de cuidado no SpaSu Iluminar" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between">
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <Sun className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.4} />
          <span className="truncate font-display text-2xl text-foreground">
            SpaSu <span className="text-gold">Iluminar</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WaButton className="!px-5 !py-2.5">Agendar pelo WhatsApp</WaButton>
          </div>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-xl text-foreground"
            >
              {n.label}
            </a>
          ))}
          <WaButton className="mt-3 w-full">Agendar pelo WhatsApp</WaButton>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeMedia = carouselMedia[activeMediaIndex]!;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMediaIndex((index) => (index + 1) % carouselMedia.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, []);

  const showPreviousMedia = () => {
    setActiveMediaIndex((index) => (index - 1 + carouselMedia.length) % carouselMedia.length);
  };
  const showNextMedia = () => {
    setActiveMediaIndex((index) => (index + 1) % carouselMedia.length);
  };

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="glow-bg hero-glow-motion pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <div className="hero-copy-entry">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Massoterapia & bem-estar</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Um momento para <em className="text-primary">desacelerar</em> e cuidar de você.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Massagens e experiências de bem-estar pensadas para aliviar tensões, renovar as
              energias e trazer mais presença para o seu corpo.
            </p>
          </div>
          <div className="hero-cta-entry mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <WaButton>Agendar minha experiência</WaButton>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted">
                <Heart className="h-4 w-4 text-primary" />
              </span>
              Atendimento individual
              <br className="hidden sm:block" /> e personalizado
            </div>
          </div>
        </div>
        <div className="hero-image-entry relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-agua/60 rotate-3" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            {activeMedia.type === "video" ? (
              <video
                key={activeMedia.src}
                src={activeMedia.src}
                autoPlay
                muted
                loop
                playsInline
                aria-label={activeMedia.alt}
                className="h-full w-full animate-in fade-in-0 object-cover duration-700"
              />
            ) : (
              <img
                key={activeMedia.src}
                src={activeMedia.src}
                alt={activeMedia.alt}
                className="h-full w-full animate-in fade-in-0 object-cover duration-700"
              />
            )}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                type="button"
                onClick={showPreviousMedia}
                aria-label="Ver mídia anterior"
                className="grid h-10 w-10 place-items-center rounded-full bg-background/85 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNextMedia}
                aria-label="Ver próxima mídia"
                className="grid h-10 w-10 place-items-center rounded-full bg-background/85 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-card px-5 py-4 shadow-soft md:-left-8">
            <p className="font-display text-xl text-foreground">Leveza · Equilíbrio</p>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Bem-estar · Luz</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const needs = [
  {
    feel: "Sinto dores e tensões",
    name: "Massagem Terapêutica",
    text: "Para quem sente desconfortos musculares, contraturas ou tensão acumulada no corpo.",
    bg: "bg-muted",
    icon: Leaf,
  },
  {
    feel: "Preciso desacelerar",
    name: "Sopro de Alma",
    text: "Uma pausa para respirar, relaxar e se reconectar consigo.",
    bg: "bg-lavanda",
    icon: Wind,
  },
  {
    feel: "Sinto minhas pernas e pés cansados",
    name: "Escalda-Pés",
    text: "Um momento de cuidado para aliviar o peso e o cansaço acumulados durante o dia.",
    bg: "bg-agua",
    icon: Heart,
  },
  {
    feel: "Quero uma experiência completa de autocuidado",
    name: "Head Spa",
    text: "Rituais que combinam cuidado capilar, massagem e relaxamento em uma experiência especial.",
    bg: "bg-accent/60",
    icon: Sparkles,
  },
];

function Needs() {
  return (
    <section className="needs-section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Encontre o seu cuidado"
          title="Do que você precisa hoje?"
          subtitle="Cada momento pede um tipo de cuidado. Encontre uma experiência que combine com o que o seu corpo e a sua rotina estão pedindo agora."
          className="needs-title"
          reveal={false}
        />
        <div className="needs-grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((n) => (
            <a
              key={n.name}
              href="#experiencias"
              className={`needs-card scroll-card group flex flex-col rounded-3xl ${n.bg} p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft`}
            >
              <n.icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
              <p className="mt-6 font-display text-2xl italic leading-snug text-foreground">
                “{n.feel}”
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-primary">{n.name}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              <span className="mt-6 text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                Conhecer a experiência →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

type Exp = {
  name: string;
  whatsappService: string;
  sub?: string;
  text: string;
  items?: string[];
  ideal?: string;
  dur?: string;
  cta?: string;
  hoverImage?: string;
};

function ExpCard({ e }: { e: Exp }) {
  const hoverTextClasses = e.hoverImage
    ? "group-hover:text-primary-foreground group-active:text-primary-foreground group-focus-within:text-primary-foreground"
    : "";

  return (
    <article
      data-servico={e.name}
      className="scroll-card group relative isolate flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8"
    >
      {e.hoverImage && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 scale-100 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100"
            style={{ backgroundImage: `url("${e.hoverImage}")` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-primary/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100"
          />
        </>
      )}
      <div className="relative z-10 flex flex-1 flex-col">
        <h4 className={`font-display text-3xl text-foreground ${hoverTextClasses}`}>{e.name}</h4>
        {e.sub && <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">{e.sub}</p>}
        <p className={`mt-4 leading-relaxed text-muted-foreground ${hoverTextClasses}`}>{e.text}</p>
        {e.items && (
          <ul className="mt-5 space-y-2">
            {e.items.map((i) => (
              <li key={i} className={`flex gap-3 text-sm text-foreground ${hoverTextClasses}`}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {i}
              </li>
            ))}
          </ul>
        )}
        {e.ideal && (
          <p className={`mt-5 text-sm italic text-muted-foreground ${hoverTextClasses}`}>
            Ideal para {e.ideal}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
          {e.dur ? (
            <span className={`text-sm text-muted-foreground ${hoverTextClasses}`}>
              Duração: {e.dur}
            </span>
          ) : (
            <span />
          )}
          <WaButton
            variant={e.hoverImage ? "light" : "outline"}
            className="!px-5 !py-2.5"
            whatsappService={e.whatsappService}
          >
            {e.cta ?? "Quero agendar"}
          </WaButton>
        </div>
      </div>
    </article>
  );
}

const massagens: Exp[] = [
  {
    name: "Massagem Terapêutica",
    whatsappService: "a Massagem Terapêutica",
    sub: "Healing Massage",
    text: "Uma experiência voltada ao cuidado de desconfortos musculares, tensões e contraturas. A sessão combina diferentes técnicas de acordo com a necessidade percebida durante o atendimento.",
    items: [
      "Liberação miofascial, conforme a necessidade",
      "Manobras de drenagem linfática quando indicadas",
      "Massagem relaxante como parte da sessão",
      "Ventosaterapia, se necessário",
      "Pistola massageadora como recurso complementar",
    ],
    ideal: "quem sente dores musculares, tensão no pescoço e ombros ou tem uma rotina intensa.",
    dur: "até 1h30",
    hoverImage: massagemTerapeuticaImage,
  },
  {
    name: "Massagem Relaxante",
    whatsappService: "a Massagem Relaxante",
    sub: "Sopro de Alma",
    text: "Uma pausa para quem sente que está vivendo no automático e precisa respirar. Movimentos suaves e contínuos, aromaterapia e óleos essenciais tornam a experiência ainda mais acolhedora.",
    ideal:
      "quem sente cansaço físico ou mental, vive uma rotina corrida ou deseja reservar um tempo para si.",
    dur: "até 1h30",
    hoverImage: massagemRelaxanteImage,
  },
];
const pausas: Exp[] = [
  {
    name: "Escalda-Pés",
    whatsappService: "o Escalda-Pés",
    text: "Um momento de pausa para deixar o peso do dia ir embora e receber cuidado dos pés às pernas. Inclui escalda-pés e massagem nas pernas e nos pés.",
    dur: "40 minutos",
    hoverImage: escaldaPesImage,
  },
  {
    name: "Terapia Capilar",
    whatsappService: "a Terapia Capilar",
    text: "Um cuidado individual voltado ao couro cabeludo, combinado com uma massagem craniana para proporcionar relaxamento e bem-estar.",
    hoverImage: capilarImage,
  },
  {
    name: "Revitalização Facial",
    whatsappService: "a Revitalização Facial",
    text: "Um momento dedicado ao cuidado facial, pensado para proporcionar uma sensação de renovação, frescor e bem-estar.",
    dur: "50 min a 1 hora",
    hoverImage: facialImage,
  },
];

function Experiences() {
  return (
    <section id="experiencias" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Experiências"
          title="Encontre o seu momento de cuidado"
          subtitle="Cada experiência foi pensada para proporcionar uma pausa na rotina e um momento de conexão com o seu corpo."
        />

        <h3 className="reveal mt-16 font-display text-2xl text-primary">Massagens</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {massagens.map((e) => (
            <ExpCard key={e.name} e={e} />
          ))}
        </div>

        <h3 className="reveal mt-16 font-display text-2xl text-primary">Pausas e cuidados</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {pausas.map((e) => (
            <ExpCard key={e.name} e={e} />
          ))}
        </div>

        {/* Head Spa — destaque especial */}
        <div className="head-spa mt-20 overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground">
          <div className="grid md:grid-cols-[1fr_1.2fr]">
            <img
              src={carouselImageOne}
              alt="Imagem do carrossel 01 exibida na experiência de Head Spa"
              className="head-spa-photo h-72 w-full object-cover md:h-full"
              loading="lazy"
            />
            <div className="head-spa-panel p-8 md:p-12">
              <div className="head-spa-content">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Experiência especial
                </p>
                <h3 className="mt-3 font-display text-5xl">Head Spa</h3>
                <p className="mt-3 max-w-md opacity-80">
                  Uma experiência completa de autocuidado, para desacelerar os pensamentos e dedicar
                  atenção a si.
                </p>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div data-servico="Head Spa Simples" className="head-spa-content rounded-3xl border border-primary-foreground/20 p-6">
                  <h4 className="font-display text-2xl">Head Spa Simples</h4>
                  <p className="mt-2 text-sm opacity-80">
                    Terapia capilar e massagem na cabeça, pescoço e ombros. Ideal para quem sente a
                    mente acelerada ou deseja conhecer o Head Spa.
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-accent">
                    Cerca de 1 hora
                  </p>
                  <WaButton
                    variant="light"
                    className="mt-5 !px-5 !py-2.5"
                    whatsappService="o Head Spa Simples"
                  >
                    Agendar experiência
                  </WaButton>
                </div>
                <div data-servico="Head Spa Completo" className="head-spa-content relative rounded-3xl bg-accent p-6 text-accent-foreground">
                  <span className="absolute -top-3 right-5 rounded-full bg-background px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                    Premium
                  </span>
                  <h4 className="font-display text-2xl">Head Spa Completo</h4>
                  <ul className="mt-3 space-y-1 text-sm">
                    {[
                      "Terapia capilar",
                      "Massagem na cabeça, pescoço e ombros",
                      "Revitalização facial",
                      "Escalda-pés",
                    ].map((i) => (
                      <li key={i}>· {i}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] opacity-70">
                    Da cabeça aos pés · cerca de 1h30
                  </p>
                  <WaButton className="mt-5 !px-5 !py-2.5" whatsappService="o Head Spa Completo">
                    Quero viver essa experiência
                  </WaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Personal() {
  const items = [
    {
      t: "Atendimento individualizado",
      d: "Cada experiência é conduzida respeitando as necessidades do seu momento.",
      icon: Heart,
    },
    {
      t: "Um espaço para desacelerar",
      d: "Mais do que uma massagem, um momento para sair do automático.",
      icon: Wind,
    },
    {
      t: "Cuidado de corpo e mente",
      d: "Experiências pensadas para promover relaxamento, conforto e bem-estar.",
      icon: Leaf,
    },
  ];
  return (
    <section className="personal-section py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle
          eyebrow="Experiência personalizada"
          title="Cada corpo tem uma necessidade. Cada experiência é única."
          subtitle="No SpaSu Iluminar, os atendimentos são pensados de forma individual, respeitando o momento, as necessidades e o objetivo de cada pessoa."
          className="personal-title"
          reveal={false}
        />
        <div className="personal-journey relative mt-14 grid gap-10 md:grid-cols-3">
          <span aria-hidden="true" className="journey-line" />
          {items.map((i) => (
            <div key={i.t} className="personal-item relative z-10 text-center">
              <span className="personal-icon mx-auto grid h-14 w-14 place-items-center rounded-full bg-muted">
                <i.icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
              </span>
              <h3 className="mt-5 font-display text-2xl text-foreground">{i.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about-section bg-muted/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
        <img
          src={professionalPhoto}
          alt="Profissional do SpaSu Iluminar"
          className="reveal aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
          loading="lazy"
        />
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Sobre</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Por trás de cada experiência, existe cuidado.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Mais do que oferecer uma massagem, acredito na importância de criar momentos em que
              cada pessoa possa desacelerar, respirar e voltar a sentir o próprio corpo com mais
              presença.
            </p>
            <p>
              Cada atendimento é conduzido com atenção, cuidado e respeito às necessidades
              individuais de quem escolhe viver essa experiência.
            </p>
          </div>
          <div
            role="img"
            aria-label="Mais de 700 atendimentos realizados"
            className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-5 shadow-soft"
          >
            <p className="font-display text-5xl leading-none text-primary" aria-hidden="true">
              +<span className="attendance-counter tabular-nums">700</span>
            </p>
            <p className="max-w-32 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Atendimentos realizados
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-background/70 p-5 text-sm text-muted-foreground">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Experiência &amp; Dedicação
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Anos dedicados ao cuidado e ao acolhimento de cada pessoa.</li>
              <li>Uma trajetória construída com prática, estudo e atenção a cada atendimento.</li>
              <li>Experiência prática guiada pelo cuidado e pela escuta.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { src: googleReviewImage01, alt: "Avaliação de cliente no Google, 5 estrelas" },
  { src: googleReviewImage02, alt: "Avaliação de cliente no Google, 5 estrelas" },
  { src: googleReviewImage03, alt: "Avaliação de cliente no Google, 5 estrelas" },
  { src: googleReviewImage04, alt: "Avaliação de cliente no Google, 5 estrelas" },
  { src: googleReviewImage05, alt: "Avaliação de cliente no Google, 5 estrelas" },
];

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (!api || isPointerOver || hasFocus) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        api.scrollNext();
      }
    }, 5200);

    return () => window.clearInterval(interval);
  }, [api, hasFocus, isPointerOver]);

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (
      !(event.relatedTarget instanceof Node) ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setHasFocus(false);
    }
  };

  return (
    <section id="depoimentos" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Depoimentos</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary-foreground md:text-5xl">
            Experiências de quem escolheu se cuidar
          </h2>
        </div>
        <div className="relative -mx-2 mt-14 max-w-5xl px-0 pb-12 sm:mx-auto sm:px-8 md:pb-0">
          <Carousel
            opts={{ loop: true, align: "center", containScroll: false }}
            setApi={setApi}
            aria-label="Depoimentos de clientes"
            onPointerEnter={() => setIsPointerOver(true)}
            onPointerLeave={() => setIsPointerOver(false)}
            onFocusCapture={() => setHasFocus(true)}
            onBlurCapture={handleBlurCapture}
          >
            <CarouselContent>
              {testimonials.map((review, index) => (
                <CarouselItem key={review.src} className="basis-full sm:basis-[74%] lg:basis-[58%]">
                  <figure className="flex h-full items-center rounded-3xl bg-card p-0 shadow-soft sm:p-5">
                    <img
                      src={review.src}
                      alt={review.alt}
                      className="h-auto w-full rounded-xl"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              aria-label="Depoimento anterior"
              className="bottom-[-3rem] left-1/2 right-auto top-auto z-10 h-10 w-10 -translate-x-7 translate-y-0 bg-background shadow-soft md:bottom-auto md:left-0 md:right-auto md:top-1/2 md:-translate-x-0 md:-translate-y-1/2"
            />
            <CarouselNext
              aria-label="Próximo depoimento"
              className="bottom-[-3rem] left-1/2 right-auto top-auto z-10 h-10 w-10 translate-x-7 translate-y-0 bg-background shadow-soft md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    {
      t: "Escolha sua experiência",
      d: "Conheça as opções e encontre o cuidado que mais combina com o seu momento.",
    },
    { t: "Entre em contato", d: "Chame pelo WhatsApp para consultar os horários disponíveis." },
    { t: "Reserve seu momento", d: "Escolha o melhor horário e prepare-se para desacelerar." },
  ];
  return (
    <section id="agendamento" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <SectionTitle eyebrow="Agendamento" title="Seu momento de cuidado começa aqui." />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.t} className="reveal">
              <span className="font-display text-6xl text-gold">{i + 1}</span>
              <h3 className="mt-2 font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <WaButton className="mt-12">Agendar pelo WhatsApp</WaButton>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-accent/70 px-6 py-16 text-center md:px-16 md:py-24">
        <Sun className="mx-auto h-10 w-10 text-gold" strokeWidth={1.2} />
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-6xl">
          Para quem é o SpaSu Iluminar?
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            O SpaSu Iluminar acolhe pessoas que vivem momentos e necessidades diferentes, mas que
            têm algo em comum: a necessidade de parar, respirar e cuidar de si.
          </p>
          <p>
            É para quem sente o corpo carregando o peso da rotina — com dores, tensões musculares,
            desconfortos ou simplesmente o cansaço de dias intensos.
          </p>
          <p>
            Também é para quem sente a mente sobrecarregada. Pessoas que acumulam responsabilidades,
            vivem sob pressão, cuidam de tudo e de todos, mas encontram pouco tempo para olhar para
            si.
          </p>
          <p>
            Aqui, você encontra um momento de pausa e cuidado. Cada atendimento é pensado de forma
            individual, respeitando o seu momento, suas necessidades e aquilo que você está vivendo.
          </p>
          <p className="font-semibold text-foreground">
            Porque, às vezes, tudo o que precisamos é de um espaço para desacelerar, cuidar do
            corpo, acalmar a mente e se reconectar com nós mesmos.
          </p>
        </div>
        <WaButton className="mt-10">Quero agendar meu momento</WaButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl text-foreground">
            <Sun className="h-5 w-5 text-gold" strokeWidth={1.4} /> SpaSu{" "}
            <span className="text-gold">Iluminar</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Um espaço para iluminar corpo e alma.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <a
            href="https://www.instagram.com/spasuiluminar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" /> @spasuiluminar
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Endereço em breve
          </p>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SpaSu Iluminar
      </p>
    </footer>
  );
}

function Index() {
  const mainRef = useRef<HTMLElement>(null);
  usePageAnimations(mainRef);
  return (
    <main ref={mainRef} className="bg-background">
      <Header />
      <Hero />
      <Needs />
      <Experiences />
      <Personal />
      <About />
      <Testimonials />
      <Steps />
      <FinalCta />
      <Footer />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
