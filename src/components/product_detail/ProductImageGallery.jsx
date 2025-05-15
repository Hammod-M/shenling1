
import React from "react";
import { motion } from "framer-motion";

const ProductImageGallery = ({ images, productName }) => {
  const [mainImage, setMainImage] = React.useState(images[0]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-inner">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-auto object-cover aspect-square transition-all duration-300 ease-in-out"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${mainImage === image ? 'border-primary shadow-md' : 'border-transparent hover:border-gray-300'}`}
              onClick={() => setMainImage(image)}
            >
              <img
                src={image}
                alt={`${productName} - изображение ${index + 1}`}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProductImageGallery;
