import React from "react";

const faqs = [
  {
    question: "Is reporting public issues free?",
    answer:
      "Yes. Citizens can report public infrastructure issues for free. Free users can submit up to 3 issues unless they upgrade to premium.",
  },
  {
    question: "Can I report an issue anonymously?",
    answer:
      "Yes. You may submit issues anonymously. However, providing your identity allows you to track updates and communicate with authorities more effectively.",
  },
  {
    question: "How many issues can a free user submit?",
    answer:
      "Free users can submit a maximum of 3 issues. Premium users can submit unlimited issues without any restriction.",
  },
  {
    question: "What benefits do premium users get?",
    answer:
      "Premium users receive priority support, unlimited issue submissions, and faster attention from authorities for boosted issues.",
  },
  {
    question: "How does the issue resolution process work?",
    answer:
      "After submission, an admin reviews the issue, assigns staff, and tracks progress through multiple stages: Pending, In-Progress, Resolved, and Closed.",
  },
  {
    question: "How long does it take to resolve an issue?",
    answer:
      "Resolution time depends on issue complexity. Minor issues are usually resolved within a few days, while complex issues may take longer.",
  },
  {
    question: "Who can see my reported issue?",
    answer:
      "Reported issues are visible to admins and assigned staff. Some issue details may be publicly visible depending on privacy settings.",
  },
  {
    question: "Can I edit or delete my issue after submission?",
    answer:
      "You can edit or delete your own issue only if its status is still pending. Once work starts, editing is disabled to preserve data integrity.",
  },
  {
    question: "What happens if my issue is rejected?",
    answer:
      "Admins may reject issues if they are invalid or incomplete. A rejection record is added to the issue timeline for transparency.",
  },
  {
    question: "How does issue upvoting work?",
    answer:
      "Logged-in users can upvote an issue once to show public importance. Users cannot upvote their own issues.",
  },
  {
    question: "What does boosting an issue mean?",
    answer:
      "Boosting an issue increases its priority. Boosted issues appear above normal issues and receive faster attention after payment.",
  },
  {
    question: "What if my account is blocked?",
    answer:
      "Blocked users can log in but cannot submit, edit, upvote, or boost issues. A warning message will be shown, and you may contact authorities for support.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto text-sm sm:text-base">
            Clear answers to help citizens understand how the platform works
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-base-200 border-l-4 border-primary/40 hover:border-primary transition"
            >
              <div className="collapse collapse-arrow">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base sm:text-lg font-medium pr-8">
                  {faq.question}
                </div>
                <div className="collapse-content text-sm sm:text-base text-base-content/70 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-base-content/50">
            Still have questions? Please contact support or your local authority.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
