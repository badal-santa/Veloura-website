import { PhoneShot } from "@/components/PhoneShot";

const FEATURES = [
  {
    title: "Live beauty camera",
    body: "Smooth, brighten, glow and warm your skin tone live, with six filters, a self-timer and a grid. The full effect is applied the moment you take the shot.",
  },
  {
    title: "Skin-smart retouch",
    body: "When Veloura finds a face, smoothing touches only the skin — eyes, brows, lips and hair stay sharp.",
  },
  {
    title: "Makeup that fits",
    body: "Lipstick, blush and eyeshadow in curated shades, placed exactly on the lips, cheeks and eyelids, with an intensity slider for each.",
  },
  {
    title: "Templates & frames",
    body: "Editorial, polaroid, story and neon designs. Drop in your photo, edit the caption, pick a filter and share.",
  },
  {
    title: "Collage & decorate",
    body: "Twelve collage layouts for 2–4 photos, plus stickers, text styles and your own watermark.",
  },
  {
    title: "Remove background",
    body: "Cut yourself out of any photo and drop in a blur, a gradient, a colour or another picture.",
  },
  {
    title: "Video Studio",
    body: "Trim the start and end of a clip, mute the sound and export instantly at full quality.",
  },
  {
    title: "Undo everything",
    body: "Every change can be undone and redone, so you can try a look without losing the original.",
  },
];

const GALLERY = [
  { name: "02-home", alt: "Veloura Studio home screen" },
  { name: "09-photo-editor", alt: "Photo editor with makeup applied" },
  { name: "03-editor", alt: "Editor tools" },
  { name: "04-templates", alt: "Template gallery" },
  { name: "05-template-editor", alt: "Editing a template" },
  { name: "07-veloura-home", alt: "Veloura Home screen" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="glow">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
          <div>
            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your glow, <span className="text-gradient">edited beautifully</span> on your phone.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              A beauty camera and photo studio in one app — skin-smart retouch, makeup, filters,
              templates and collages, all processed privately on your device.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Chip>BEAUTY CAMERA</Chip>
              <Chip>PHOTO STUDIO</Chip>
              <Chip alt>ON-DEVICE PRIVACY</Chip>
            </div>
            <p className="mt-8 text-sm text-subtle">Free, ad-supported, and available for Android.</p>
          </div>
          <div className="mx-auto w-full max-w-[300px] md:max-w-[340px]">
            <PhoneShot name="09-photo-editor" alt="Veloura photo editor with lipstick applied" priority />
          </div>
        </div>
      </section>

      {/* Features */}
      <Section id="features" title="What it does" sub="One app for taking, retouching and styling your photos.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-bold">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Veloura Home */}
      <Section title="Make it your Home screen" sub="Optional, and you can switch back any time.">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto w-full max-w-[300px]">
            <PhoneShot name="07-veloura-home" alt="Veloura Home with the Studio card, search and pinned apps" />
          </div>
          <ul className="space-y-5">
            <HomePoint title="The camera, one tap away">
              A Veloura Studio card on your Home screen opens the camera, editor and templates
              straight away.
            </HomePoint>
            <HomePoint title="All your apps, A to Z">
              Swipe up for every app with instant search. Pin favourites to Home or the dock.
            </HomePoint>
            <HomePoint title="Your wallpaper, framed">
              A clean glass look over your own wallpaper, with your choice of accent colour, icon
              size and grid.
            </HomePoint>
          </ul>
        </div>
      </Section>

      {/* Privacy */}
      <Section id="privacy" title="Private by design">
        <div className="rounded-3xl border border-pink/40 bg-gradient-to-br from-pink/15 to-violet/10 p-7 sm:p-9">
          <p className="text-lg font-bold">Your photos never leave your phone.</p>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            Beauty, makeup, face detection, background removal and video trimming all run on your
            device. Nothing is uploaded and there is no account to create. When you open a photo,
            Android&apos;s own picker gives Veloura only the pictures you choose.
          </p>
        </div>
      </Section>

      {/* Screenshots */}
      <Section title="A look inside">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY.map((shot) => (
            <PhoneShot key={shot.name} name={shot.name} alt={shot.alt} />
          ))}
        </div>
      </Section>
    </>
  );
}

function Section({ id, title, sub, children }: { id?: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6 border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
        {sub ? <p className="mt-2 text-muted">{sub}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Chip({ children, alt }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <span
      className={`rounded-full px-4 py-1.5 text-xs font-bold tracking-wider ${
        alt ? "bg-peach text-ink" : "bg-pink text-white"
      }`}
    >
      {children}
    </span>
  );
}

function HomePoint({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-2xl border border-line bg-surface p-6">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{children}</p>
    </li>
  );
}
