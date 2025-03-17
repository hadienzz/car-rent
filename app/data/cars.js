import koenigsegg from "../../public/koenigsegg.png";
import nissan from "../../public/nissan.png";
import rolls from "../../public/rolls.png";
import rush from "../../public/rush.png";
import crv from "../../public/crv.png";
import terios from "../../public/terios.png";

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
        id: "pc1",
      },
      {
        name: "Nissan GT-R",
        type: "Sport",
        image: nissan.src,
        tank: "80L",
        transmision: "Manual",
        amount: "2 People",
        price: "80",
        id: "pc2",
      },
      {
        name: "Rolls - Royce",
        type: "Sedan",
        image: rolls.src,
        tank: "70L",
        transmision: "Manual",
        amount: "2 People",
        price: "96",
        id: "pc3",
      },
      {
        name: "Nissan GT-R",
        type: "Sport",
        image: nissan.src,
        tank: "80L",
        transmision: "Manual",
        amount: "2 People",
        price: "80",
        id: "pc4",
      },
    ],
  },
  {
    types: "Recommendation Car",
    car: [
      {
        name: "All New Rush",
        type: "SUV",
        image: rush.src,
        tank: "70L",
        transmision: "Manual",
        amount: "6 People",
        price: "72",
        id: "rc1",
      },
      {
        name: "CR - V",
        type: "SUV",
        image: crv.src,
        tank: "80 L",
        transmision: "Manual",
        amount: "6 People",
        price: "80",
        id: "rc2",
      },
      {
        name: "All New Terios",
        type: "SUV",
        image: terios.src,
        tank: "90L",
        transmision: "Manual",
        amount: "6 People",
        price: "74",
        id: "rc3",
      },
      {
        name: "CR - V",
        type: "SUV",
        image: rush.src,
        tank: "80L",
        transmision: "Manual",
        amount: "6 People",
        price: "80",
        id: "rc4",
      },
    ],
  },
];
