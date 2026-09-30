import React from "react";
import { images } from "../config/images";

/**
 * Official BMO Logo Component
 * Uses the original BMO logo asset with a TRUE transparent background.
 * Works seamlessly on both dark blue backgrounds (header, footer, poster)
 * and light backgrounds without any added boxes or colored containers.
 */
export default function BmoLogo({
  variant = "white", // "white" for dark/blue backgrounds, "dark" or "color" for light backgrounds
  className = "h-10 sm:h-12 w-auto",
  alt = "BMO - The Ethics of Business",
}) {
  const isDarkBg = variant === "white";
  const logoSrc = isDarkBg ? images.logoWhite : images.logo;

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`select-none object-contain transition-opacity duration-200 ${className}`}
      loading="eager"
    />
  );
}
