import avatar3 from "../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../assets/images/users/user-6.jpg";

import img1 from "../../../assets/images/small/img-4.jpg";
import img2 from "../../../assets/images/small/img-1.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";

export interface User {
  id?: number;
  name?: string;
  avatar?: string;
  status?: string;
}

export interface Comment {
  id?: number;
  author?: User;
  content?: string;
  isLiked?: boolean;
  postedOn?: string;
  replies?: Comment[];
}

export interface Posts {
  id?: number;
  title?: string;
  author?: User;
  postedOn?: string;
  scope?: string;
  content?: string;
  totalLikes?: string;
  totalComments?: string;
  totalView?: string;
  isLiked?: boolean;
  comments?: Comment[];
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      id: 4,
      name: "Jeremy Tomlinson",
      avatar: avatar3,
    },
    postedOn: "about 2 minuts ago",
    scope: "Public",
    content:
      '<p>Story based around the idea of time lapse, animation to post soon!</p><div class="row"><div class="col-sm-8">' +
      '<img src="' +
      img1 +
      '" alt="post-img" class="rounded me-1 mb-3 mb-sm-0 img-fluid" /></div><div class="col">' +
      '<img src="' +
      img2 +
      '" alt="post-img" class="rounded me-1 img-fluid mb-3" />' +
      '<img src="' +
      img3 +
      '" alt="post-img" class="rounded me-1 img-fluid" /></div></div>',
    totalLikes: "1.2k",
    totalComments: "148",
    isLiked: true,
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Thelma Fridley",
      avatar: avatar4,
    },
    postedOn: "about 1 hour ago",
    scope: "Public",
    content:
      '<div class="font-16 text-center fst-italic text-dark"><i class="mdi mdi-format-quote-open font-20"></i> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</div>',
    totalLikes: "2k",
    totalComments: "200",
    isLiked: false,
    comments: [
      {
        id: 1,
        content: "Nice work, makes me think of The Money Pit.",
        postedOn: "3 hours ago",
        author: {
          id: 2,
          name: "Jeremy Tomlinson ",
          avatar: avatar3,
        },
        isLiked: true,
        replies: [
          {
            id: 3,
            content:
              "i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.",
            postedOn: "5 hours ago",
            author: {
              id: 3,
              name: "Kathleen Thomas",
              avatar: avatar4,
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    author: {
      id: 4,
      name: "Jonathan Tiner",
      avatar: avatar5,
    },
    postedOn: "15 hours ago",
    scope: "Public",
    content:
      "<p>The parallax is a little odd but O.o that house build is awesome!!</p>" +
      '<iframe src="https://player.vimeo.com/video/87993762" height="300" class="img-fluid border-0"></iframe>',
    isLiked: true,
    totalLikes: "1.5k",
    totalComments: "521",
    totalView: "3.5k",
  },
];

export default posts;
