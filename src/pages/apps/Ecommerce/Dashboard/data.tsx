import avatar1 from "../../../../assets/images/users/user-1.jpg";
import avatar2 from "../../../../assets/images/users/user-2.jpg";
import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../../assets/images/users/user-5.jpg";

import image1 from "../../../../assets/images/cards/visa.png";
import image2 from "../../../../assets/images/cards/master.png";
import image3 from "../../../../assets/images/cards/amazon.png";
import image4 from "../../../../assets/images/cards/american-express.png";
import image5 from "../../../../assets/images/cards/discover.png";

import product1 from "../../../../assets/images/products/product-1.png";
import product2 from "../../../../assets/images/products/product-2.png";
import product3 from "../../../../assets/images/products/product-3.png";
import product4 from "../../../../assets/images/products/product-4.png";
import product5 from "../../../../assets/images/products/product-5.png";

const transactions = [
  {
    id: 1,
    avatar: avatar2,
    name: "Imelda J. Stanberry",
    cardDetails: {
      image: image1,
      cardNum: "**** 3256",
    },
    date: "27.03.2018",
    amount: "$345.98",
    status: "Failed",
  },
  {
    id: 2,
    avatar: avatar3,
    name: "Francisca S. Lobb",
    cardDetails: {
      image: image2,
      cardNum: "**** 8451",
    },
    date: "28.03.2018",
    amount: "$1,250",
    status: "Paid",
  },
  {
    id: 3,
    avatar: avatar1,
    name: "James A. Wert",
    cardDetails: {
      image: image3,
      cardNum: "**** 2258",
    },
    date: "28.03.2018",
    amount: "$145",
    status: "Paid",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Dolores J. Pooley",
    cardDetails: {
      image: image4,
      cardNum: "**** 6950",
    },
    date: "29.03.2018",
    amount: "$2,005.89",
    status: "Failed",
  },
  {
    id: 5,
    avatar: avatar5,
    name: "Karen I. McCluskey",
    cardDetails: {
      image: image5,
      cardNum: "**** 0021",
    },
    date: "31.03.2018",
    amount: "$24.95",
    status: "Paid",
  },
];

const products = [
  {
    id: 1,
    image: product1,
    name: "Men's sport T-shirt",
    category: "Men Tshirts",
    addedDate: "27.03.2018",
    amount: "$345.98",
    status: "Active",
  },
  {
    id: 2,
    image: product2,
    name: "Women's Marron Tshirt",
    category: "Baby Tshirts",
    addedDate: "28.03.2018",
    amount: "$1,250",
    status: "Active",
  },
  {
    id: 3,
    image: product3,
    name: "Soft Green Tshirt",
    category: "Women Tshirts",
    addedDate: "28.03.2018",
    amount: "$145",
    status: "Deactive",
  },
  {
    id: 4,
    image: product4,
    name: "Jack & Jones Men's Jacket",
    category: "Men Jackets",
    addedDate: "29.03.2018",
    amount: "$2,005.89",
    status: "Active",
  },

  {
    id: 5,
    image: product5,
    name: "Jack & Jones T-shirt (Blue)",
    category: "Casual Tshirts",
    addedDate: "31.03.2018",
    amount: "$24.95",
    status: "Active",
  },
];

export { transactions, products };
