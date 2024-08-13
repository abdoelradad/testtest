"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
// import Nav from './nav';
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div>
        <div className="padding-[30px] fixed  top-5 right-5 z-50">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="w-[80px] h-[80px] rounded-full bg-primary cursor-pointer flex items-center justify-center"
          >
            <div
              className={`w-[100%] burger ${isActive ? "burgerActive" : ""}`}
            ></div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
