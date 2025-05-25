import AuditForm from "@/Components/AuditForm";
import ShinyText from "@/Components/ShinyText/ShinyText";

export default function FreePage() {
  return (
    <section id="roast" className="!max-w-2xl w-full">
      <div className="card relative">
        <div className="relative flex flex-col items-center gap-8">
          <div className="pill">
            <ShinyText text="Roast" speed={5} />
          </div>
          <h1 className="shaded text-3xl sm:text-5xl lg:text-6xl text-center font-medium mb-6 md:mb-16">
            Free Hero <span className={`highlight_text`}>Roasting</span>
          </h1>
          <AuditForm />
        </div>
      </div>
    </section>
  );
}
