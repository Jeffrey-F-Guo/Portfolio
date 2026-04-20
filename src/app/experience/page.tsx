import { ExperienceSection } from "@/sections/Experience";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import Link from "next/link";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

export default function ExperiencePage() {
  return (
    <div>
      <ScrollAnimator />
      <div className="container max-w-3xl pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 mt-10 mb-2 text-xs text-black/40 hover:text-black transition-colors"
        >
          <ArrowLeft className="size-3" />
          Back
        </Link>
        <ExperienceSection fullPage={true} />
      </div>
    </div>
  );
}
