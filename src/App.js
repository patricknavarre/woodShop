import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import CustomOrders from "./pages/CustomOrders";
import About from "./pages/About";
import Products from "./pages/Products";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Custom Orders", to: "/custom-orders" },
  { name: "About", to: "/about" },
];

function App() {
  return (
    <Router>
      <div className="bg-white">
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-warm">
          <Popover className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/" className="group flex items-center space-x-2">
                    <span className="sr-only">Your Woodcraft</span>
                    <svg
                      className="h-8 w-8 text-amber-600 group-hover:text-amber-700 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Simple logo - you can replace this with your own */}
                      <path d="M12 2L2 8l10 6 10-6-10-6zM2 16l10 6 10-6-10-6-10 6z" />
                    </svg>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                      WoodCraft
                    </h1>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="text-base font-medium text-gray-600 hover:text-amber-600 transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full" />
                    </Link>
                  ))}
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-200"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </Popover>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main>
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-amber-700/70 backdrop-blur-sm" />
                    <img
                      className="h-full w-full object-cover transform scale-105 animate-subtle-zoom"
                      src="https://images.unsplash.com/photo-1610379230744-2e7cec0f35de"
                      alt="Woodworking craftsmanship"
                    />
                  </div>

                  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        <span className="block text-white mb-4">
                          Handcrafted with
                        </span>
                        <span className="block text-amber-200 font-serif">
                          Passion and Precision
                        </span>
                      </h1>
                      <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-amber-50">
                        Custom cutting boards and tables, crafted from the
                        finest woods and built to last generations.
                        <span className="block mt-2 text-amber-200 font-semibold">
                          Veteran-Owned & Operated
                        </span>
                      </p>

                      <div className="mt-12 flex items-center justify-center gap-6">
                        <Link
                          to="/products"
                          className="group relative overflow-hidden rounded-lg bg-white/90 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-amber-700 shadow-warm hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <span className="relative z-10">View Collection</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <a
                          href="mailto:patnavarre@gmail.com?subject=Custom%20Woodwork%20Quote%20Request&body=Hello%2C%0A%0AI'm%20interested%20in%20a%20custom%20piece.%20Here%20are%20the%20details%3A%0A%0AType%20of%20Item%3A%0ADimensions%3A%0APreferred%20Wood%20Type%3A%0ASpecial%20Requirements%3A%0A%0AThank%20you!"
                          className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-warm hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200"
                        >
                          <span className="relative z-10">Request Quote</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Products Section */}
                <div className="bg-white py-24 sm:py-32">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Featured Creations
                      </h2>
                      <p className="mt-4 text-lg leading-8 text-gray-600">
                        Each piece tells a story of craftsmanship and dedication
                      </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Featured Product 1 */}
                      <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                          <img
                            src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc"
                            alt="Handcrafted Dining Table"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <h3 className="mt-6 text-lg font-semibold text-gray-900">
                          Walnut Dining Table
                        </h3>
                        <p className="text-sm text-gray-500">
                          Custom-made family gathering piece
                        </p>
                      </div>

                      {/* Featured Product 2 */}
                      <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                          <img
                            src="https://images.unsplash.com/photo-1632789395770-20e6f63be806"
                            alt="End-grain Cutting Board"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <h3 className="mt-6 text-lg font-semibold text-gray-900">
                          Artisan Cutting Boards
                        </h3>
                        <p className="text-sm text-gray-500">
                          End-grain masterpieces
                        </p>
                      </div>

                      {/* Featured Product 3 */}
                      <div className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                          <img
                            src="https://images.unsplash.com/photo-1592078615290-033ee584e267"
                            alt="Live Edge Coffee Table"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <h3 className="mt-6 text-lg font-semibold text-gray-900">
                          Live Edge Coffee Table
                        </h3>
                        <p className="text-sm text-gray-500">
                          Natural beauty preserved
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 text-center">
                      <Link
                        to="/products"
                        className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
                      >
                        View Full Collection
                        <svg
                          className="ml-2 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            }
          />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
