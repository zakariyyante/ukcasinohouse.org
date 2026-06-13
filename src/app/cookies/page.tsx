import LegalLayout from "@/components/legal/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" subtitle="Cookie Policy">
      <p>
        This Cookie Policy explains how UK Casino House uses cookies and similar technologies to recognize you when you visit our platform.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
      </p>

      <h2>How we use cookies</h2>
      <p>
        We use cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate. Other cookies enable us to track and target the interests of our users to enhance the experience on our platform.
      </p>
      <ul>
        <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our Website.</li>
        <li><strong>Analytics Cookies:</strong> These cookies collect information that is used in aggregate form to help us understand how our Website is being used (e.g., Vercel Analytics).</li>
        <li><strong>Advertising Cookies:</strong> These are used to make advertising messages more relevant to you (e.g., GCLID tracking).</li>
      </ul>

      <h2>How can I control cookies?</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
      </p>

      <p className="mt-12 text-sm italic text-white/40">
        Last Updated: June 13, 2026
      </p>
    </LegalLayout>
  );
}
