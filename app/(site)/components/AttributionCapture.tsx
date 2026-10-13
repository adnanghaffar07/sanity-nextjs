"use client";

// Records how the visitor arrived (UTM tags, referrer, first page) for forms.

import { useEffect } from "react";
import { captureAttribution } from "@/lib/forms/client/attribution";

export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
