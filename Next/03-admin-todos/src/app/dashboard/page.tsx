import { auth } from "@/auth";
import { WidgetItem } from "@/components";



export default async function DashboardPage() {
    const session = await auth();
    return (
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
            <WidgetItem title="Server side">
                {JSON.stringify(session?.user)}
            </WidgetItem>
        </div>
    );
}