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

  jobs: [
    {
      name: "Red Pants",
      category: "Pants",
      image: "/images/red-pants.jpg",
      price: 120,
      brand: "Calvin Klein",
      description: "Calvin Klein Red Pants",
    },

    {
      name: "Black T-Shirt",
      category: "T-Shirts",
      image: "/images/job-2.jpg",
      price: 59.99,
      brand: "Adidas",
      description: "Adidas Short Sleeve Black T-Shirt",
    },

    {
      name: "Puffer Coat",
      category: "Coats",
      image: "/images/job-3.jpg",
      price: 180.0,
      brand: "Tommy Hilfiger",
      numReviews: 7,
      description: "Multi-Color Coat",
    },

    {
      name: "Beige Pants",
      category: "Pants",
      image: "/images/job-1.jpg",
      price: 120,
      brand: "Calvin Klein",
      description: "Calvin Klein Beige Pants",
    },
  ],
};

export default data;
