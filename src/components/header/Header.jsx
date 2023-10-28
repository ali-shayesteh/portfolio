import { MENU } from "@/constant/config";
import Link from "next/link";
import Github from "./icon/github";
import LinkedIn from "./icon/linkedIn";
import Twitter from "./icon/twitter";

export default function Header() {
  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <div className="">
          <a href="/" className="font-semibold text-lg">
            Ali Shayesteh
          </a>
        </div>

        <div className="gap-6 items-center hidden sm:flex">
          <nav>
            <ul className="flex gap-6 items-center">
              {MENU.map((item, idx) => (
                <li key={idx}>
                  <Link
                    className="text-slate-600 hover:text-slate-800"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-l h-3 border-slate-300" />
          <div className="gap-6 items-center hidden md:flex">
            <div>
              <a target="_blank" href="https://www.x.com/alishayesteh.ir">
                <Twitter />
              </a>
            </div>

            <div>
              <a target="_blank" href="https://www.github.com/ali-shayesteh">
                <Github />
              </a>
            </div>

            <div>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ali-shayesteh"
              >
                <LinkedIn />
              </a>
            </div>
            <div className="border-l h-3 border-slate-300" />
          </div>
          

          <Link href="contact" className="btn header-cta">
            Get in Touch
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="sm:hidden">
          <span className="text-xl cursor-pointer">☰</span>
        </div>
      </div>
    </header>
  );
}
