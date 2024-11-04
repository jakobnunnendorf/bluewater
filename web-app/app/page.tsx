"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-2xl p-8 text-center">
        <div className="mb-6">
          <div className="relative mx-auto h-[80px] w-[200px]">
            <Image
              src="/logo-bg.png"
              alt="BlueWater Studios Logo Background"
              width={200}
              height={80}
              className="absolute left-0 top-0"
            />
            <div className="animate-slide absolute left-0 top-0">
              <Image
                src="/logo-yacht.png"
                alt="BlueWater Studios Yacht"
                width={200}
                height={80}
              />
            </div>
          </div>
          <h2 className="mt-8 text-2xl font-bold text-blue-300">
            BlueWater Studios
          </h2>
        </div>

        <h1 className="mb-4 mt-8 text-4xl font-bold text-white">
          🚧 Under Construction 🚧
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          We're working hard to bring you something amazing. Check back soon!
        </p>

        {/* Contact Information */}
        <div className="space-y-3 text-gray-300">
          <p className="text-lg font-semibold text-blue-300">Contact Us</p>
          <div className="space-y-2">
            <p>Jakob - Founder</p>
            <a
              href="mailto:jakob@bluewater-studios.de"
              className="text-blue-300 transition-colors hover:text-blue-400"
            >
              jakob@bluewater-studios.de
            </a>
            <p>
              <a
                href="tel:+6584250580"
                className="text-blue-300 transition-colors hover:text-blue-400"
              >
                +65 8425 0580
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
