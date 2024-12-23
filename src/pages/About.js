import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white pt-24">
      <div className="relative isolate">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5 pattern-grid-lg" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Hero Section */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Crafted with{" "}
                <span className="text-amber-600">Honor and Precision</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From defending our nation as a Marine Combat Veteran to crafting
                heirloom-quality woodwork, my commitment to excellence and
                attention to detail remains unwavering.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603417406253-4c65c06974c2"
                alt="American craftsmanship"
                className="w-full h-[400px] object-cover rounded-2xl shadow-warm"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mx-auto mt-32 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-3">
              <div className="p-6 border border-amber-100 rounded-2xl bg-amber-50/50 shadow-warm">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-600 text-white mb-6">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Marine Corps Values
                </h3>
                <p className="text-gray-600">
                  The core values of Honor, Courage, and Commitment learned in
                  the Marine Corps guide every piece I create. Each project is
                  approached with the same dedication and precision that defined
                  my military service.
                </p>
              </div>

              <div className="p-6 border border-amber-100 rounded-2xl bg-amber-50/50 shadow-warm">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-600 text-white mb-6">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Craftsmanship
                </h3>
                <p className="text-gray-600">
                  Every piece is crafted with the same level of discipline and
                  attention to detail that was required in military service.
                  Nothing leaves my workshop unless it meets the highest
                  standards of quality.
                </p>
              </div>

              <div className="p-6 border border-amber-100 rounded-2xl bg-amber-50/50 shadow-warm">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-600 text-white mb-6">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Built to Last
                </h3>
                <p className="text-gray-600">
                  Like the bonds formed in combat, each piece is built to stand
                  the test of time. Using traditional joinery techniques and the
                  finest materials, I create furniture that will become family
                  heirlooms.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mx-auto mt-32 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From Battlefield to Workshop
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              After serving in the Marine Corps, I discovered woodworking as a
              way to channel the same focus, discipline, and attention to detail
              that was crucial in military service. What started as a
              therapeutic hobby has grown into a passion for creating beautiful,
              functional pieces that bring joy to others.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Today, I combine modern techniques with traditional craftsmanship
              to create custom pieces that honor both the natural beauty of the
              wood and the timeless principles of quality woodworking.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="mx-auto mt-32 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Modern Craftsmanship Extends to the Web
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Just as I bring precision and attention to detail to my
              woodworking, this website was crafted using modern web
              technologies. Built with React and styled with TailwindCSS, it
              represents the perfect blend of functionality and aesthetics.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="flex flex-col items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-[#61DAFB]"
                  fill="currentColor"
                >
                  <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                  <path d="M12 21.35a2.06 2.06 0 0 1-1-.25c-.33-.17-.67-.39-1-.64-.65-.48-1.28-1-1.85-1.63a15.53 15.53 0 0 1-2.35-3.17 14.5 14.5 0 0 1-.81-1.67C4.14 12.42 3.8 11.17 4 10a2.8 2.8 0 0 1 .84-1.79 2.87 2.87 0 0 1 1.79-.84c.52-.08 1.05 0 1.56.15.52.13 1 .35 1.46.62a13.18 13.18 0 0 1 2.35 1.63A15.53 15.53 0 0 1 13.65 11a14.5 14.5 0 0 1 .81 1.67c.8 1.57 1.14 2.82.94 4a2.8 2.8 0 0 1-.84 1.79 2.87 2.87 0 0 1-1.79.84 3.44 3.44 0 0 1-.77.05Zm-2.44-1.56c.43.32.86.6 1.26.81a1.51 1.51 0 0 0 1.85-.31 1.49 1.49 0 0 0 .31-1.85c-.21-.4-.49-.83-.81-1.26a14.51 14.51 0 0 0-1.85-2.35 13.18 13.18 0 0 0-2.35-1.63c-.43-.32-.86-.6-1.26-.81a1.51 1.51 0 0 0-1.85.31 1.49 1.49 0 0 0-.31 1.85c.21.4.49.83.81 1.26a14.51 14.51 0 0 0 1.85 2.35 13.18 13.18 0 0 0 2.35 1.63Z" />
                </svg>
                <span className="mt-2 font-medium text-gray-900">React</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-[#38BDF8]"
                  fill="currentColor"
                >
                  <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.91 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.91-1.345C15.613 7.181 14.478 6.036 12 6.036zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.91 1.345C8.387 16.819 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.91-1.345C10.613 13.181 9.478 12 7 12z" />
                </svg>
                <span className="mt-2 font-medium text-gray-900">
                  TailwindCSS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-black"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.041 4.2h.082c.406 0 .736.33.736.736v7.242c0 .406-.33.735-.736.735h-.082c-.406 0-.736-.33-.736-.735V4.936c0-.406.33-.736.736-.736zm.041 11.6c.406 0 .736.33.736.736v.328c0 .406-.33.736-.736.736s-.736-.33-.736-.736v-.328c0-.406.33-.736.736-.736z" />
                </svg>
                <span className="mt-2 font-medium text-gray-900">Vercel</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-[#F05032]"
                  fill="currentColor"
                >
                  <path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                </svg>
                <span className="mt-2 font-medium text-gray-900">Git</span>
              </div>
            </div>
            <p className="mt-8 text-center text-gray-600">
              The site is hosted on Vercel's global edge network, ensuring fast
              load times and a smooth experience for visitors. Version control
              is managed through Git, allowing for continuous improvements and
              updates.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-32 rounded-2xl bg-amber-600 py-20 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's Create Something Special Together
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-amber-100">
                Whether you're looking for a custom dining table, a unique
                cutting board, or any other wooden masterpiece, I'm here to
                bring your vision to life.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/custom-orders"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-amber-600 shadow-sm hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start Your Custom Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
