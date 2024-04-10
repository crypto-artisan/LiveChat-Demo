// types
import { PlanItemsTypes } from "../../components/PricingCard";

import layout1 from "../../assets/images/landing/demo/layout-1.png";
import layout2 from "../../assets/images/landing/demo/layout-2.png";
import layout3 from "../../assets/images/landing/demo/layout-3.png";
import layout4 from "../../assets/images/landing/demo/layout-4.png";
import layout5 from "../../assets/images/landing/demo/layout-5.png";
import layout6 from "../../assets/images/landing/demo/layout-6.png";
import layout7 from "../../assets/images/landing/demo/layout-7.png";

import image1 from "../../assets/images/landing/features-img/img-1.png";
import image2 from "../../assets/images/landing/features-img/img-2.png";

import icon1 from "../../assets/images/landing/icons/layers.png";
import icon2 from "../../assets/images/landing/icons/core.png";
import icon3 from "../../assets/images/landing/icons/paperdesk.png";
import icon4 from "../../assets/images/landing/icons/solarsystem.png";
import icon5 from "../../assets/images/landing/icons/datatext.png";
import icon6 from "../../assets/images/landing/icons/browserscript.png";

import testi1 from "../../assets/images/landing/testi/img-2.png";
import testi2 from "../../assets/images/landing/testi/img-1.png";
import testi3 from "../../assets/images/landing/testi/img-3.png";

export interface ServiceTypes {
  icon?: string;
  title: string;
  description?: string;
}

export interface LayoutTypes {
  name: string;
  image: string;
  link: string;
}

export interface FeatureTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface TestimonialTypes {
  id: number;
  clientName: string;
  title: string;
  avatar: string;
  message: string;
}

const services: ServiceTypes[] = [
  {
    icon: icon1,
    title: "Responsive Layouts",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
  },
  {
    icon: icon2,
    title: "Based on Bootstrap UI",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    icon: icon3,
    title: "Creative Design",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  },
  {
    icon: icon4,
    title: "Awesome Support",
    description:
      "At solmen va esser necessi far uniform grammatica pronun e plu sommun paroles.",
  },
  {
    icon: icon5,
    title: "Easy to customize",
    description:
      "If several languages coalesce the grammar of the is more simple languages.",
  },
  {
    icon: icon6,
    title: "Quality Code",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  },
];

const layouts: LayoutTypes[] = [
  {
    image: layout1,
    name: "Default (Vertical)",
    link: "http://themes.coderthemes.com/ubold_r/default",
  },
  {
    image: layout2,
    name: "Creative (Horizontal)",
    link: "http://themes.coderthemes.com/ubold_r/creative/",
  },
  {
    image: layout3,
    name: "Material",
    link: "http://themes.coderthemes.com/ubold_r/material/",
  },
  {
    image: layout4,
    name: "Modern (Detached)",
    link: "http://themes.coderthemes.com/ubold_r/modern/",
  },
  {
    image: layout5,
    name: "Purple",
    link: "http://themes.coderthemes.com/ubold_r/purple/",
  },
  {
    image: layout6,
    name: "Saas (Two-Column)",
    link: "http://themes.coderthemes.com/ubold_r/sass/",
  },
  {
    image: layout7,
    name: "Dark (Default)",
    link: "http://themes.coderthemes.com/ubold_r/dark/",
  },
];

const features: FeatureTypes[] = [
  {
    id: 1,
    title: "It's designed for describing your app, agency or business",
    description:
      "If several languages coalesce the grammar of the resulting language is more simple and regular than that of the individual languages.",
    image: image2,
    icon: "mdi mdi-chart-bar",
  },
  {
    id: 2,
    title: "Explore the new world of creativity",
    description:
      " Everyone realizes why a new common language would be desirable one could refuse to expensive translators it would be necessary.",
    image: image1,
    icon: "mdi mdi-auto-fix",
  },
];

const plans: PlanItemsTypes[] = [
  {
    id: 1,
    name: "Single Application",
    icon: "fe-user",
    price: 49,
    duration: "license",
    features: [
      "Number of end products 1",
      "Customer support",
      "Free Updates",
      "1 Domain",
      "Email Support",
      "24x7 Support",
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: "Multiple Application",
    icon: "fe-award",
    price: 149,
    duration: "license",
    features: [
      "Number of end products 3",
      "Customer support",
      "Free Updates",
      "1 Domain",
      "Email Support",
      "24x7 Support",
    ],
    isRecommended: true,
  },
  {
    id: 3,
    name: "Extended",
    icon: "fe-aperture",
    price: 999,
    duration: "license",
    features: [
      "Number of end products 1",
      "Customer support",
      "Free Updates",
      "1 Domain",
      "Email Support",
      "24x7 Support",
    ],
    isRecommended: false,
  },
];

const rawFaqs = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    textClass: "pb-1 text-muted",
  },
  {
    id: 2,
    question: "Is safe use Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    textClass: "pb-1 text-muted",
  },
  {
    id: 3,
    question: "Why use Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    textClass: "pb-1 text-muted",
  },
  {
    id: 4,
    question: "When can be used?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    textClass: "pb-1 text-muted",
  },
  {
    id: 5,
    question: "How many variations exist?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    textClass: "pb-1 text-muted",
  },
  {
    id: 6,
    question: "License & Copyright",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    textClass: "pb-1 text-muted",
  },
];

const testimonial: TestimonialTypes[] = [
  {
    id: 1,
    clientName: "Michael Morrell",
    title: "Ubold User",
    avatar: testi1,
    message:
      "Excellent support for a tricky issue related to our customization of the template. Author kept us updated as he made progress on the issue and emailed us a patch when he was done. ",
  },
  {
    id: 2,
    clientName: "John Seidel",
    title: "Ubold User",
    avatar: testi2,
    message:
      "Flexible, Everything is in, Suuuuuper light, even for the code is much easier to cut and make it a theme for a productive app.",
  },
  {
    id: 3,
    clientName: "Robert Taylor",
    title: "Ubold User",
    avatar: testi3,
    message:
      "Not only the code, design and support are awesome, but they also update it constantly the template with new content, new plugins. I will buy surely another coderthemes template! ",
  },
];

export { services, layouts, features, plans, rawFaqs, testimonial };
