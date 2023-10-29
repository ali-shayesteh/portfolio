"use client";

import { MENU } from "@/constant/config";
import { classNames } from "@/lib/functions";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
          <ul className="p-10">
            {MENU.map((item, idx) => (
              <li className="mb-4" key={idx}>
                <Link onClick={() => setShow(false)} href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
