"use client";

import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="flex gap-4">
      <Badge capitalize>default</Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
    </div>
  );
}
