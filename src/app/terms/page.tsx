import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-black text-white mb-8 uppercase">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-white/70 space-y-6">
          <p>
            By accessing the website at ukcasinohouse.org, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on UK Casino House&apos;s website for personal, non-commercial transitory viewing only.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">2. Disclaimer</h2>
          <p>
            The materials on UK Casino House&apos;s website are provided on an &apos;as is&apos; basis. UK Casino House makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, UK Casino House does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">3. Limitations</h2>
          <p>
            In no event shall UK Casino House or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UK Casino House&apos;s website, even if UK Casino House or a UK Casino House authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">4. Accuracy of Materials</h2>
          <p>
            The materials appearing on UK Casino House&apos;s website could include technical, typographical, or photographic errors. UK Casino House does not warrant that any of the materials on its website are accurate, complete or current. UK Casino House may make changes to the materials contained on its website at any time without notice.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">5. Links</h2>
          <p>
            UK Casino House has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by UK Casino House of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-8">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
