"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServerDownPage() {
  const router = useRouter();

  return (
    <div className="screen flex flex-col md:flex-row justify-center items-center h-full w-full gap-10 bg-[url('/images/server-down-bg.svg')] bg-cover bg-center dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-2 flex-1"
      >
        <h5 className="text-sm text-primary font-semibold dark:text-primary-400">
          503 Service Unavailable
        </h5>
        <h1 className="max-w-[1100px] font-semibold capitalize text-2xl leading-[44px] sm:text-3xl sm:leading-[50px] md:text-4xl md:leading-[55px] lg:text-5xl lg:leading-[65px] xl:text-6xl xl:leading-[72px] dark:text-white">
          Uh oh, the server is down...
        </h1>
        <p className="text-[#727282] capitalize text-base leading-[28px] sm:text-lg sm:leading-[29px] lg:text-xl lg:leading-[30px] max-w-[640px] dark:text-gray-300">
          Sorry, we&apos;re currently experiencing technical difficulties. Our
          team is working hard to restore the service. Please check back soon.
        </p>
        <div className="flex items-center gap-3 pt-10">
          <Button variant="outline" asChild>
            <Link href="#" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go back
            </Link>
          </Button>

          <Button asChild>
            <Link href="/">Take me home</Link>
          </Button>
        </div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[150px] md:text-[200px] lg:text-[300px] font-bold text-gray-100 -order-1 md:order-1 dark:text-gray-700"
      >
        500
      </motion.span>
    </div>
  );
}
