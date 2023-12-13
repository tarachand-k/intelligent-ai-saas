import { cn } from "@/lib/utils";
import Image from "next/image";

export const Loader = ({ horizontal = false }) => {
  return (
    <div
      className={cn(
        "h-full flex gap-y-4 items-center justify-center",
        !horizontal ? "flex-col" : ""
      )}
    >
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground ml-4">
        Intelligent is thinking and generating...
      </p>
    </div>
  );
};
