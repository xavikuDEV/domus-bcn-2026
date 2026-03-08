"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps extends React.ComponentProps<typeof Image> {
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
