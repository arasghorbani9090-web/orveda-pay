import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AML Policy",
  description:
    "Orveda Pay Anti-Money-Laundering (AML) Policy — our framework for preventing money laundering and financial crime.",
};

export default function AmlPage() {
  return (
    <LegalLayout
      eyebrow="Compliance"
      title="AML Policy"
      updated="June 1, 2026"
      intro="Orveda Pay is committed to preventing money laundering, terrorist financing and other financial crime. This policy summarises our Anti-Money-Laundering (AML) framework."
      sections={[
        {
          heading: "Policy Statement",
          body: [
            "Orveda Pay operates a risk-based AML programme designed to detect and prevent the use of our services for money laundering or financial crime, in line with applicable laws and regulatory guidance.",
          ],
        },
        {
          heading: "Customer Due Diligence (KYC & KYB)",
          body: [
            "We verify the identity of customers, directors and beneficial owners (KYC) and the legitimacy and structure of the business (KYB) before activating accounts, and on an ongoing basis.",
          ],
        },
        {
          heading: "Sanctions & PEP Screening",
          body: [
            "Customers and transactions are screened against sanctions lists and for politically exposed persons (PEPs) at onboarding and continuously thereafter.",
          ],
        },
        {
          heading: "Transaction Monitoring",
          body: [
            "We monitor transactions in real time and over time to identify unusual or suspicious activity, applying a risk-based approach to thresholds and patterns.",
          ],
        },
        {
          heading: "Suspicious Activity Reporting",
          body: [
            "Where required, we report suspicious activity to the relevant authorities and cooperate with lawful requests, in accordance with applicable regulations.",
          ],
        },
        {
          heading: "Record Keeping",
          body: [
            "We retain customer due diligence records and transaction information for the periods required by applicable law.",
          ],
        },
        {
          heading: "Governance & Training",
          body: [
            "Our AML programme is overseen by a dedicated compliance function. Staff receive regular training appropriate to their role and risk exposure.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For AML or compliance enquiries, contact compliance@orvedapay.com.",
          ],
        },
      ]}
    />
  );
}
