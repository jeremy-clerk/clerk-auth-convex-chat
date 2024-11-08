import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const tasks = await fetchQuery(api.tasks.get);
  return (
    <div className={"flex gap-4 flex-col"}>
      <p>This page is server rendered.</p>
      <p>
        Make sure to run
        <code className={"bg-black/90 text-orange-400 px-2 mx-2"}>
          pnpx convex dev
        </code>
      </p>
      <p>These tasks are from a query to Convex</p>
      <Link href={"/dash"}>
        <Button>Back to dash</Button>
      </Link>

      <ul className={"flex flex-col gap-2"}>
        {tasks?.map(({ _id, text }: { _id: string; text: string }) => (
          <li key={_id} className={"list-decimal"}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
