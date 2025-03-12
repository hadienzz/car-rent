import koenigsegg from "../../public/koenigsegg.png";
import nissan from "../../public/nissan.png";
import rolls from "../../public/rolls.png";

export const CARS = [
  {
    types: "Popular Car",
    car: [
      {
        name: "Koenigsegg",
        type: "Sport",
        image: koenigsegg.src,
        tank: "90L",
        transmision: "Manual",
        amount: "2 People",
        price: "99",
      },
      {
        name: "Nissan GT-R",
        type: "Sport",
        image: nissan.src,
        tank: "80L",
        transmision: "Manual",
        amount: "2 People",
        price: "80",
      },
      {
        name: "Rolls - Royce",
        type: "Sedan",
        image: rolls.src,
        tank: "70L",
        transmision: "Manual",
        amount: "2 People",
        price: "96",
      },
      {
        name: "Nissan GT-R",
        type: "Sport",
        image: nissan.src,
        tank: "80L",
        transmision: "Manual",
        amount: "2 People",
        price: "80",
      },
    ],
  },
];
