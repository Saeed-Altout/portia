import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center flex-col gap-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button variant="outline" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
