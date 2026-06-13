import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔞</span>
            <span className="font-black text-white uppercase tracking-tighter">For adults 18+ only.</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <p className="text-xs md:text-sm text-white/50 font-medium">
            Please gamble responsibly. For help and support, visit{" "}
            <Link href="https://www.begambleaware.org" target="_blank" className="text-primary hover:underline font-bold">
              BeGambleAware.org
            </Link>{" "}
            or call the National Gambling Helpline at <span className="text-white">0808 8020 133</span>.
          </p>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
            UKGC Licensed & Regulated
          </span>
        </div>
      </div>
    </div>
  );
}
