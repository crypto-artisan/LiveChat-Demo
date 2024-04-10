import img1 from "../../../../assets/images/users/user-9.jpg";
import img2 from "../../../../assets/images/users/user-2.jpg";

export interface TicketDetailsTypes {
  id: number;
  title: string;
  type: string;
  reported_by: {
    name: string;
    image: string;
  };
  assigned_to: {
    name: string;
    image: string;
  };
  created_on: {
    date: string;
    time: string;
  };
  updated_on: {
    date: string;
    time: string;
  };
  overview: string;
}

const ticketDetails: TicketDetailsTypes = {
  id: 1,
  title: "Payout not received since last 3 months",
  type: "Payments",
  reported_by: {
    name: "Jonathan Andrews",
    image: img1,
  },
  assigned_to: {
    name: "Thelma Fridley",
    image: img2,
  },
  created_on: {
    date: "10 Feb 2020",
    time: "1:37 PM",
  },
  updated_on: {
    date: "13 Feb 2020",
    time: "4:09 PM",
  },
  overview:
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.",
};

export { ticketDetails };
