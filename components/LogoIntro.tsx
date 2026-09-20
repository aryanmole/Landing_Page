"use client";

import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsAnimating(true);
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const replayAnimation = () => {
    setAnimationKey((prev) => prev + 1);
    setIsAnimating(true);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Fullscreen Dark Backdrop Overlay */}
      {isAnimating && (
        <div
          key={`overlay-${animationKey}`}
          className="fixed inset-0 z-[100] bg-[#030303] overflow-hidden pointer-events-none"
          style={{
            animation: "overlayFadeOut 5.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
          }}
        >
          {/* Ambient Glow behind center logo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-r from-[#EC6229]/10 via-[#EC6229]/05 to-[#FFECE6]/05 blur-[180px] pointer-events-none"
            style={{
              animation: "glowPulse 5s ease-in-out forwards",
            }}
          />
        </div>
      )}

      {/* Vector Animating Logo: High Resolution (450x500px) with swift glide to bottom right */}
      {isAnimating && (
        <div
          key={`anim-logo-${animationKey}`}
          className="fixed z-[101] w-[450px] h-[500px] pointer-events-none origin-top-left will-change-transform"
          style={{
            animation: "logoVectorCinematicIntro 5.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          <svg
            width="450"
            height="500"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            className="w-full h-full drop-shadow-[0_0_20px_rgba(236,98,41,0.2)]"
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

      {/* Settled Fixed Logo at Bottom-Right */}
      {!isAnimating && (
        <div
          onClick={replayAnimation}
          className="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-50 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group"
          title="Click to replay logo animation"
        >
          <div className="absolute -inset-2 rounded-full bg-[#EC6229]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
