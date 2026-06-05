import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Orveda Pay Terms & Conditions governing the use of our platform and business payment services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="June 1, 2026"
      intro="These Terms & Conditions govern your access to and use of the Orveda Pay platform and services. By using our services, you agree to these terms."
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By registering for or using Orveda Pay, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.",
          ],
        },
        {
          heading: "Eligibility & Onboarding",
          body: [
            "Our services are available to businesses that successfully complete our onboarding, verification and due diligence processes. Account approval is at our discretion and subject to compliance review.",
          ],
        },
        {
          heading: "Use of Services",
          body: [
            "You agree to use the platform only for lawful business purposes and to provide accurate, complete and current information. You are responsible for maintaining the security of your account credentials.",
          ],
        },
        {
          heading: "Payments & Settlement",
          body: [
            "Payments are processed through regulated banking partners and networks. Settlement times, limits and fees may vary by currency, destination and plan, and are subject to screening and verification.",
          ],
        },
        {
          heading: "Compliance Obligations",
          body: [
            "You must comply with all applicable anti-money-laundering, sanctions and counter-terrorist-financing requirements. We may request additional information and may suspend or restrict accounts to meet our obligations.",
          ],
        },
        {
          heading: "Fees",
          body: [
            "Applicable fees are presented in your plan and confirmed during onboarding. We will provide notice of material changes to fees.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "To the maximum extent permitted by law, Orveda Pay is not liable for indirect, incidental or consequential damages arising from your use of the services.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "We may suspend or terminate access where required by law, for breach of these terms, or to manage risk. You may close your account in line with our procedures.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These terms are governed by the applicable laws of the jurisdiction in which the relevant Orveda Pay entity is established.",
          ],
        },
      ]}
    />
  );
}
