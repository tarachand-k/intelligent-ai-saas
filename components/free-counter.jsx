"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_LIMIT } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

export const FreeCounter = ({ apiLimitCount = 0, isPro = false }) => {
  const proModel = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  console.log("Is pro", isPro);

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_LIMIT} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_LIMIT) * 100}
            />
          </div>
          <Button
            className="w-full"
            variant="premium"
            onClick={proModel.onOpen}
          >
            Upgrade
            <Zap className="w-4 h-5 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
