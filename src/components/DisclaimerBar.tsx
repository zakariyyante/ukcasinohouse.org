import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="w-full bg-[#00050d] border-y border-white/5 py-5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-gold/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-center lg:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl filter drop-shadow-md">🔞</span>
            <span className="font-bold text-white/90 uppercase tracking-[0.1em] text-sm">Strictly 18+ Members Only</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden lg:block"></div>
          <p className="text-xs text-white/40 font-medium max-w-2xl leading-relaxed">
            Please maintain responsible gambling standards. For confidential support, visit{" "}
            <Link href="https://www.begambleaware.org" target="_blank" className="text-gold hover:text-white underline underline-offset-4 decoration-gold/30 transition-colors font-bold">
              BeGambleAware.org
            </Link>{" "}
            or contact the National Helpline at <span className="text-white font-bold">0808 8020 133</span>.
          </p>
          <div className="h-4 w-px bg-white/10 hidden lg:block"></div>
          <span className="text-[10px] font-black text-gold/40 uppercase tracking-[0.3em]">
            UKGC Licensed & Regulated
          </span>
        </div>
      </div>
    </div>
  );
}
