import { MENU } from "@/constant/config";
import Link from "next/link";

export default function BottomAppBar(){
    return (
        <div className="bg-white h-12 shadow flex justify-between py-3 px-4 fixed bottom-0 w-full">
            {
            MENU.map((item, idx) => (
                <div key={idx}>
                    <Link href={item.href}>
                        <item.icon className="w-6 h-6 text-slate-400" />
                    </Link>
                </div>
            ))
            }
        </div>
    )
}