
import React from "react";
import { motion } from "framer-motion";

const ProductImages = ({ images, productName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={images[0]}
          alt={productName}
          className="w-full h-auto object-cover aspect-square"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.slice(1).map((image, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`${productName} - изображение ${index + 2}`}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductImages;
