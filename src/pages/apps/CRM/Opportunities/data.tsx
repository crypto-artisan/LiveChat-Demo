import image1 from "../../../../assets/images/companies/amazon.png";
import image2 from "../../../../assets/images/companies/apple.png";
import image3 from "../../../../assets/images/companies/google.png";
import image4 from "../../../../assets/images/companies/airbnb.png";
import image5 from "../../../../assets/images/companies/cisco.png";

interface CompanyInfoItems {
  id: number;
  logo: string;
  name: string;
  location: string;
  category: string;
  email: string;
  phone: string;
  status: string;
}

const companyInfo: CompanyInfoItems[] = [
  {
    id: 1,
    logo: image1,
    name: "Amazon Inc.",
    location: "Seattle, Washington",
    category: "Ecommerce",
    email: "collier@jourrapide.com",
    phone: "828-216-2190",
    status: "Hot",
  },
  {
    id: 2,
    logo: image2,
    name: "Apple Inc.",
    location: "Cupertino, California",
    category: "Ecommerce",
    email: "deanes@dayrep.com",
    phone: "077 6157 4248",
    status: "Cold",
  },
  {
    id: 3,
    logo: image3,
    name: "Google LLC",
    location: "Menlo Park, California",
    category: "Search engine",
    email: "nnac@hotmai.us",
    phone: "(216) 76 298 896",
    status: "In-progress",
  },
  {
    id: 4,
    logo: image4,
    name: "Airbnb Inc.",
    location: "San Francisco, California",
    category: "Real Estate",
    email: "austin@dayrep.com",
    phone: "(02) 75 150 655",
    status: "Lost",
  },
  {
    id: 5,
    logo: image5,
    name: "Cisco Systems",
    location: "San Jose, California",
    category: "Operating Systems",
    email: "annette@email.net",
    phone: "(+15) 73 483 758",
    status: "Won",
  },
];

export { companyInfo };
