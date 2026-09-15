import Image from "next/image";
import { FAJAS_PRODUCTS, SIZE_CHART } from "@/lib/fajas-data";
import FajaGallery from "@/components/faja-gallery";

export const metadata = {
  title: "Fajas | YN",
};

export default function FajasPage() {
  return (
    <>
      <section className="relative flex min-h-[440px] items-end overflow-hidden">
        <Image
          src="/images/fajas/hero-fajas-v4.jpg"
          alt="Fajas Charlotte, colección completa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32">
          <p className="font-body text-base font-semibold uppercase tracking-wide text-cream/90">
            Fajas Charlotte
          </p>
          <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
            Fajas
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 text-center">
        <p className="font-display text-4xl uppercase leading-tight text-wine md:text-5xl">
          La clave de tu figura perfecta
        </p>
        <p className="mt-4 font-display text-2xl uppercase leading-snug text-wine">
          Fajas diseñadas para abrazar tus curvas con comodidad y discreción,
        </p>
        <p className="mt-2 font-display text-lg uppercase leading-snug text-gray-500">
          Uso diario, post quirúrgico o post parto.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {FAJAS_PRODUCTS.map((faja) => (
            <div key={faja.ref} className="flex flex-col gap-5">
              <FajaGallery
                images={faja.images}
                alt={`Faja Charlotte ${faja.ref} - ${faja.name}`}
              />

              <div>
                <span className="inline-block rounded-full bg-wine px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-white">
                  Ref {faja.ref}
                </span>
                <h3 className="mt-2 font-display text-3xl font-bold text-wine">
                  {faja.name}
                </h3>
                <p className="mt-1 font-body text-lg font-medium text-ink/80">
                  {faja.tagline}
                </p>
              </div>

              <p className="font-body text-base leading-relaxed text-ink/80">
                {faja.description}
              </p>

              <ul className="flex flex-col gap-2">
                {faja.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 font-body text-base leading-snug text-ink/80"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wine" />
                    {feature}
                  </li>
                ))}
              </ul>

              <dl className="grid grid-cols-1 divide-y divide-ink/10 rounded-xl bg-cream-dark px-5 py-1">
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-body text-sm font-semibold uppercase tracking-wide text-wine">
                    Uso
                  </dt>
                  <dd className="text-right font-body text-base text-ink/85">
                    {faja.uses.join(", ")}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-body text-sm font-semibold uppercase tracking-wide text-wine">
                    Color
                  </dt>
                  <dd className="text-right font-body text-base text-ink/85">
                    {faja.colors.join(" y ")}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-body text-sm font-semibold uppercase tracking-wide text-wine">
                    Tallas
                  </dt>
                  <dd className="text-right font-body text-base text-ink/85">
                    {faja.sizes.join(", ")}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-wine-dark px-4 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-4xl font-medium tracking-wide text-white">
            Tabla de medidas
          </h2>
          <p className="mt-3 text-center font-body text-lg text-white/60">
            Todas las medidas en centímetros (cm) y pulgadas (in)
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm">
            <table className="w-full min-w-[900px] border-collapse text-center font-body text-white">
              <thead>
                <tr className="border-b border-white/15">
                  <th rowSpan={2} className="border-r border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Talla
                  </th>
                  <th colSpan={2} className="border-r border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Cintura
                  </th>
                  <th colSpan={2} className="border-r border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Cadera
                  </th>
                  <th colSpan={2} className="border-r border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Busto superior
                  </th>
                  <th colSpan={2} className="border-r border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Busto inferior
                  </th>
                  <th colSpan={2} className="border-r border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Manga 3/4
                  </th>
                  <th colSpan={2} className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Manga larga
                  </th>
                </tr>
                <tr className="border-b border-white/15 font-sans text-xs uppercase text-white/60">
                  <th className="px-3 py-2 font-medium">cm</th>
                  <th className="border-r border-white/10 px-3 py-2 font-medium">in</th>
                  <th className="px-3 py-2 font-medium">cm</th>
                  <th className="border-r border-white/10 px-3 py-2 font-medium">in</th>
                  <th className="px-3 py-2 font-medium">cm</th>
                  <th className="border-r border-white/10 px-3 py-2 font-medium">in</th>
                  <th className="px-3 py-2 font-medium">cm</th>
                  <th className="border-r border-white/10 px-3 py-2 font-medium">in</th>
                  <th className="px-3 py-2 font-medium">cm</th>
                  <th className="border-r border-white/10 px-3 py-2 font-medium">in</th>
                  <th className="px-3 py-2 font-medium">cm</th>
                  <th className="px-3 py-2 font-medium">in</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_CHART.map((row, i) => (
                  <tr
                    key={row.size}
                    className={`border-b border-white/10 last:border-0 ${
                      i % 2 === 1 ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="border-r border-white/10 px-4 py-3 font-display font-semibold">
                      {row.size}
                    </td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.waist}</td>
                    <td className="border-r border-white/10 px-3 py-3 font-sans text-sm text-white/85">
                      {row.waistIn}
                    </td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.hip}</td>
                    <td className="border-r border-white/10 px-3 py-3 font-sans text-sm text-white/85">
                      {row.hipIn}
                    </td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.upperBust}</td>
                    <td className="border-r border-white/10 px-3 py-3 font-sans text-sm text-white/85">
                      {row.upperBustIn}
                    </td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.underBust}</td>
                    <td className="border-r border-white/10 px-3 py-3 font-sans text-sm text-white/85">
                      {row.underBustIn}
                    </td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.sleeve34}</td>
                    <td className="border-r border-white/10 px-3 py-3 font-sans text-sm text-white/85">
                      {row.sleeve34In}
                    </td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.longSleeve}</td>
                    <td className="px-3 py-3 font-sans text-sm text-white/85">{row.longSleeveIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl font-medium text-wine">
          ¿Tienes dudas sobre tu talla o modelo?
        </h2>
        <p className="mt-4 font-body text-lg text-ink/75">
          Escríbenos y te ayudamos a encontrar la faja perfecta para ti.
        </p>
        <a
          href="tel:+34664112092"
          className="mt-6 inline-block rounded-full bg-wine px-8 py-3 font-body text-lg font-medium text-white transition-colors hover:bg-wine-dark"
        >
          +34 664 11 20 92
        </a>
      </section>
    </>
  );
}
