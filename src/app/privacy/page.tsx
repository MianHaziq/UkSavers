import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | UK Savers",
  description:
    "How UK Savers collects, uses and protects your personal data, in line with UK GDPR and the Data Protection Act 2018.",
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-white/70">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[860px] px-6 py-14">
          <div className="flex flex-col gap-10 rounded-2xl border border-border bg-white p-6 md:p-10">
            <Section title="1. Who we are">
              <p>
                UK Savers (&ldquo;UK Savers&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a UK-based wholesale
                and distribution business, trading from Unit 1, Trade Park,
                London, United Kingdom.
              </p>
              <p>
                We are the data controller for the personal data described in
                this policy. If you have any questions about this policy or
                how we handle your personal data, please contact us at{" "}
                <a
                  href="mailto:info@uksaversltd.com"
                  className="font-semibold text-accent-dark hover:underline"
                >
                  info@uksaversltd.com
                </a>
                .
              </p>
              <p>
                This policy explains how we collect, use, share and protect
                personal data when you visit our website, request a trade
                account, or otherwise get in touch with us. It is written to
                comply with the UK General Data Protection Regulation (UK
                GDPR) and the Data Protection Act 2018.
              </p>
            </Section>

            <Section title="2. Information we collect">
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <span className="font-semibold text-ink">
                    Contact details
                  </span>{" "}
                  you give us when registering as a trade partner or
                  requesting a quote — such as your name, business name,
                  email address and phone number.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Correspondence
                  </span>{" "}
                  — records of emails and enquiries you send us, and our
                  replies to you.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Technical data
                  </span>{" "}
                  — such as IP address, browser type and device information,
                  collected automatically when you use our website.
                </li>
                <li>
                  <span className="font-semibold text-ink">Usage data</span> —
                  information about how you browse and interact with our
                  website.
                </li>
              </ul>
              <p>
                We do not knowingly collect special category data (such as
                health or financial information) through this website, and we
                ask that you do not send us any such information unless we
                have specifically asked for it.
              </p>
            </Section>

            <Section title="3. How we use your information">
              <p>
                We only use your personal data where we have a lawful basis
                to do so. This includes:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <span className="font-semibold text-ink">Contract</span> —
                  to set up and manage your trade account, process enquiries,
                  and respond to quote requests.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Legitimate interests
                  </span>{" "}
                  — to operate, maintain and improve our website and
                  services, and to keep our records accurate and secure.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Legal obligation
                  </span>{" "}
                  — to meet our accounting, tax and regulatory requirements.
                </li>
                <li>
                  <span className="font-semibold text-ink">Consent</span> —
                  where you have specifically agreed to us contacting you for
                  marketing purposes. You can withdraw this consent at any
                  time.
                </li>
              </ul>
              <p>We do not sell your personal data to third parties.</p>
            </Section>

            <Section title="4. Cookies and similar technologies">
              <p>
                Our website may use strictly necessary cookies to allow core
                functionality, and, where used, analytics cookies to help us
                understand how the site is used. Any non-essential cookies
                are only set with your consent, in line with the Privacy and
                Electronic Communications Regulations (PECR). You can control
                or delete cookies through your browser settings at any time.
              </p>
            </Section>

            <Section title="5. Sharing your information">
              <p>
                We may share personal data with trusted third parties who
                help us run our business, such as IT, hosting and email
                service providers, and professional advisers (for example
                accountants or solicitors). We require these parties to keep
                your data secure and to use it only for the purposes we
                specify.
              </p>
              <p>
                We may also disclose personal data where required by law, for
                example to a regulator, law enforcement body, or court.
              </p>
              <p>
                We do not transfer personal data outside the UK. If this
                changes, we will ensure any transfer is protected by
                appropriate safeguards recognised under UK GDPR.
              </p>
            </Section>

            <Section title="6. How long we keep your data">
              <p>
                We retain personal data only for as long as necessary to
                fulfil the purposes we collected it for, including to satisfy
                any legal, accounting or reporting requirements. Enquiry and
                trade account records are typically retained for the
                duration of the business relationship and for a reasonable
                period afterwards, after which they are securely deleted or
                anonymised.
              </p>
            </Section>

            <Section title="7. Your rights">
              <p>
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request erasure of your data in certain circumstances.</li>
                <li>Request that we restrict or stop processing your data.</li>
                <li>Request a copy of your data in a portable format.</li>
                <li>Object to processing based on legitimate interests or direct marketing.</li>
                <li>Withdraw consent at any time, where processing is based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, please email{" "}
                <a
                  href="mailto:info@uksaversltd.com"
                  className="font-semibold text-accent-dark hover:underline"
                >
                  info@uksaversltd.com
                </a>
                . We will respond within one month, as required by law.
              </p>
              <p>
                If you are unhappy with how we have handled your data, you
                have the right to complain to the Information Commissioner&apos;s
                Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-dark hover:underline"
                >
                  ico.org.uk
                </a>{" "}
                or by calling 0303 123 1113.
              </p>
            </Section>

            <Section title="8. Keeping your data secure">
              <p>
                We use appropriate technical and organisational measures to
                protect personal data against unauthorised access, loss, or
                misuse. While we take reasonable steps to keep your data
                safe, no method of transmission over the internet is
                completely secure.
              </p>
            </Section>

            <Section title="9. Changes to this policy">
              <p>
                We may update this policy from time to time to reflect
                changes in our practices or legal requirements. The &ldquo;last
                updated&rdquo; date at the top of this page shows when it was
                last revised.
              </p>
            </Section>

            <Section title="10. Contact us">
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your personal data, please contact us at{" "}
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
