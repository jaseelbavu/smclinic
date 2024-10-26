import Image from "next/image";
import Header from "./includes/Header";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Header />

        <div className="relative isolate px-6 pt-24 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                <span className="text-5xl block">
                  WELCOME TO
                </span>
                SM HOMOEO CLINIC
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 dark:text-white sm:text-xl/8">
              Rediscover Wellness with Gentle, Effective Homoeopathy – Your Health, Our Commitment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
