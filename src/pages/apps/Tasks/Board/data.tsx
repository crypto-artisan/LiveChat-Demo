import avatar1 from "../../../../assets/images/users/user-1.jpg";
import avatar2 from "../../../../assets/images/users/user-2.jpg";
import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar5 from "../../../../assets/images/users/user-5.jpg";
import avatar6 from "../../../../assets/images/users/user-6.jpg";
import avatar7 from "../../../../assets/images/users/user-7.jpg";
import avatar8 from "../../../../assets/images/users/user-8.jpg";
import avatar9 from "../../../../assets/images/users/user-9.jpg";
import avatar10 from "../../../../assets/images/users/user-10.jpg";

export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  userAvatar: string[];
  dueDate: string;
}

const tasks: TaskTypes[] = [
  {
    id: 1,
    title: "Ubold v3.0 - Redesign",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    status: "Upcoming",
    priority: "High",
    userAvatar: [avatar1, avatar3],
    dueDate: "Jul 18, 2019",
  },
  {
    id: 2,
    title: "Minton v3.0 - Redesign",
    description: "Many desktop publishing packages and web page.",
    status: "Inprogress",
    priority: "Low",
    userAvatar: [avatar2],
    dueDate: "Jul 20, 2019",
  },
  {
    id: 3,
    title: "Ubold v2.1 - Angular and Django",
    description: "If you are going to use a passage of Lorem Ipsum.",
    status: "Completed",
    priority: "Low",
    userAvatar: [avatar5],
    dueDate: "Jul 21, 2019",
  },
  {
    id: 4,
    title: "Ubold v2.1 - React, Webpack",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC.",
    status: "Completed",
    priority: "High",
    userAvatar: [avatar6, avatar7],
    dueDate: "Jul 22, 2019",
  },
  {
    id: 5,
    title: "Ubold 2.2 - Vue.Js and Laravel",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    status: "Upcoming",
    priority: "Low",
    userAvatar: [avatar8],
    dueDate: "Jul 18, 2019",
  },
  {
    id: 6,
    title: "Ubold 2.3 - Rails, NodeJs, Mean",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
    status: "Upcoming",
    priority: "Medium",
    userAvatar: [avatar9, avatar10],
    dueDate: "Jul 21, 2019",
  },
  {
    id: 7,
    title: "Ubold - Landing page and UI Kit",
    description: "Your awesome text goes here. Your awesome text goes here.",
    status: "Completed",
    priority: "Medium",
    userAvatar: [avatar1, avatar3],
    dueDate: "Jul 10, 2019",
  },
  {
    id: 8,
    title: "Ubold 3.0 - Scoping",
    description:
      "A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    status: "Inprogress",
    priority: "High",
    userAvatar: [avatar2],
    dueDate: "Jul 24, 2019",
  },
  {
    id: 9,
    title: "Shreyu 1.0 - Angular",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    status: "Upcoming",
    priority: "Low",
    userAvatar: [avatar2],
    dueDate: "Aug 18, 2019",
  },
  {
    id: 10,
    title: "Shreyu 1.0 - React",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
    status: "Inprogress",
    priority: "High",
    userAvatar: [avatar8],
    dueDate: "Aug 18, 2019",
  },
  {
    id: 11,
    title: "Minton 1.0 - Angular",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    status: "Completed",
    priority: "Low",
    userAvatar: [avatar2],
    dueDate: "Aug 18, 2019",
  },
];

export { tasks };
