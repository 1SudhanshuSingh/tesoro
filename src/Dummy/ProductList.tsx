interface ProductCard {
  source: string[];
  alt: string;
  title: string;
  price: number;
  colors: string[];
  sizes: string[];
}

export const DummyProuductList: ProductCard[] = [
  {
    source: [
      "./products/p1.jpg",
      "./products/p2.jpg",
      "./products/p3.jpg",
      "./products/p4.jpg",
    ],
    alt: "Product 1",
    title: "Product 1",
    price: 4999.0,
    colors: ["#ff0000", "#ffa07a", "#f08080", "#fa8072", "#a32638", "#be0032"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    source: [
      "./products/p1.jpg",
      "./products/p2.jpg",
      "./products/p3.jpg",
      "./products/p4.jpg",
    ],
    alt: "Product 2",
    title: "Product 2",
    price: 3999.0,
    colors: ["#b31b1b", "#a32638", "#be0032", "#ff0000"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    source: [
      "./products/p1.jpg",
      "./products/p2.jpg",
      "./products/p3.jpg",
      "./products/p4.jpg",
    ],
    alt: "Product 3",
    title: "Product 3",
    price: 6999.0,
    colors: ["#008080", "#40e0d0"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    source: [
      "./products/p1.jpg",
      "./products/p2.jpg",
      "./products/p3.jpg",
      "./products/p4.jpg",
    ],
    alt: "Product 4",
    title: "Product 4",
    price: 2999.0,
    colors: ["#00ffff", "#b0e0e6"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    source: [
      "./products/p1.jpg",
      "./products/p2.jpg",
      "./products/p3.jpg",
      "./products/p4.jpg",
    ],
    alt: "Product 5",
    title: "Product 5",
    price: 7999.0,
    colors: ["#800080", "#7b68ee "],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    source: [
      "./products/p1.jpg",
      "./products/p2.jpg",
      "./products/p3.jpg",
      "./products/p4.jpg",
    ],
    alt: "Product 6",
    title: "Product 6",
    price: 8999.0,
    colors: ["#ffb6c1"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export const DummyProductCartList: ProductCard[] = [
  {
    source: ["./products/p1.jpg"],
    alt: "Product 1",
    title: "Product 1",
    price: 4999.0,
    colors: ["#ff0000"],
    sizes: ["S"],
  },
  {
    source: ["./products/p3.jpg"],
    alt: "Product 2",
    title: "Product 2",
    price: 3999.0,
    colors: ["#be0032"],
    sizes: ["XXL"],
  },
  {
    source: ["./products/p2.jpg"],
    alt: "Product 3",
    title: "Product 3",
    price: 6999.0,
    colors: ["#40e0d0"],
    sizes: ["XL"],
  },
];
