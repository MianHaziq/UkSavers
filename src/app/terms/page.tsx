import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | UK Savers",
  description:
    "The terms and conditions that apply to use of the UK Savers website and to trade accounts and orders placed with UK Savers.",
};

const LAST_UPDATED = "10 October 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted md:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="bg-ink py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              Legal
            </span>
            <h1 className="mt-2 font-display text-4xl font-extrabold text-white md:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-white/70">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[860px] px-6 py-14">
          <div className="flex flex-col gap-10 rounded-2xl border border-border bg-white p-6 md:p-10">
            <Section title="1. About us">
              <p>
                This website is operated by UK Savers (&ldquo;UK
                Savers&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
                &ldquo;our&rdquo;), a wholesale and distribution business
                trading from Unit 1, Trade Park, London, United Kingdom. You
                can contact us at{" "}
                <a
                  href="mailto:info@uksaversltd.com"
                  className="font-semibold text-accent-dark hover:underline"
                >
                  info@uksaversltd.com
                </a>
                .
              </p>
              <p>
                By using this website, or by registering as a trade partner
                or placing an order with us, you agree to be bound by these
                Terms &amp; Conditions. If you do not agree to these terms,
                please do not use this website or our services.
              </p>
            </Section>

            <Section title="2. Who we sell to">
              <p>
                UK Savers supplies goods on a business-to-business (B2B)
                wholesale basis to independent retailers, traders and other
                businesses. We do not sell to members of the public for
                personal, domestic use, and our pricing, minimum order
                quantities and trading terms are set out separately for each
                trade account.
              </p>
            </Section>

            <Section title="3. Use of this website">
              <p>
                This website is provided to give an overview of the products
                and services we offer and to allow prospective and existing
                trade customers to get in touch with us. You agree to use
                this website only for lawful purposes and not in any way
                that could damage, disable or impair it, or interfere with
                anyone else&apos;s use of it.
              </p>
              <p>
                Product images, descriptions, pack sizes and specifications
                shown on this website are provided for general guidance only.
                We work to keep this information accurate and up to date, but
                actual stock, packaging, pricing and availability are
                confirmed at the point of quotation or order, and may vary
                from what is shown here.
              </p>
            </Section>

            <Section title="4. Enquiries, quotes and orders">
              <p>
                Submitting an enquiry or &ldquo;request a quote&rdquo; form
                through this website does not create a binding contract. A
                contract between you and UK Savers for the supply of goods
                is only formed once we have confirmed a quote, order, or
                trade account in writing (including by email).
              </p>
              <p>
                We reserve the right to refuse to open a trade account, or to
                accept or decline any order, at our discretion — for
                example where stock is unavailable, where credit checks are
                not satisfied, or where we reasonably suspect misuse.
              </p>
            </Section>

            <Section title="5. Pricing and payment">
              <p>
                All prices quoted are exclusive of VAT and delivery charges
                unless stated otherwise, and are subject to change without
                notice until confirmed in a formal quote or order
                acknowledgement. Payment terms are agreed individually with
                each trade customer and will be confirmed when your trade
                account is set up or when an order is confirmed.
              </p>
            </Section>

            <Section title="6. Delivery">
              <p>
                Delivery dates and lead times given to you are estimates
                only. While we aim to meet agreed delivery dates, we are not
                liable for any loss caused by reasonable delays that are
                outside of our control, including delays caused by
                suppliers, carriers, or events beyond our reasonable
                control.
              </p>
            </Section>

            <Section title="7. Faulty, damaged or incorrect goods">
              <p>
                If goods arrive damaged, faulty, or do not match what was
                ordered, please notify us as soon as reasonably possible, and
                in any event within a reasonable time of delivery, so that we
                can investigate and put things right — whether by
                replacement, credit, or refund, as agreed between us.
              </p>
            </Section>

            <Section title="8. Intellectual property">
              <p>
                All content on this website — including text, graphics,
                logos and images — is owned by or licensed to UK Savers and
                is protected by copyright and other intellectual property
                laws. You may view and print pages for your own personal
                reference in connection with trading with us, but may not
                reproduce, republish or distribute any content without our
                prior written consent.
              </p>
              <p>
                Third-party brand names, logos and product images shown on
                this website remain the property of their respective owners
                and are used to describe the products we distribute.
              </p>
            </Section>

            <Section title="9. Limitation of liability">
              <p>
                Nothing in these terms limits or excludes our liability for
                death or personal injury caused by our negligence, for fraud
                or fraudulent misrepresentation, or for any other liability
                that cannot be limited or excluded under English law.
              </p>
              <p>
                Subject to the above, we will not be liable for any indirect
                or consequential loss, or for any loss of profit, revenue, or
                business, arising from your use of this website or from any
                contract between us, except as set out in the specific
                trading terms agreed with your trade account.
              </p>
            </Section>

            <Section title="10. Changes to these terms">
              <p>
                We may update these Terms &amp; Conditions from time to time,
                for example to reflect changes in our business or in the
                law. The &ldquo;last updated&rdquo; date at the top of this
                page shows when it was last revised. Continued use of this
                website after changes are posted means you accept the
                updated terms.
              </p>
            </Section>

            <Section title="11. Governing law">
              <p>
                These Terms &amp; Conditions are governed by the laws of
                England and Wales. Any dispute arising out of or in
                connection with these terms, or your use of this website,
                will be subject to the exclusive jurisdiction of the courts
                of England and Wales.
              </p>
            </Section>

            <Section title="12. Contact us">
              <p>
                If you have any questions about these Terms &amp;
                Conditions, please contact us at{" "}
                <a
                  href="mailto:info@uksaversltd.com"
                  className="font-semibold text-accent-dark hover:underline"
                >
                  info@uksaversltd.com
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
