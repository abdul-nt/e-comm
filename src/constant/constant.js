import christmas1 from "../assets/christmas1.webp";
import christmas2 from "../assets/christmas2.webp";
import christmas3 from "../assets/christmas3.webp";
import christmas4 from "../assets/christmas4.webp";
import newyear1 from "../assets/newyear1.webp";
import newyear2 from "../assets/newyear2.webp";
import newyear3 from "../assets/newyear3.webp";
import newyear4 from "../assets/newyear4.webp";
import married1 from "../assets/married1.webp";
import married2 from "../assets/married2.webp";

export const colors = {
  primaryColor: "#ffa500",
  background: "#fff5f3",
  white: "#ffffff",
  black: "#000000",
  grey: "#6c6c6c",
};

export const quantityRange = {
  min: 1,
  max: 10,
};

export const bannerItems = [
  {
    Name: "Christmas Cards",
    Caption: "Get The Full Customizable Christmas Crads!",
    contentPosition: "left",
    Items: [
      {
        Name: "Christmas Card 1",
        Image: christmas1,
      },
      {
        Name: "Christmas Card 2",
        Image: christmas2,
      },
    ],
  },

  {
    Name: "New Year Cards",
    Caption: "Get Full Newly Added New Year Cards",
    contentPosition: "middle",
    Items: [
      {
        Name: "New Year Card 1",
        Image: newyear1,
      },
      {
        Name: "New Year Card 2",
        Image: newyear2,
      },
    ],
  },
  {
    Name: "Newly Married Cards",
    Caption: "Congrats with Our Newly Added Maried Card Design",
    contentPosition: "right",
    Items: [
      {
        Name: "Married Card 1",
        Image: married1,
      },
      {
        Name: "Married Card 2",
        Image: married2,
      },
    ],
  },
];

export const products = [
  {
    id: 1,
    name: "Christmas Card 1",
    price: 129.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: christmas1,
    quantity: 0,
  },
  {
    id: 2,
    name: "Christmas Card 2",
    price: 199,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: christmas2,
    quantity: 0,
  },
  {
    id: 3,
    name: "Newly Married Card 1",
    price: 189,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: married1,
    quantity: 0,
  },
  {
    id: 4,
    name: "Newly Married Card 2",
    price: 128,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: married2,
    quantity: 0,
  },
  {
    id: 5,
    name: "New Year Card 1",
    price: 399,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: newyear1,
    quantity: 0,
  },
  {
    id: 6,
    name: "New Year Card 2",
    price: 689,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: newyear2,
    quantity: 0,
  },
  {
    id: 7,
    name: "Christmas Card 3",
    price: 189,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: christmas3,
    quantity: 0,
  },
  {
    id: 8,
    name: "Christmas Card 4",
    price: 128,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: christmas4,
    quantity: 0,
  },
  {
    id: 9,
    name: "New Year Card 3",
    price: 399,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: newyear3,
    quantity: 0,
  },
  {
    id: 10,
    name: "New Year Card 4",
    price: 689,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: newyear4,
    quantity: 0,
  },
];
