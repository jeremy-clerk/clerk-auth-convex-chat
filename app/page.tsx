import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <div
        className={
          "w-full max-w-md rounded-md border shadow p-2 flex flex-col gap-4 items-center"
        }
      >
        <h1 className={"text-xl text-center font-semibold"}>
          Hey, {user?.firstName}!
        </h1>
        <p className={"text-center"}>This page is server rendered.</p>
        <UserButton />
        <Link href={"/dash"}>
          <Button>Go To Dash</Button>
        </Link>
      </div>
    </div>
  );
}
