import Image from "next/image";

type Props = {
  /** File name in public/screenshots, without extension. */
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** An app screenshot in a phone-shaped frame. All screenshots are 627×1400. */
export function PhoneShot({ name, alt, className = "", priority }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-line bg-ink-2 p-1.5 shadow-[0_30px_70px_-20px_rgba(255,79,163,0.35)] ${className}`}
    >
      <Image
        src={`/screenshots/${name}.jpg`}
        alt={alt}
        width={627}
        height={1400}
        priority={priority}
        className="h-auto w-full rounded-[22px]"
      />
    </div>
  );
}
