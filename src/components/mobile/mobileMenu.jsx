"use client";

import { MENU } from "@/constant/config";
import { classNames } from "@/lib/functions";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Github from "../header/icon/github";
import LinkedIn from "../header/icon/linkedIn";
import Twitter from "../header/icon/twitter";


export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const menuWapper = useRef(null);

  useEffect(() => {
    if (!show) return;
    const handleOutsideClick = (e) => {
      if (
        show &&
        menuWapper.current &&
        !menuWapper.current.contains(e.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuWapper, show]);

  return (
    <>
      <div
        onClick={() => setShow((cur) => !cur)}
        className="cursor-pointer flex items-center"
      >
        <div className={classNames("mobile-menu", show && "change")}>
          <div className="bar1 bar"></div>
          <div className="bar2 bar"></div>
          <div className="bar3 bar"></div>
        </div>
      </div>

      <div
        className={classNames(
          show ? "opacity-100" : "opacity-0 -z-10",
          "bg-black/30 inset-0 absolute w-screen h-screen transition-all"
        )}
      >
        <div
          ref={menuWapper}
          className={classNames(
            show ? "scale-x-100" : "scale-x-0",
            "bg-white h-screen shadow-lg w-4/6 transition-all origin-left"
          )}
        >
          {/* <div className="flex justify-end pt-3 pr-5">
            <span
              onClick={() => setShow(false)}
              className="text-2xl cursor-pointer"
            >
              ✖
            </span>
          </div> */}
          <div className="p-10">
            <ul>
              {MENU.map((item, idx) => (
                <li className="mb-4" key={idx}>
                  <Link
                    className="w-full p-1 flex items-center gap-2 text-sm text-slate-600 hover:bg-slate-200 rounded-full"
                    onClick={() => setShow(false)}
                    href={item.href}
                  >
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-slate-400" />
                    </div>

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="contact" className="btn header-cta w-full block text-center my-10">
              Get in Touch
            </Link>

            <div className="gap-6 items-center flex mt-6 justify-center">
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


          </div>
        </div>
      </div>
    </>
  );
}
