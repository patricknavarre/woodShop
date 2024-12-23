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
