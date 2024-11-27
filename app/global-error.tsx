"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body className="h-full flex justify-center items-center flex-col gap-5">
        <h2>Something went wrong!</h2>
        <Button variant="outline" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}
