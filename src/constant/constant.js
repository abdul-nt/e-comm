import christmas1 from "../assets/christmas1.webp";
import christmas2 from "../assets/christmas2.webp";
import newyear1 from "../assets/newyear1.webp";
import newyear2 from "../assets/newyear2.webp";
import married1 from "../assets/married1.webp";
import married2 from "../assets/married2.webp";

export const colors = {
  primaryColor: "#ffa500",
  background: "#fff5f3",
  white: "#ffffff",
  black: "#000000",
  grey: "#6c6c6c",
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
  },
  {
    id: 2,
    name: "Christmas Card 2",
    price: 199.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: christmas2,
  },
  {
    id: 3,
    name: "Newly Married Card 1", 
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: married1,
  },
  {
    id: 4,
    name: "Newly Married Card 2",
    price: 129.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: married2,
  },
  {
    id: 5,
    name: "New Year Card 1",
    price: 399.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: newyear1,
  },
  {
    id: 6,
    name: "New Year Card 2",
    price: 689.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: newyear2,
  },
];
