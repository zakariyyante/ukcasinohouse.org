import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-black text-white mb-8 uppercase">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-white/70 space-y-6">
          <p>
            Welcome to UK Casino House. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">3. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
          </p>
          <p>
            Our website uses Google Analytics and Vercel Analytics to understand how visitors interact with our site. This helps us improve our content and user experience. These tools may collect your IP address, browser type, and other technical data.
          </p>
          <p>
            We also use GCLID (Google Click ID) tracking to measure the effectiveness of our advertising campaigns. This information is used solely for attribution and performance analysis.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">4. Third-Party Websites</h2>
          <p>
            The Website contains links to third-party websites. We are not responsible for the privacy practices or the content of such websites. We encourage you to read the privacy policies of any website you visit.
          </p>
          <p>
            UK Casino House is an affiliate marketing website. When you click on a link to a casino brand, you will be redirected to a third-party site. These sites have their own privacy policies which you should review.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
