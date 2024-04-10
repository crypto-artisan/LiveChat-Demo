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
  date: string;
  status: string;
}

const companyInfo: CompanyInfoItems[] = [
  {
    id: 1,
    logo: image1,
    name: "Amazon Inc.",
    location: "Seattle, Washington",
    category: "Ecommerce",
    date: "October 22, 2018",
    status: "Hot",
  },
  {
    id: 2,
    logo: image2,
    name: "Apple Inc.",
    location: "Cupertino, California",
    category: "Ecommerce",
    date: "September 08, 2018",
    status: "Cold",
  },
  {
    id: 3,
    logo: image3,
    name: "Google LLC",
    location: "Menlo Park, California",
    category: "Search engine",
    date: "October 10, 2018",
    status: "In-progress",
  },
  {
    id: 4,
    logo: image4,
    name: "Airbnb Inc.",
    location: "San Francisco, California",
    category: "Real Estate",
    date: "August 18, 2018",
    status: "Lost",
  },
  {
    id: 5,
    logo: image5,
    name: "Cisco Systems",
    location: "San Jose, California",
    category: "Operating Systems",
    date: "March 28, 2018",
    status: "Won",
  },
];

export { companyInfo };
