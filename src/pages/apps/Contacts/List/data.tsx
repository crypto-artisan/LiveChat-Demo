import avatar1 from "../../../../assets/images/users/user-2.jpg";
import avatar2 from "../../../../assets/images/users/user-3.jpg";
import avatar3 from "../../../../assets/images/users/user-4.jpg";
import avatar4 from "../../../../assets/images/users/user-5.jpg";
import avatar5 from "../../../../assets/images/users/user-6.jpg";
import avatar6 from "../../../../assets/images/users/user-7.jpg";
import avatar7 from "../../../../assets/images/users/user-8.jpg";
import avatar8 from "../../../../assets/images/users/user-9.jpg";
import avatar9 from "../../../../assets/images/users/user-10.jpg";

export interface ContactsItems {
  id: number;
  name: string;
  avatar: string;
  position: string;
  website: string;
  posts: string;
  followers: string;
  followings: string;
}

const contacts: ContactsItems[] = [
  {
    id: 1,
    name: "Freddie J. Plourde",
    avatar: avatar2,
    position: "Founder",
    website: "websitename.com",
    posts: "$2563",
    followers: "$29.8k",
    followings: "1125",
  },
  {
    id: 2,
    name: "Christopher Gallardo",
    avatar: avatar3,
    position: "Webdesigner",
    website: "abcweb.com",
    posts: "$12.7k",
    followers: "$65.3k",
    followings: "2184",
  },
  {
    id: 3,
    name: "Joseph M. Rohr",
    avatar: avatar4,
    position: "Webdesigner",
    website: "mywebs.com",
    posts: "$1021",
    followers: "$25.6k",
    followings: "325",
  },
  {
    id: 4,
    name: "Mark K. Horne",
    avatar: avatar5,
    position: "Director",
    website: "profileq.com",
    posts: "$7845",
    followers: "$16.7k",
    followings: "5846",
  },
  {
    id: 5,
    name: "James M. Fonville",
    avatar: avatar6,
    position: "Manager",
    website: "coolweb.com",
    posts: "$4851",
    followers: "$10.2k",
    followings: "895",
  },
  {
    id: 6,
    name: "Jade M. Walker",
    avatar: avatar7,
    position: "Programmer",
    website: "supported.com",
    posts: "$4560",
    followers: "$15.3k",
    followings: "742",
  },
  {
    id: 7,
    name: "Marie E. Tate",
    avatar: avatar8,
    position: "Webdeveloper",
    website: "website.com",
    posts: "$3520",
    followers: "$4587",
    followings: "423",
  },
  {
    id: 8,
    name: "Elyse D. Davidson",
    avatar: avatar1,
    position: "Webdesigner",
    website: "dumosite.com",
    posts: "$7851",
    followers: "$16.8k",
    followings: "1036",
  },
  {
    id: 9,
    name: "Sarah E. Goin",
    avatar: avatar9,
    position: "Manager",
    website: "webion.com",
    posts: "$7421",
    followers: "$29.5k",
    followings: "11k",
  },
];

export { contacts };
