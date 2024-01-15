"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="text-xl font-semibold cursor-pointer"
    >
      Food Recipe
    </div>
  );
};

export default Logo;
