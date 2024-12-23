import { useState } from "react";

const woodTypes = [
  { id: "maple", name: "Maple", description: "Light, durable, and elegant" },
  {
    id: "walnut",
    name: "Walnut",
    description: "Rich, dark, and sophisticated",
  },
  { id: "oak", name: "Oak", description: "Classic, strong, and timeless" },
  {
    id: "cherry",
    name: "Cherry",
    description: "Warm, refined, and ages beautifully",
  },
];

const productTypes = [
  {
    id: "cutting-board",
    name: "Cutting Board",
    description: "Custom size and design",
  },
  {
    id: "dining-table",
    name: "Dining Table",
    description: "Made to your specifications",
  },
  {
    id: "coffee-table",
    name: "Coffee Table",
    description: "Unique centerpiece",
  },
  { id: "end-table", name: "End Table", description: "Perfect accent piece" },
];

export default function CustomOrders() {
  const [formData, setFormData] = useState({
    productType: "",
    woodType: "",
    dimensions: "",
    specialRequests: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
          >
            <pattern
              id="woodgrain"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 0h50v50H0z" fill="currentColor" fillOpacity=".1" />
              <path
                d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0z"
                fill="currentColor"
                fillOpacity=".1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#woodgrain)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Custom Orders
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create your perfect piece. Each custom order is handcrafted to
              your exact specifications, ensuring a unique addition to your home
              that will last for generations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Product Type Selection */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Select Product Type
                </label>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {productTypes.map((product) => (
                    <div
                      key={product.id}
                      className={`relative flex cursor-pointer rounded-lg border ${
                        formData.productType === product.id
                          ? "border-amber-600 bg-amber-50"
                          : "border-gray-300"
                      } p-4 shadow-sm focus:outline-none`}
                      onClick={() =>
                        setFormData({ ...formData, productType: product.id })
                      }
                    >
                      <div className="flex flex-1">
                        <div className="flex flex-col">
                          <span className="block text-sm font-medium text-gray-900">
                            {product.name}
                          </span>
                          <span className="mt-1 flex items-center text-sm text-gray-500">
                            {product.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wood Type Selection */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Select Wood Type
                </label>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {woodTypes.map((wood) => (
                    <div
                      key={wood.id}
                      className={`relative flex cursor-pointer rounded-lg border ${
                        formData.woodType === wood.id
                          ? "border-amber-600 bg-amber-50"
                          : "border-gray-300"
                      } p-4 shadow-sm focus:outline-none`}
                      onClick={() =>
                        setFormData({ ...formData, woodType: wood.id })
                      }
                    >
                      <div className="flex flex-1">
                        <div className="flex flex-col">
                          <span className="block text-sm font-medium text-gray-900">
                            {wood.name}
                          </span>
                          <span className="mt-1 flex items-center text-sm text-gray-500">
                            {wood.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="dimensions"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Dimensions
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="dimensions"
                    id="dimensions"
                    placeholder="e.g., 36″ × 72″ × 30″"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={formData.dimensions}
                    onChange={(e) =>
                      setFormData({ ...formData, dimensions: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="special-requests"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Special Requests
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="special-requests"
                    name="special-requests"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialRequests: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
