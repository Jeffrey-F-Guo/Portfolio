import { ExperienceSection } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { GlowingOrbs } from "@/components/GlowingOrbs";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import Link from "next/link";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

export default function ExperiencePage() {
  return (
    <div>
      <GlowingOrbs />
      <ScrollAnimator />
      <div className="container pt-24 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium text-black/60 hover:underline"
        >
          <ArrowLeft className="size-5" />
          <span>Go Back</span>
        </Link>
        <ExperienceSection fullPage={true} />
      </div>
      <Footer />
    </div>
  );
}
