interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-black" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-black/70" : "text-black/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 bg-lime rounded-full" />
    </div>
  );
}
