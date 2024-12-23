export default function Products() {
  const products = [
    {
      id: 1,
      name: "End Grain Walnut Board",
      description: "Premium end grain cutting board with juice groove",
      price: "$249.99",
      dimensions: '18" x 24" x 2"',
      image: "https://images.unsplash.com/photo-1632789395770-20e6f63be806",
    },
    {
      id: 2,
      name: "Maple Stripe Board",
      description: "Elegant maple and walnut striped cutting board",
      price: "$189.99",
      dimensions: '16" x 20" x 1.5"',
      image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f",
    },
    {
      id: 3,
      name: "Cherry Butcher Block",
      description: "Heavy-duty cherry butcher block with handles",
      price: "$299.99",
      dimensions: '24" x 24" x 3"',
      image: "https://images.unsplash.com/photo-1633789668813-a24e8c4f25ac",
    },
    {
      id: 4,
      name: "Live Edge Serving Board",
      description: "Natural edge maple serving and cutting board",
      price: "$159.99",
      dimensions: '14" x 22" x 1"',
      image: "https://images.unsplash.com/photo-1633789668002-aa0d596bc3bd",
    },
  ];

  const handleProductInquiry = (product) => {
    const emailBody = `
Hello!

I'm interested in the ${product.name}.

Product Details:
- Dimensions: ${product.dimensions}
- Price: ${product.price}

Could you please provide more information about availability and shipping?

Thank you!`.trim();

    window.location.href = `mailto:patnavarre@gmail.com?subject=Inquiry about ${
      product.name
    }&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Handcrafted Cutting Boards
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Each piece is carefully crafted to become a cherished part of your
            kitchen
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-h-3 aspect-w-4 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-amber-200">
                      {product.dimensions}
                    </p>
                    <p className="mt-2 text-white">{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-gray-500">{product.dimensions}</p>
                </div>
                <div className="text-lg font-semibold text-amber-600">
                  {product.price}
                </div>
              </div>
              <button
                onClick={() => handleProductInquiry(product)}
                className="mt-4 w-full bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Request Info</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
