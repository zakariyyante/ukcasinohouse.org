import LegalLayout from "@/components/legal/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Data Protection Policy">
      <p>
        At UK Casino House, we are committed to protecting your personal information and your right to privacy. This policy outlines how we collect, use, and safeguard your data when you visit our platform.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you voluntarily provide to us, such as your email address when you join our "Inner Circle" concierge list. We also automatically collect certain technical information, including:
      </p>
      <ul>
        <li>IP Address and browser type</li>
        <li>Device information and operating system</li>
        <li>Referral source (e.g., GCLID for advertising attribution)</li>
        <li>Interaction data (which brands you view or click)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        Your data is used to provide and improve our services, specifically:
      </p>
      <ul>
        <li>To personalize your experience on our platform.</li>
        <li>To send you exclusive invitations and industry updates (if opted-in).</li>
        <li>To analyze traffic and optimize our advertising campaigns.</li>
        <li>To ensure compliance with legal and regulatory requirements.</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We implement advanced SSL encryption and robust security protocols to protect your data. However, no method of transmission over the internet is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
      </p>

      <h2>4. Third-Party Sharing</h2>
      <p>
        We do not sell your personal data to third parties. We may share anonymized, aggregated data with our partners for analysis. When you click on a brand link, you are subject to that third party&apos;s privacy policy.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Under the UK General Data Protection Regulation (UK GDPR), you have the right to access, correct, or delete your personal data. You can unsubscribe from our communications at any time by clicking the link in our emails or contacting our concierge team.
      </p>

      <p className="mt-12 text-sm italic text-white/40">
        Last Updated: June 13, 2026
      </p>
    </LegalLayout>
  );
}
