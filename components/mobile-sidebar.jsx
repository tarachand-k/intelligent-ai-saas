"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useState } from "react";
// import { useEffect, useState } from "react";

const MobileSidebar = ({ apiLimitCount = 0, isPro = false }) => {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) return null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <Sidebar
          isPro={isPro}
          setIsOpen={setIsOpen}
          apiLimitCount={apiLimitCount}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
