import React from 'react';

// Import your product image (since you only have one cup image)
import cup from '../assets/images/cup.png';

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: cup, // Using cup image for all products
      discount: "-30%",
      isNew: false
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: null,
      image: cup,
      discount: "-30%",
      isNew: false
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      image: cup,
      discount: "-50%",
      isNew: false
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: null,
      image: cup,
      discount: "-33%",
      isNew: true
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      originalPrice: null,
      image: cup,
      discount: null,
      isNew: false
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      originalPrice: null,
      image: cup,
      discount: null,
      isNew: true
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      image: cup,
      discount: "-50%",
      isNew: false
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      originalPrice: null,
      image: cup,
      discount: null,
      isNew: true
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="group relative bg-gray-50 rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Badges */}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            {product.discount}
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
          <button className="bg-white text-[#B88D3E] px-8 py-3 font-semibold mb-4 hover:bg-gray-100 transition-colors">
            Add to cart
          </button>
          
          <div className="flex items-center space-x-4 text-white">
            <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
              <span className="text-sm">📤 Share</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
              <span className="text-sm">📊 Compare</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
              <span className="text-sm">❤️ Like</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Our Products
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <button className="border-2 border-[#B88D3E] text-[#B88D3E] px-12 py-3 font-semibold hover:bg-[#B88D3E] hover:text-white transition-colors duration-300">
          Show More
        </button>
      </div>
    </section>
  );
};

export default OurProducts;

// import React from 'react';
// import cup from '../assets/images/cup.png';
// // import { useCart } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';

// const OurProducts = () => {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const products = [
//     { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: 2500000, originalPrice: 3500000, image: cup, discount: "-30%", isNew: false },
//     { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: 2500000, originalPrice: null, image: cup, discount: "-30%", isNew: false },
//     { id: 3, name: "Lolito", description: "Luxury big sofa", price: 7000000, originalPrice: 14000000, image: cup, discount: "-50%", isNew: false },
//     { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: 500000, originalPrice: null, image: cup, discount: "-33%", isNew: true },
//     // ... more products
//   ];

//   const ProductCard = ({ product }) => {
//     const handleAdd = () => {
//       addToCart(product);
//       navigate("/cart");
//     };

//     return (
//       <div className="group relative bg-gray-50 rounded-lg overflow-hidden">
//         {/* Image */}
//         <div className="relative h-80 overflow-hidden">
//           <img src={product.image} alt={product.name} className="w-full h-full object-cover" />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
//             <button
//               onClick={handleAdd}
//               className="bg-white text-[#B88D3E] px-8 py-3 font-semibold mb-4"
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>

//         {/* Info */}
//         <div className="p-4">
//           <h3 className="text-xl font-semibold">{product.name}</h3>
//           <p className="text-gray-600 text-sm">{product.description}</p>
//           <div className="flex items-center space-x-2">
//             <span className="text-lg font-semibold">Rp {product.price.toLocaleString()}</span>
//             {product.originalPrice && (
//               <span className="text-sm text-gray-500 line-through">Rp {product.originalPrice.toLocaleString()}</span>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="py-16 px-6 lg:px-16 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProducts;
