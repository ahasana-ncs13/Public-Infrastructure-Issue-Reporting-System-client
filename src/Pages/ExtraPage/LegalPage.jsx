import React from "react";

const legalContent = {
  terms: {
    title: "Terms & Conditions",
    content: `
Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. 
Please read them carefully before using our website.

1. Use of Service: You agree to use our platform only for lawful purposes.
2. Account Responsibility: You are responsible for keeping your account information secure.
3. Limitation of Liability: We are not liable for damages arising from your use of the platform.
4. Amendments: We may update these terms at any time. Continued use constitutes acceptance.
`,
  },
  privacy: {
    title: "Privacy Policy",
    content: `
We value your privacy and are committed to protecting your personal information.

1. Information Collection: We collect only necessary information to provide our services.
2. Use of Information: Your data is used to improve services and communicate with you.
3. Data Sharing: We do not share personal data with third parties without consent.
4. Cookies & Tracking: We use cookies to enhance user experience.
5. Data Security: We implement reasonable security measures to protect your data.
`,
  },
  code: {
    title: "Reporting Guidelines / Code of Conduct",
    content: `
Our platform is committed to maintaining a safe and respectful environment.

1. Reporting: Users may report inappropriate content or behavior.
2. Respect: All users must interact respectfully.
3. Prohibited Actions: Harassment, spam, or illegal activity is strictly prohibited.
4. Enforcement: Violations may result in account suspension or termination.
5. Feedback: We encourage constructive feedback to improve the platform.
`,
  },
};

const LegalPage = () => {
  return (
    <div className="max-w-4xl pt-26 mx-auto px-4 py-10 scroll-smooth">
      <h1 className="text-3xl font-bold mb-6 text-center">Legal & Policy</h1>

      {/* Anchor Navigation */}
      <nav className="flex justify-center mb-10 space-x-6 sticky top-0 bg-white py-4 z-10 shadow-sm">
        {Object.keys(legalContent).map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className="text-blue-600 font-medium hover:underline"
          >
            {legalContent[key].title}
          </a>
        ))}
      </nav>

      {/* Content Sections */}
      {Object.keys(legalContent).map((key) => (
        <section key={key} id={key} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">{legalContent[key].title}</h2>
          <pre className="whitespace-pre-wrap text-gray-800 bg-blue-50 shadow-md rounded-lg p-6 border border-gray-200">
            {legalContent[key].content}
          </pre>
        </section>
      ))}

      {/* Back to Top Button */}
      <div className="text-center mt-8">
        <a href="#top" className="text-blue-600 hover:underline">
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default LegalPage;
