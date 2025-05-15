
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products/${category.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="category-card bg-white rounded-lg overflow-hidden shadow-md"
      >
        <div className="h-40 overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
