export const metadata = {
  title: "Privacy Policy – Moster SMD Technik GmbH",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Controller</h2>
        <p>
          Moster SMD Technik GmbH
          <br />
          An d. Enz 3A
          <br />
          75223 Niefern-Öschelbronn
          <br />
          Email: moster@moster-smd.de
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. Collection and Storage of Personal Data
        </h2>
        <p>
          When you visit our website, general information is collected
          automatically. This information (server log files) includes the type
          of web browser used, the operating system, the domain name of your
          internet service provider, and similar data. This information does not
          allow any conclusions to be drawn about your identity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Contact Form</h2>
        <p>
          If you send us inquiries via the contact form, your details from the
          form, including the contact information you provided, will be stored
          for the purpose of processing your request and in case of follow-up
          questions. We do not share this data without your consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Google Ads</h2>
        <p>
          This website uses Google Ads, an online advertising service provided
          by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
          USA. Google Ads uses cookies and similar technologies to personalize
          and measure advertising. For more information, please refer to{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google's Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
        <p className="mb-2">You have the right at any time to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Request information about the personal data we hold about you</li>
          <li>Have your data corrected or deleted</li>
          <li>Restrict the processing of your data</li>
          <li>Object to the processing of your data</li>
          <li>Receive your data in a portable format</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, please contact us at: moster@moster-smd.de
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          6. Right to Lodge a Complaint
        </h2>
        <p>
          You have the right to lodge a complaint with a data protection
          supervisory authority regarding the processing of your personal data
          by us.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: {new Date().getFullYear()}
      </p>
    </main>
  );
}
