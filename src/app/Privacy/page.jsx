import React from "react";
import Head from "next/head";

const Privacy_Policy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>Privacy Policy | Purvanchal Home Infra</title>
        <meta
          name="description"
          content="Learn about how Purvanchal Home Infra collects, uses, and protects your personal information while using our real estate services."
        />
      </Head>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="mb-8">
          At Purvanchal Home Infra, we are committed to protecting your privacy
          and ensuring your personal information is handled securely. This
          Privacy Policy outlines how we collect, use, and protect the
          information you provide while using our website.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Information We Collect
          </h2>
          <p className="mb-2">
            <span className="font-bold">Personal Information:</span> Name, email
            address, phone number, and other contact details you provide through
            forms.
          </p>
          <p className="mb-2">
            <span className="font-bold">Site Visit Information:</span> Data
            related to your visits, including the properties you view and
            inquiries you make.
          </p>
          <p>
            <span className="font-bold">Cookies:</span> We may use cookies to
            enhance your experience and collect non-personal data, such as
            browser type and IP address.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              Respond to your inquiries about properties.
            </li>
            <li className="mb-2">Provide free site visit scheduling.</li>
            <li className="mb-2">
              Offer personalized services, including EMI options and property
              recommendations.
            </li>
            <li>Improve our website and marketing efforts.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Sharing Your Information
          </h2>
          <p>
            We do not sell or share your personal information with third
            parties, except when required by law or when necessary to provide
            services (e.g., sharing your information with partners for
            processing property sales or financing).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Data Security
          </h2>
          <p>
            We use industry-standard security measures to protect your data from
            unauthorized access, loss, or disclosure. However, no online
            transmission can be guaranteed as completely secure, and you share
            information at your own risk.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Your Rights
          </h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Access and correct your personal data.</li>
            <li className="mb-2">
              Request deletion of your data, where legally permissible.
            </li>
            <li>
              Opt-out of marketing communications at any time by contacting us
              directly.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with the updated date at the top:{" "}
            {new Date().toLocaleDateString()}.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
          <p className="mt-2">
            <span className="font-bold">Purvanchal Home Infra</span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:DhananjayKumar89@gmail.com"
              className="text-primary underline"
            >
              DhananjayKumar89@gmail.com
            </a>
          </p>
          <p>Phone: +91 8860762386</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy_Policy;
