"use client";

import Image from "next/image";
import { useCart } from "@/components/cart-context";

function formatPrice(value: number) {
  return `${value.toFixed(2).replace(".", ",")}€`;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-2xl font-medium">Tu carrito</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center font-body text-ink/60">
              Tu carrito está vacío.
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div
                    className="h-20 w-20 shrink-0 rounded-lg"
                    style={{ background: item.image }}
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-body text-base leading-snug">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Eliminar"
                        className="text-ink/40 hover:text-wine"
                      >
                        ×
                      </button>
                    </div>
                    <p className="font-body text-sm text-ink/60">
                      {formatPrice(item.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/20"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-ink/10 px-6 py-5">
          <div className="mb-4 flex items-center justify-between font-body text-lg">
            <span>Subtotal</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="w-full rounded-full bg-wine py-3 font-body text-sm font-semibold tracking-wide text-white transition-opacity disabled:opacity-40"
          >
            Finalizar pedido
          </button>
          <p className="mt-3 text-center text-xs text-ink/45">
            Próximamente pago online. De momento contáctanos para confirmar tu
            pedido.
          </p>
        </div>
      </aside>
    </div>
  );
}
