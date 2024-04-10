import avatar1 from "../../assets/images/users/user-10.jpg";
import avatar2 from "../../assets/images/users/user-1.jpg";
import avatar3 from "../../assets/images/users/user-9.jpg";
import avatar4 from "../../assets/images/users/user-2.jpg";
import avatar5 from "../../assets/images/users/user-4.jpg";
import avatar6 from "../../assets/images/users/user-5.jpg";
import avatar7 from "../../assets/images/users/user-6.jpg";
import avatar8 from "../../assets/images/users/user-7.jpg";
import avatar9 from "../../assets/images/users/user-8.jpg";

export interface TasksItemTypes {
  id: number;
  task: string;
  progress: number;
  variant: string;
  stage: string;
}

export interface ChatItemTypes {
  id: number;
  avatar: string;
  userName: string;
  message: string;
  userStatus: string;
  group: string;
}

const tasks: TasksItemTypes[] = [
  {
    id: 1,
    task: "App Development",
    progress: 75,
    variant: "success",
    stage: "working",
  },
  {
    id: 2,
    task: "Database Repair",
    progress: 37,
    variant: "info",
    stage: "working",
  },
  {
    id: 3,
    task: "Backup Create",
    progress: 52,
    variant: "warning",
    stage: "working",
  },
  {
    id: 4,
    task: "Sales Reporting",
    progress: 12,
    variant: "danger",
    stage: "upcoming",
  },
  {
    id: 5,
    task: "Redesign Website",
    progress: 67,
    variant: "primary",
    stage: "upcoming",
  },
  {
    id: 6,
    task: "New Admin Design",
    progress: 84,
    variant: "success",
    stage: "upcoming",
  },
];

const chats: ChatItemTypes[] = [
  {
    id: 1,
    avatar: avatar1,
    userName: "Andrew Mackie",
    message: "It will seem like simplified English.",
    userStatus: "online",
    group: "favourites",
  },
  {
    id: 2,
    avatar: avatar2,
    userName: "Rory Dalyell",
    message: "To an English person, it will seem like simplified",
    userStatus: "away",
    group: "favourites",
  },
  {
    id: 3,
    avatar: avatar3,
    userName: "Jaxon Dunhill",
    message: "To achieve this, it would be necessary.",
    userStatus: "busy",
    group: "favourites",
  },
  {
    id: 4,
    avatar: avatar4,
    userName: "Jackson Therry",
    message: "Everyone realizes why a new common language.",
    userStatus: "online",
    group: "other",
  },
  {
    id: 5,
    avatar: avatar5,
    userName: "Charles Deakin",
    message: "The languages only differ in their grammar.",
    userStatus: "away",
    group: "other",
  },
  {
    id: 6,
    avatar: avatar6,
    userName: "Ryan Salting",
    message: "If several languages coalesce the grammar of the resulting.",
    userStatus: "online",
    group: "other",
  },
  {
    id: 7,
    avatar: avatar7,
    userName: "Sean Howse",
    message: "It will seem like simplified English.",
    userStatus: "online",
    group: "other",
  },
  {
    id: 8,
    avatar: avatar8,
    userName: "Dean Coward",
    message: "The new common language will be more simple.",
    userStatus: "busy",
    group: "other",
  },
  {
    id: 9,
    avatar: avatar9,
    userName: "Hayley East",
    message: "One could refuse to pay expensive translators.",
    userStatus: "away",
    group: "other",
  },
];

export { tasks, chats };
