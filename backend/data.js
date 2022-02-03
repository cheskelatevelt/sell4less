import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Cheskel",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },

    {
      name: "iPro",
      email: "iprodeveloping@gmail.com",
      password: bcrypt.hashSync("YourChaver1", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Red Pants",
      category: "Pants",
      image: "/images/red-pants.jpg",
      price: 120,
      countInStock: 7,
      brand: "Calvin Klein",
      rating: 5,
      numReviews: 10,
      description: "Calvin Klein Red Pants",
    },

    {
      name: "Black T-Shirt",
      category: "T-Shirts",
      image: "/images/product-2.jpg",
      price: 59.99,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 11,
      description: "Adidas Short Sleeve Black T-Shirt",
    },

    {
      name: "Puffer Coat",
      category: "Coats",
      image: "/images/product-3.jpg",
      price: 180.0,
      countInStock: 2,
      brand: "Tommy Hilfiger",
      rating: 3.5,
      numReviews: 7,
      description: "Multi-Color Coat",
    },

    {
      name: "Beige Pants",
      category: "Pants",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 7,
      brand: "Calvin Klein",
      rating: 5,
      numReviews: 10,
      description: "Calvin Klein Beige Pants",
    },
  ],
};

export default data;
