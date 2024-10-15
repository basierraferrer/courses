'use client';
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

interface ITabBar {
    tabOptions?: number[];
    currentTab?: number;
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: ITabBar) => {
    const classCols = useMemo(() => 'grid-cols-' + tabOptions.length, [tabOptions.length]);
    const [selected, setSelected] = useState(currentTab);
    const router = useRouter();

    const onTabSelected = (tab: number) => {
        setSelected(tab);
        setCookie('selectedTab', tab.toString());
        router.refresh();
    };

    return (
        <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 ${classCols}`}>

            {
                tabOptions.map((tab) => (
                    <div key={tab} onClick={() => onTabSelected(tab)}>
                        <input type="radio" id={tab.toString()} checked={selected === tab} onChange={() => { }} className="peer hidden" />
                        <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                            {tab}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}