"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  // Log the error to an error tracking service (e.g., Sentry, LogRocket)
  useEffect(() => {
    console.error("Global Error:", error);
    // Example: Log to an error tracking service
    // logErrorToService(error);
  }, [error]);

  return (
    <html>
      <body className="h-screen flex justify-center items-center flex-col gap-5 bg-gray-50 p-4">
        {/* Animated Error Message */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Something went wrong!
          </h2>
          <p className="text-gray-700 mb-2">
            We apologize for the inconvenience. Please try again or contact
            support if the issue persists.
          </p>
          <p className="text-sm text-gray-500">
            Error: {error.message || "Unknown error"}
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 mt-2">
              Error Digest: {error.digest}
            </p>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4"
        >
          <Button variant="outline" onClick={() => reset()}>
            Try again
          </Button>
          <Button onClick={() => router.push("/")}>Go to Home</Button>
        </motion.div>
      </body>
    </html>
  );
}
