"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// In-memory flag that tracks whether the intro animation has completed.
// Automatically resets on full page reload / refresh / new tab.
let hasIntroFinished = false;

export default function LogoIntro() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isHomePage = pathname === "/" || pathname === "/home";

  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<"initial" | "revealing" | "gliding" | "settled">(
    hasIntroFinished ? "settled" : "initial"
  );

  useEffect(() => {
    setMounted(true);

    // Clean up any residual sessionStorage key
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem("cocpit_intro_played");
      } catch {}
    }

    if (shouldReduceMotion) {
      setStage("settled");
      hasIntroFinished = true;
      return;
    }

    // If intro already completed, stay settled on any route
    if (hasIntroFinished) {
      setStage("settled");
      return;
    }

    // If on a route other than home, skip intro and stay settled
    if (!isHomePage) {
      setStage("settled");
      hasIntroFinished = true;
      return;
    }

    // On home page: start the animation sequence
    setStage("initial");

    // Phase 1: Initial black screen hold (500ms) -> Start blur-to-clear reveal
    const timer1 = setTimeout(() => {
      setStage("revealing");
    }, 500);

    // Phase 2: After becoming clear at center (3000ms) -> Start unhurried shrink & glide to bottom-right
    const timer2 = setTimeout(() => {
      setStage("gliding");
    }, 3000);

    // Phase 3: Settle at bottom-right corner & reveal website content (5500ms)
    const timer3 = setTimeout(() => {
      setStage("settled");
      hasIntroFinished = true;
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, isHomePage, shouldReduceMotion]);

  if (!mounted) return null;

  return (
    <>
      {/* Fullscreen Black Backdrop (#030303) — Active during intro sequence */}
      <AnimatePresence>
        {isHomePage && stage !== "settled" && (
          <motion.div
            key="intro-backdrop"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-[100] bg-[#030303] overflow-hidden pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Cinematic High-Resolution Vector Animated Logo Layer */}
      {isHomePage && stage !== "settled" && (
        <div className="fixed inset-0 z-[101] overflow-hidden pointer-events-none flex items-center justify-center">
          <motion.div
            initial={{
              x: 0,
              y: 0,
              scale: 0.65,
              opacity: 0,
              filter: "blur(40px)",
            }}
            animate={
              stage === "initial"
                ? {
                    x: 0,
                    y: 0,
                    scale: 0.65,
                    opacity: 0,
                    filter: "blur(40px)",
                  }
                : stage === "revealing"
                ? {
                    x: 0,
                    y: 0,
                    scale: 0.65,
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {
                    x:
                      typeof window !== "undefined" && window.innerWidth < 768
                        ? "calc(50vw - 24px - 13.5px)"
                        : "calc(50vw - 40px - 13.5px)",
                    y:
                      typeof window !== "undefined" && window.innerWidth < 768
                        ? "calc(50vh - 24px - 15px)"
                        : "calc(50vh - 40px - 15px)",
                    scale: 0.033333,
                    opacity: 1,
                    filter: "blur(0px)",
                  }
            }
            transition={{
              duration: stage === "revealing" ? 2.5 : stage === "gliding" ? 2.5 : 0.4,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="relative flex items-center justify-center transform-gpu origin-center"
          >
            <svg
              width="810"
              height="900"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              className="w-[810px] h-[900px] max-w-[92vw] max-h-[92vh] drop-shadow-[0_0_60px_rgba(236,98,41,0.3)]"
            >
              <path
                d="M26.3865 0V6.02867C19.8233 6.02867 18.7476 8.82348 18.7379 12.2708V12.3155C18.7379 14.1296 18.7524 15.173 18.721 16.6108L11.1159 16.6542C11.1159 16.6542 11.0676 15.7242 11.0676 14.1996C11.0676 13.8968 11.0688 13.5711 11.0737 13.225C11.0773 12.9717 11.0737 12.7003 11.0676 12.4156V9.08885C11.2678 6.07933 11.8889 4.12164 14.6809 2.17119C15.6782 1.4752 17.3715 0.827464 18.9128 0.504198C20.5819 0.154395 22.9397 0 25.1974 0H26.3877H26.3865Z"
                fill="#FFECE6"
              />
              <path
                d="M18.7379 22.8023V29.7055C18.7379 29.7055 18.3387 29.7164 17.6549 29.7164C16.2921 29.7164 13.7957 29.6754 11.0664 29.4293C10.7975 29.4052 10.5273 29.3786 10.2548 29.3509C9.25379 29.2472 8.25279 28.9987 7.28677 28.6247C5.19312 27.8154 3.2659 26.4137 1.8838 24.5972C1.57024 24.1847 1.23738 23.5538 0.943107 22.8313C0.658487 22.1329 0.410047 21.3488 0.250852 20.5913C0.045829 19.6083 0 18.162 0 16.7182C0 15.711 0.0217088 14.7038 0.0277389 13.8558C0.0301509 13.4602 0.0289447 13.921 0.0397989 11.9536H7.27833C7.24577 14.9185 7.24215 14.9873 7.23853 16.2924C7.23853 16.5939 7.253 16.9075 7.28677 17.2272C7.48335 19.0377 8.34324 21.0304 11.0664 22.0858C11.7527 22.3524 12.5571 22.5587 13.499 22.6877C14.7171 22.8542 17.0724 22.8023 18.7379 22.8023Z"
                fill="#FFECE6"
              />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Fixed Bottom-Right Corner Badge — Displayed on all pages or after intro completes */}
      {stage === "settled" && (
        <div
          className="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-50 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="Cocpit Logo"
        >
          <div className="absolute -inset-2 rounded-full bg-[#EC6229]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            className="relative z-10 transition-transform duration-300"
          >
            <path
              d="M26.3865 0V6.02867C19.8233 6.02867 18.7476 8.82348 18.7379 12.2708V12.3155C18.7379 14.1296 18.7524 15.173 18.721 16.6108L11.1159 16.6542C11.1159 16.6542 11.0676 15.7242 11.0676 14.1996C11.0676 13.8968 11.0688 13.5711 11.0737 13.225C11.0773 12.9717 11.0737 12.7003 11.0676 12.4156V9.08885C11.2678 6.07933 11.8889 4.12164 14.6809 2.17119C15.6782 1.4752 17.3715 0.827464 18.9128 0.504198C20.5819 0.154395 22.9397 0 25.1974 0H26.3877H26.3865Z"
              fill="#FFECE6"
            />
            <path
              d="M18.7379 22.8023V29.7055C18.7379 29.7055 18.3387 29.7164 17.6549 29.7164C16.2921 29.7164 13.7957 29.6754 11.0664 29.4293C10.7975 29.4052 10.5273 29.3786 10.2548 29.3509C9.25379 29.2472 8.25279 28.9987 7.28677 28.6247C5.19312 27.8154 3.2659 26.4137 1.8838 24.5972C1.57024 24.1847 1.23738 23.5538 0.943107 22.8313C0.658487 22.1329 0.410047 21.3488 0.250852 20.5913C0.045829 19.6083 0 18.162 0 16.7182C0 15.711 0.0217088 14.7038 0.0277389 13.8558C0.0301509 13.4602 0.0289447 13.921 0.0397989 11.9536H7.27833C7.24577 14.9185 7.24215 14.9873 7.23853 16.2924C7.23853 16.5939 7.253 16.9075 7.28677 17.2272C7.48335 19.0377 8.34324 21.0304 11.0664 22.0858C11.7527 22.3524 12.5571 22.5587 13.499 22.6877C14.7171 22.8542 17.0724 22.8023 18.7379 22.8023Z"
              fill="#FFECE6"
            />
          </svg>
        </div>
      )}
    </>
  );
}

