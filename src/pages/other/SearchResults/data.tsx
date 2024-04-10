import user1 from "../../../assets/images/users/user-1.jpg";
import user2 from "../../../assets/images/users/user-2.jpg";
import user3 from "../../../assets/images/users/user-3.jpg";
import user4 from "../../../assets/images/users/user-4.jpg";
import user5 from "../../../assets/images/users/user-5.jpg";

import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img4 from "../../../assets/images/small/img-4.jpg";

export interface UserResultType {
  id?: number;
  userName?: string;
  email?: string;
  avatar?: string;
  bio?: string;
}

export interface AllResultType {
  id?: number;
  title?: string;
  url?: string;
  content?: string;
}

const users: UserResultType[] = [
  {
    id: 1,
    userName: "Chadengle",
    email: "mediaheader@mail.com",
    avatar: user1,
    bio: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
  },
  {
    id: 2,
    userName: "Halette Boivin",
    email: "mediaheader@mail.com",
    avatar: user2,
    bio: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
  },
  {
    id: 3,
    userName: "Lucas Sabourin",
    email: "mediaheader@mail.com",
    avatar: user3,
    bio: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
  },
  {
    id: 4,
    userName: "Donatien Brunelle",
    email: "mediaheader@mail.com",
    avatar: user4,
    bio: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
  },
  {
    id: 5,
    userName: "Karel Auberjo",
    email: "mediaheader@mail.com",
    avatar: user5,
    bio: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
  },
];

const allResults: AllResultType[] = [
  {
    id: 1,
    title: "Zircos - Responsive Admin Template",
    url: "http://coderthemes.com/zircos/index.html",
    content: `<p class="mb-0 text-muted">Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>`,
  },
  {
    id: 2,
    title: "Uplon - Responsive Bootstrap 4 Web App Kit",
    url: "http://themeforest.net/user/coderthemes/portfolio?ref=coderthemes",
    content: `<p class="mb-0 text-muted">Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>`,
  },
  {
    id: 3,
    content: `<div class="d-flex align-items-start">
            <img class="d-flex me-3 rounded-circle" src="${user1}" alt="Generic placeholder image" height="54">
            <div class="w-100">
                <h5 class="mt-0">
                    <a href="#" class="text-dark">Chadengle</a>
                </h5>
                <p class="font-13">
                    <b>Email:</b>
                    <span><a href="#" class="text-muted">mediaheader@mail.com</a></span>
                </p>
                <p class="mb-0 font-13">
                    <b>Bio:</b>
                    <br/>
                    <span class="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</span>
                </p>
            </div>
        </div>`,
  },
  {
    id: 4,
    title: "Zircos - Responsive Admin Template",
    url: "http://ubold.coderthemes.com/",
    content: `<p class="mb-0 text-muted">Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>`,
  },
  {
    id: 5,
    title: "Uplon - Responsive Bootstrap 4 Web App Kit",
    url: "http://themeforest.net/user/coderthemes/portfolio?ref=coderthemes",
    content: `
        <div class="">
        <img src="${img1}" height="48" alt="image"/>
        <img src="${img2}" height="48" alt="image"/>
        <img src="${img3}" height="48" alt="image"/>
        <img src="${img4}" height="48" alt="image"/>
        </div>`,
  },
  {
    id: 6,
    title: "Zircos - Responsive Admin Template",
    url: "http://ubold.coderthemes.com/",
    content: `<p class="mb-0 text-muted">Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>`,
  },
  {
    id: 7,
    title: "Uplon - Responsive Bootstrap 4 Web App Kit",
    url: "http://themeforest.net/user/coderthemes/portfolio?ref=coderthemes",
    content: `
        <p class="mb-0 text-muted">
        Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
        </p>
        <div class="row mt-2">
        <div class="col-sm-4 col-xl-2">
        <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0"></iframe>
        </div>
        </div>
        </div>`,
  },
];

export { allResults, users };
