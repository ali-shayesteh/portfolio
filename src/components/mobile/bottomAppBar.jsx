import { MENU } from "@/constant/config";
import Link from "next/link";

const move = function (arr, from, to) {
  const res = [...arr];
  res.splice(to, 0, res.splice(from, 1)[0]);
  return res;
};

export default function BottomAppBar() {
  return (
    <div className="border-t bg-slate-50 flex justify-between py-3 px-10 fixed bottom-0 w-full">
      {move(MENU, 0, 1).map((item, idx) => (
        <div key={idx}>
          <Link href={item.href}>
            <item.icon className="w-6 h-6 text-accent/50" />
          </Link>
        </div>
      ))}
    </div>
  );
}
