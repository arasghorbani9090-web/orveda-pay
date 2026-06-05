import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Orveda Pay Privacy Policy — how we collect, use, store and protect your personal and business data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="June 1, 2026"
      intro="This Privacy Policy explains how Orveda Pay collects, uses, discloses and safeguards your information when you use our platform and services."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide directly, including company details, director and beneficial owner information, contact details, and identity and incorporation documents submitted during onboarding.",
            "We also collect technical information automatically, such as device, log and usage data, to operate and secure the platform.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to provide and improve our services, perform KYC, KYB and AML checks, prevent fraud, comply with legal and regulatory obligations, and communicate with you.",
          ],
        },
        {
          heading: "Legal Basis & Compliance",
          body: [
            "We process personal data where necessary to perform our contract with you, to comply with legal obligations, for our legitimate interests in operating a secure platform, and with your consent where required.",
          ],
        },
        {
          heading: "Data Sharing",
          body: [
            "We share information with regulated banking partners, identity verification and screening providers, and authorities where required by law. We do not sell your personal data.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We protect data using encryption in transit and at rest, access controls, and continuous monitoring. Documents are stored securely under our compliance procedures.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We retain information for as long as necessary to provide services and to meet legal, regulatory and record-keeping obligations.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "Subject to applicable law, you may request access to, correction of, or deletion of your personal data, and may object to or restrict certain processing. Contact privacy@orvedapay.com to exercise your rights.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "For privacy questions, contact our Data Protection team at privacy@orvedapay.com.",
          ],
        },
      ]}
    />
  );
}
