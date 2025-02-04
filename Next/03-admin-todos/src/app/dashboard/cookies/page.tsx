import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
    title: 'Cookies',
    description: 'Cookies example',
};

export default function CookiesPage() {

    const cookieStore = cookies();
    const currentTab = cookieStore.get('selectedTab')?.value ?? '1';

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-3">
            <div className="flex flex-col">
                <span className="text-3xl">Tabs</span>
                <TabBar currentTab={+currentTab} />
            </div>
        </div>
    );
}