"use client";

import { useMemo, useState } from "react";
import { productCategories } from "@/lib/products";

type Quantities = Record<string, number>;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function OrderBuilder() {
  const [quantities, setQuantities] = useState<Quantities>({});

  const selectedItems = useMemo(
    () =>
      productCategories.flatMap((category, categoryIndex) =>
        category.products.flatMap((product, productIndex) => {
          const id = `${categoryIndex}-${productIndex}`;
          const quantity = quantities[id] ?? 0;
          return quantity > 0 ? [{ ...product, category: category.name, id, quantity }] : [];
        }),
      ),
    [quantities],
  );

  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = selectedItems.length === 0 ? 0 : subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;
  const orderSummary = selectedItems
    .map((item) => `${item.quantity} x ${item.name} ${item.strength} @ ${currency.format(item.price)} = ${currency.format(item.quantity * item.price)}`)
    .join("\n");

  function setQuantity(id: string, value: number) {
    const next = Math.max(0, Math.min(20, Number.isFinite(value) ? Math.floor(value) : 0));
    setQuantities((current) => ({ ...current, [id]: next }));
  }

  return (
    <form
      name="order"
      method="POST"
      action="/order-received"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value="order" />
      <input type="hidden" name="order_summary" value={orderSummary} />
      <input type="hidden" name="product_subtotal" value={currency.format(subtotal)} />
      <input type="hidden" name="shipping" value={shipping === 0 && selectedItems.length > 0 ? "FREE" : currency.format(shipping)} />
      <input type="hidden" name="order_total" value={currency.format(total)} />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="order-process-grid">
        <article className="order-process-card">
          <span>01</span>
          <h2>Build your order</h2>
          <p>Select products and quantities. Your total updates automatically.</p>
        </article>
        <article className="order-process-card">
          <span>02</span>
          <h2>Submit securely</h2>
          <p>No payment is collected on this website. Your order request is emailed to The Peptide Papi.</p>
        </article>
        <article className="order-process-card">
          <span>03</span>
          <h2>Complete payment</h2>
          <p>We will contact you ASAP to confirm availability and arrange payment.</p>
        </article>
        <article className="order-process-card">
          <span>04</span>
          <h2>Confirmation & tracking</h2>
          <p>After payment, we will manually send your order confirmation and tracking information.</p>
        </article>
      </div>

      <div className="order-notice">
        <div>
          <p className="eyebrow">Payment options</p>
          <p className="mt-2 text-white/78">Bitcoin, Zelle, PayPal, Venmo, and Cash App are accepted. Secure online card payments through Stripe are coming soon.</p>
        </div>
        <div>
          <p className="eyebrow">Shipping</p>
          <p className="mt-2 text-white/78">Flat-rate shipping is $25. Product subtotals over $200 receive free shipping.</p>
        </div>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_23rem]">
        <div className="space-y-5">
          {productCategories.map((category, categoryIndex) => (
            <section key={category.name} className="order-category">
              <div className="product-category-heading">
                <h2>{category.name}</h2>
                <span>Select quantity</span>
              </div>
              <div className="divide-y divide-white/10">
                {category.products.map((product, productIndex) => {
                  const id = `${categoryIndex}-${productIndex}`;
                  const quantity = quantities[id] ?? 0;
                  return (
                    <div className="order-product-row" key={id}>
                      <div>
                        <p className="product-name">{product.name}</p>
                        <p className="mt-1 text-sm text-white/55">{product.strength}</p>
                      </div>
                      <p className="order-unit-price">{currency.format(product.price)}</p>
                      <div className="quantity-control" aria-label={`Quantity for ${product.name} ${product.strength}`}>
                        <button type="button" onClick={() => setQuantity(id, quantity - 1)} aria-label={`Decrease ${product.name} quantity`}>−</button>
                        <input
                          type="number"
                          min="0"
                          max="20"
                          inputMode="numeric"
                          value={quantity}
                          onChange={(event) => setQuantity(id, Number(event.target.value))}
                          aria-label={`${product.name} quantity`}
                        />
                        <button type="button" onClick={() => setQuantity(id, quantity + 1)} aria-label={`Increase ${product.name} quantity`}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <aside className="order-summary">
          <p className="eyebrow">Order summary</p>
          {selectedItems.length ? (
            <div className="mt-5 space-y-3">
              {selectedItems.map((item) => (
                <div key={item.id} className="order-summary-item">
                  <div>
                    <p className="font-semibold text-white">{item.quantity} × {item.name}</p>
                    <p className="text-sm text-white/50">{item.strength}</p>
                  </div>
                  <p>{currency.format(item.quantity * item.price)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-white/55">Choose at least one product to start your order.</p>
          )}

          <div className="order-totals">
            <div><span>Product subtotal</span><strong>{currency.format(subtotal)}</strong></div>
            <div><span>Shipping</span><strong>{shipping === 0 && selectedItems.length ? "FREE" : currency.format(shipping)}</strong></div>
            <div className="order-total"><span>Estimated total</span><strong>{currency.format(total)}</strong></div>
          </div>

          {selectedItems.length > 0 && subtotal <= 200 ? (
            <p className="shipping-progress">Add {currency.format(201 - subtotal)} more in products for free shipping.</p>
          ) : null}
          {subtotal > 200 ? <p className="shipping-progress shipping-unlocked">Free shipping unlocked.</p> : null}
        </aside>
      </div>

      <section className="glass-card contact-form p-6 sm:p-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Customer & shipping information</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Where should we contact you?</h2>
          <p className="mt-3 text-white/65">This submits an order request only. You will not be charged on this website.</p>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="contact-field">
            <span>Full name</span>
            <input name="full_name" type="text" autoComplete="name" minLength={2} maxLength={100} required />
          </label>
          <label className="contact-field">
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" maxLength={160} required />
          </label>
          <label className="contact-field">
            <span>Phone number</span>
            <input name="phone" type="tel" autoComplete="tel" maxLength={30} required />
          </label>
          <label className="contact-field">
            <span>Preferred contact</span>
            <select name="preferred_contact" defaultValue="Text message" required>
              <option>Text message</option>
              <option>Phone call</option>
              <option>Email</option>
            </select>
          </label>
          <label className="contact-field sm:col-span-2">
            <span>Shipping address</span>
            <input name="address_line_1" type="text" autoComplete="address-line1" maxLength={160} required />
          </label>
          <label className="contact-field sm:col-span-2">
            <span>Apartment, suite, or unit (optional)</span>
            <input name="address_line_2" type="text" autoComplete="address-line2" maxLength={100} />
          </label>
          <label className="contact-field">
            <span>City</span>
            <input name="city" type="text" autoComplete="address-level2" maxLength={100} required />
          </label>
          <label className="contact-field">
            <span>State</span>
            <input name="state" type="text" autoComplete="address-level1" maxLength={100} required />
          </label>
          <label className="contact-field">
            <span>ZIP / postal code</span>
            <input name="postal_code" type="text" autoComplete="postal-code" maxLength={20} required />
          </label>
          <label className="contact-field">
            <span>Country</span>
            <input name="country" type="text" autoComplete="country-name" defaultValue="United States" maxLength={100} required />
          </label>
          <label className="contact-field sm:col-span-2">
            <span>Preferred payment method</span>
            <select name="payment_method" defaultValue="Zelle" required>
              <option>Bitcoin</option>
              <option>Zelle</option>
              <option>PayPal</option>
              <option>Venmo</option>
              <option>Cash App</option>
              <option>Discuss payment with me</option>
            </select>
          </label>
          <label className="contact-field sm:col-span-2">
            <span>Order notes (optional)</span>
            <textarea name="order_notes" rows={4} maxLength={1500} placeholder="Questions, delivery notes, or other details" />
          </label>
        </div>

        <label className="order-agreement mt-6">
          <input name="order_terms" type="checkbox" value="Agreed" required />
          <span>I understand that this is an order request, no payment is collected now, and my order is not confirmed until The Peptide Papi contacts me and payment is completed.</span>
        </label>

        <p className="mt-5 text-sm leading-6 text-white/55">Do not enter payment account details, passwords, seed phrases, private keys, card numbers, or protected medical information in this form.</p>
        <button type="submit" className="cta-button mt-6" disabled={selectedItems.length === 0}>Submit order request · {currency.format(total)}</button>
      </section>
    </form>
  );
}
