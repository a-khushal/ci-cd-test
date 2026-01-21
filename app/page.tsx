"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// const b = "this will cause a lint error";

export default function Home() {
  const [count] = useState(0);
  // const a = useState(false);

  useEffect(() => {
    console.log(count);
  });

  const items = [1, 2, 3];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        {items.map((item) => (
          <div key={item.toString()}>{item}</div>
        ))}
      </main>
    </div>
  );
}
