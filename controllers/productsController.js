const { application } = require("express");

const products = [
  {
    id: 1,
    category: "PALETA",
    brand: "ADIDAS",
    model: "MatchLigth",
    price: 35000,
    image: "/images/Paleta_AdidasMatchLigth31.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 2,
    category: "PALETA",
    brand: "KELME",
    model: "Lycan",
    price: 25000,
    image: "/images/Paleta_KelmeLycan.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 3,
    category: "PALETA",
    brand: "KELME",
    model: "Falcon",
    price: 22500,
    image: "/images/Paleta_KelmeFalcon.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 4,
    category: "ACCESORIOS",
    brand: "Softee",
    model: "Cubre Grip Confort",
    price: 650,
    image: "/images/Accesorio_CubreGripSofteeConfortPerforadox60.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 5,
    category: "ACCESORIOS",
    brand: "ADIDAS",
    model: "Grip Paddle Performance Blanco",
    price: 450,
    image: "/images/Accesorio_GripAdidasPadelPerformance1blanco.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 6,
    category: "ACCESORIOS",
    brand: "ADIDAS",
    model: "Grip Paddle Performance Rojo",
    price: 500,
    image: "/images/Accesorio_GripAdidasPadelPerformance1rojo.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 7,
    category: "BOLSOS-PALETERO",
    brand: "ADIDAS",
    model: "Multigame Lite White",
    price: 29000,
    image: "/images/Bolsos_PaleteroAdidasMultigameLiteWhite.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 8,
    category: "BOLSOS-PALETERO",
    brand: "ADIDAS",
    model: "Weekend White",
    price: 22300,
    image: "/images/Bolsos_PaleteroAdidasWeekendWhite20.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    id: 9,
    category: "BOLSOS-PALETERO",
    brand: "ADIDAS",
    model: "Weekend Green",
    price: 25000,
    image: "/images/Bolsos_PaleteroAdidasWeekendVerde.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
];

module.exports = {
  cart: (req, res) => {
    res.render("products/productCart", { styles: "productCart" });
  },
  detail: (req, res) => {
    res.render("./products/productDetail", {
      styles: "productDetail",
      products: products,
    });
  },
  productFilter: (req, res) => {
    const clasificacion = req.params.category;
    const nuevaLista = products.filter(
      (element) => element.category == clasificacion
    );

    res.render("products/productDetail", {
      styles: "productDetail",
      products: nuevaLista,
    });
  },
  productDescription: (req, res) => {
    const id = req.params.id;
    const product = products.find(element => element.id == id);

    res.render("products/oneProduct", {
      styles: "oneProduct",
      product: product,
    });
  },
  create: (req, res) => {
    res.render("products/create", { styles: "register" });
  },
  edit: (req, res) => {
    res.render("products/edit", { styles: "register" });
  },
};