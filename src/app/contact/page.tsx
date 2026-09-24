import { SectionShell } from "@/components/section-shell";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Contact"
        title="Questions about products or documentation?"
        copy="Send a message for current availability, certificates of analysis, order support, or general inquiries."
      >
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <form
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="glass-card contact-form p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="contact-field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" maxLength={160} required />
              </label>
            </div>

            <label className="contact-field mt-5">
              <span>What can we help with?</span>
              <select name="subject" defaultValue="Product information" required>
                <option>Product information</option>
                <option>Certificate of analysis</option>
                <option>Order support</option>
                <option>Availability</option>
                <option>Business inquiry</option>
                <option>Other</option>
              </select>
            </label>

            <label className="contact-field mt-5">
              <span>Message</span>
              <textarea name="message" rows={7} minLength={10} maxLength={3000} required />
            </label>

            <button type="submit" className="cta-button mt-6">Send message</button>
            <p className="mt-4 text-sm leading-6 text-white/55">
              Please do not include passwords, payment details, protected medical information, or urgent health information.
            </p>
          </form>

          <div className="space-y-4">
            <div className="glass-card card-panel p-6">
              <p className="eyebrow">Instagram</p>
              <p className="mt-4 text-2xl font-semibold text-white">{site.instagram}</p>
            </div>
            <div className="glass-card p-6 text-white/70">
              Messages are sent privately to The Peptide Papi. For emergency or urgent medical needs, contact an appropriate healthcare or emergency service.
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
