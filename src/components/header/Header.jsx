import { MENU } from "@/constant/config";
import Link from "next/link";
import Github from "./icon/github";
import LinkedIn from "./icon/linkedIn";
// import Twitter from "./icon/twitter";
import MobileMenu from "../mobile/mobileMenu";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container flex justify-between items-center">
          <div className="">
            <Link href="/" className="font-semibold text-sm text-accent">
              Ali Shayesteh
            </Link>
          </div>

          <div className="gap-4 items-center hidden sm:flex">
            <nav>
              <ul className="flex gap-4 items-center">
                {MENU.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      className="text-slate-600 hover:text-slate-800 text-sm"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-l h-3 border-accent/30" />
            <div className="gap-6 items-center hidden md:flex">
              {/* <div>
                <a target="_blank" href="https://www.x.com/alishayesteh.ir">
                  <Twitter />
                </a>
              </div> */}

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
              <div className="border-l h-3 border-accent/30" />
            </div>
            <Link
              href="/files/Ali_Shayesteh_Frontend_Engineer.pdf"
              className="btn header-cta"
            >
              Download CV
            </Link>
          </div>
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
