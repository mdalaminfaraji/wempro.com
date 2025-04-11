import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={108}
          height={31}
          priority
        />
      </div>
    </main>
  );
}
