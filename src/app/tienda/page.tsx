import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/lib/products-data";

export const metadata = {
  title: "Tienda | YN",
};

export default function TiendaPage() {
  return (
    <>
      <section className="relative flex min-h-[440px] items-end overflow-hidden">
        <Image
          src="/images/hero-tienda.jpg"
          alt="Muestrario de esmaltes de uñas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32">
          <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
            Tienda
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 text-center">
        <p className="font-body text-2xl font-semibold leading-relaxed text-ink/75">
          Descubre una cuidada colección de productos profesionales
          seleccionados por nuestro equipo para prolongar los resultados de
          tus tratamientos y convertir tu rutina diaria en un auténtico ritual
          de cuidado.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {PRODUCT_CATEGORIES.map((category) => (
          <div key={category.name} className="mb-16 last:mb-0">
            <h2 className="font-display text-3xl font-medium tracking-wide text-wine">
              {category.name}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
              {category.items.map((product) => (
                <div key={product.name} className="flex flex-col gap-3">
                  <div className="aspect-square w-full rounded-xl bg-cream-dark" />
                  <div>
                    <p className="font-body text-lg leading-snug text-ink/85">
                      {product.name}
                    </p>
                    <p className="font-body text-sm uppercase tracking-wide text-ink/40">
                      {product.brand}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
