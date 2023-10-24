"use client";
import Image from "next/image";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <Image
        src="/images/error.webp"
        alt="404 Not Found"
        width={500}
        height={500}
      />
      <h1 className="text-2xl font-bold mb-4">
        404 - Oops! Something went wrong
      </h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go to Home Page
      </Link>
    </div>
  );
}
