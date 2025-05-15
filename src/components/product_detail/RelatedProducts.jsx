
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RelatedProducts = ({ products, allProductsData }) => {
  if (!products || products.length === 0) {
    return null;
  }

  const relatedProductDetails = products
    .map(id => allProductsData.find(p => p.id === String(id)))
    .filter(p => p); // Filter out undefined if any product ID not found

  if (relatedProductDetails.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Сопутствующие товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProductDetails.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="product-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 truncate">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
              <Link to={`/products/${product.category}/${product.id}`}>
                <Button variant="outline" size="sm" className="w-full text-primary border-primary hover:bg-primary/5">
                  Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
