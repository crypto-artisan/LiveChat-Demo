import image1 from "../../../assets/images/companies/amazon.png";
import image2 from "../../../assets/images/companies/apple.png";
import image3 from "../../../assets/images/companies/google.png";
import image4 from "../../../assets/images/companies/airbnb.png";
import image5 from "../../../assets/images/companies/facebook.png";
import image6 from "../../../assets/images/companies/cisco.png";

export interface Company {
  id: number;
  name: string;
  logo: string;
  location: string;
  description: string;
  revenue: string;
  noOfEmployees: string;
}

const companyInfo: Company[] = [
  {
    id: 1,
    logo: image1,
    name: "Amazon Inc.",
    location: "Seattle, Washington",
    description:
      "Amazon.com, Inc., doing business as Amazon, is an American electronic commerce and cloud computing company based in Seattle..",
    revenue: "17,786 cr",
    noOfEmployees: "566k",
  },
  {
    id: 2,
    logo: image2,
    name: "Apple Inc.",
    location: "Cupertino, California",
    description:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells..",
    revenue: "22,923.4 cr",
    noOfEmployees: "47k",
  },
  {
    id: 3,
    logo: image3,
    name: "Google LLC",
    location: "Menlo Park, California",
    description:
      "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include..",
    revenue: "110 bn",
    noOfEmployees: "72k",
  },
  {
    id: 4,
    logo: image4,
    name: "Airbnb Inc.",
    location: "San Francisco, California",
    description:
      "A‌i‌r‌b‌n‌b‌, ‌ ‌I‌n‌c‌.‌ is a company based in San Francisco that operates an online marketplace and hospitality service for people to lease or rent..",
    revenue: "260 cr",
    noOfEmployees: "3.1k",
  },
  {
    id: 5,
    logo: image5,
    name: "Facebook Inc.",
    location: "Cambridge, Massachusetts",
    description:
      "Facebook is an American online social media and social networking service company based in Menlo Park, California..",
    revenue: "9.16 bn",
    noOfEmployees: "25.1k",
  },
  {
    id: 6,
    logo: image6,
    name: "Cisco Systems",
    location: "San Jose, California",
    description:
      "Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California..",
    revenue: "4,800.5 cr",
    noOfEmployees: "73.4k",
  },
];

export { companyInfo };
