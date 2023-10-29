import { MENU } from "@/constant/config";
import Link from "next/link";

const move = function (arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr
  };

export default function BottomAppBar(){
    return (
        <div className="border-t bg-slate-50 flex justify-between py-3 px-10 fixed bottom-0 w-full">
            {
            move(MENU, 0, 1).map((item, idx) => (
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