import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className={"flex gap-4 flex-col"}>
      <Link href={"/dash/client"}>
        <Button>Client Rendered Tasks</Button>
      </Link>
      <Link href={"/dash/server"}>
        <Button>Server Rendered Tasks</Button>
      </Link>
      <div className={"flex items-center justify-center"}>
        <Button variant={"secondary"}>
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
    </div>
  );
}
