import user1 from "../../../../assets/images/users/user-10.jpg";
import user2 from "../../../../assets/images/users/user-2.jpg";
import user3 from "../../../../assets/images/users/user-8.jpg";
import user4 from "../../../../assets/images/users/user-3.jpg";
import user5 from "../../../../assets/images/users/user-9.jpg";
import user6 from "../../../../assets/images/users/user-1.jpg";

export interface TicketDetailsItems {
  id: string;
  requested_by: {
    name: string;
    image: string;
  };
  subject: string;
  assignee: string;
  priority: string;
  status: string;
  created_date: string;
  due_date: string;
}

const ticketDetails: TicketDetailsItems[] = [
  {
    id: "#1256",
    requested_by: {
      name: "George A. Llanes",
      image: user6,
    },
    subject: "Support for theme",
    assignee: user1,
    priority: "Low",
    status: "Open",
    created_date: "2017-04-28",
    due_date: "2017-04-28",
  },
  {
    id: "#2542",
    requested_by: {
      name: "Jose D. Delacruz",
      image: user5,
    },
    subject: "New submission on your website",
    assignee: user2,
    priority: "Medium",
    status: "Closed",
    created_date: "2008-04-25",
    due_date: "2008-04-25",
  },
  {
    id: "#320",
    requested_by: {
      name: "Phyllis K. Maciel",
      image: user4,
    },
    subject: "Verify your new email address!",
    assignee: user3,
    priority: "High",
    status: "Open",
    created_date: "2017-04-20",
    due_date: "2017-04-25",
  },
  {
    id: "#1254",
    requested_by: {
      name: "Margeret V. Ligon",
      image: user3,
    },
    subject: "Your application has been received!",
    assignee: user4,
    priority: "High",
    status: "Closed",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#1020",
    requested_by: {
      name: "Erwin E. Brown",
      image: user2,
    },
    subject: "A new rating has been received",
    assignee: user5,
    priority: "Medium",
    status: "Closed",
    created_date: "2013-08-11",
    due_date: "2013-08-30",
  },
  {
    id: "#854",
    requested_by: {
      name: "William L. Trent",
      image: user1,
    },
    subject: "Your Profile has been accepted",
    assignee: user6,
    priority: "High",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#9501",
    requested_by: {
      name: "Amy R. Barnaby",
      image: user6,
    },
    subject: "Homeworth for your property increased",
    assignee: user1,
    priority: "Low",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#3652",
    requested_by: {
      name: "Jessica T. Phillips",
      image: user5,
    },
    subject: "Item Support Message sent",
    assignee: user2,
    priority: "Medium",
    status: "Closed",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#9852",
    requested_by: {
      name: "Debra J. Wilson",
      image: user4,
    },
    subject: "Your item has been updated!",
    assignee: user3,
    priority: "High",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#3652",
    requested_by: {
      name: "Luke J. Sain",
      image: user3,
    },
    subject: "Your password has been reset",
    assignee: user4,
    priority: "Low",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#1352",
    requested_by: {
      name: "Karen R. Doyle",
      image: user2,
    },
    subject: "Question regarding your Bootstrap Theme",
    assignee: user5,
    priority: "High",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#3562",
    requested_by: {
      name: "Freddie J. Plourde",
      image: user1,
    },
    subject: "Security alert for my account",
    assignee: user6,
    priority: "Low",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#3658",
    requested_by: {
      name: "Darrell J. Cook",
      image: user6,
    },
    subject: "Christopher S. Ahmad",
    assignee: user1,
    priority: "Medium",
    status: "Closed",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#2251",
    requested_by: {
      name: "Mark C. Diaz",
      image: user5,
    },
    subject: "Verify your new email address!",
    assignee: user2,
    priority: "High",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
  {
    id: "#3654",
    requested_by: {
      name: "Robert K. Joseph",
      image: user4,
    },
    subject: "Support for theme",
    assignee: user3,
    priority: "Low",
    status: "Open",
    created_date: "2017-01-04",
    due_date: "21/05/2017",
  },
];

export { ticketDetails };
