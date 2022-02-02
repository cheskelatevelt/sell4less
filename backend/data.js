import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Cheskel",
      email: "cheskel2562@gmail.com",
      password: bcrypt.hashSync("YourChaver", 8),
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
      _id: "1",
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

    {
      _id: "2",
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
      _id: "3",
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
      _id: "4",
      name: "Beige Pants",
      category: "Pants",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 20,
      brand: "Calvin Klein",
      rating: 4.5,
      numReviews: 1,
      description: "Calvin Klein Beige Pants",
    },

    {
      _id: "5",
      name: "Beige Pants",
      category: "Pants",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 0,
      brand: "Calvin Klein",
      rating: 2,
      numReviews: 94,
      description: "Calvin Klein Beige Pants",
    },

    {
      _id: "6",
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

    {
      _id: "7",
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
