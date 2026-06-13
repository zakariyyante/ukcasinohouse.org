import LegalLayout from "@/components/legal/LegalLayout";

export default function ContactPage() {
  return (
    <LegalLayout title="Contact Us" subtitle="Contact Our Team">
      <p>
        At UK Casino House, we pride ourselves on providing a premium experience for our members. Whether you have a question about a specific house, need assistance with our platform, or are interested in a bespoke partnership, our concierge team is here to assist you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">General Inquiries</h3>
          <p className="text-white font-serif text-xl mb-2">concierge@ukcasinohouse.org</p>
          <p className="text-white/40 text-sm">Response time: Within 24 hours</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Partnership Desk</h3>
          <p className="text-white font-serif text-xl mb-2">partners@ukcasinohouse.org</p>
          <p className="text-white/40 text-sm">For licensed operators only</p>
        </div>
      </div>

      <h2>Our Location</h2>
      <p>
        While our platform serves the entire United Kingdom, our editorial team is based in the heart of London&apos;s financial district, ensuring we stay at the pulse of the industry.
      </p>
      <p className="text-white/40 italic">
        UK Casino House HQ<br />
        One Canada Square, Canary Wharf<br />
        London, E14 5AB<br />
        United Kingdom
      </p>

      <h2>Feedback</h2>
      <p>
        Your feedback is essential to maintaining our high standards. If you have had an exceptional experience—or an unsatisfactory one—at any of the establishments we feature, please let us know. Your insights help us refine our rankings and protect our community.
      </p>
    </LegalLayout>
  );
}
