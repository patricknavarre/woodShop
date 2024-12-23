import { useState, useEffect } from "react";
import shopifyClient from "../utils/shopify";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await shopifyClient.product.fetchAll();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Collection
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.images[0].src}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <button
                      onClick={() => {
                        // Create checkout
                        shopifyClient.checkout.create().then((checkout) => {
                          // Add item to cart
                          shopifyClient.checkout
                            .addLineItems(checkout.id, [
                              {
                                variantId: product.variants[0].id,
                                quantity: 1,
                              },
                            ])
                            .then((checkout) => {
                              // Redirect to checkout
                              window.location.href = checkout.webUrl;
                            });
                        });
                      }}
                    >
                      {product.title}
                    </button>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.vendor}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.variants[0].price}
                </p>
              </div>
              <button
                className="mt-4 w-full bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors"
                onClick={() => {
                  shopifyClient.checkout.create().then((checkout) => {
                    shopifyClient.checkout
                      .addLineItems(checkout.id, [
                        {
                          variantId: product.variants[0].id,
                          quantity: 1,
                        },
                      ])
                      .then((checkout) => {
                        window.location.href = checkout.webUrl;
                      });
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
