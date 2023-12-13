"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fe74126f-85e2-44c5-ba3c-59b41146d1fb");
  }, []);

  return null;
};
