import Image from "next/image";
import { Suspense } from "react";
import ServiceTabs from "@/components/service-tabs";

export const metadata = {
  title: "Servicios | YN",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative flex min-h-[440px] items-end overflow-hidden">
        <Image
          src="/images/hero-servicios.jpg"
          alt="Manicura profesional en proceso"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32">
          <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
            Nuestros servicios
          </h1>
        </div>
      </section>

      <Suspense fallback={null}>
        <ServiceTabs />
      </Suspense>
    </>
  );
}
