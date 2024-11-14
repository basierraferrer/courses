import { auth } from "@/auth";
import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
      <WidgetItem title="Server side">{JSON.stringify(session)}</WidgetItem>
    </div>
  );
}
