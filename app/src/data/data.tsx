import { Blog } from "../config/types";

import Avatar_1 from "../assets/logos/logo-01.svg";
// import Avatar_2 from "../assets/logos/logo-02.svg";

export const BlogPosts: Blog[] = [
  {
    id: Math.random().toString(),
    title:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    body: [
      "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    ],
    hot: true,
    pinned: true,
    post: {
      platform: "twitter",
      url: "https://x.com/Support/status/1719146771937452383?s=20",
    },
    postBy: {
      name: "Borussia Dortmund",
      avatar: Avatar_1,
    },
    createdAd: {
      date: "4h ago",
      time: "09:00",
    },
  },
  // {
  //   id: Math.random().toString(),
  //   title:
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  //   body: [
  //     "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  //   ],
  //   hot: false,
  //   pinned: false,
  //   post: {
  //     platform: "instagram",
  //     url: "https://www.instagram.com/p/CzqXygPrODe/?utm_source=ig_web_copy_link",
  //   },
  //   postBy: {
  //     name: " Liverpool F.C.",
  //     avatar: Avatar_2,
  //   },
  //   createdAd: {
  //     date: "9 Mar",
  //     time: "10:10",
  //   },
  // },
  // {
  //   id: Math.random().toString(),
  //   title:
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  //   body: [
  //     "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  //   ],
  //   hot: false,
  //   pinned: false,
  //   post: {
  //     platform: "youtube",
  //     url: "https://youtu.be/lJIrF4YjHfQ",
  //   },
  //   createdAd: {
  //     date: "4h ago",
  //     time: "09:00",
  //   },
  // },
  // {
  //   id: Math.random().toString(10),
  //   title:
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  //   body: [
  //     "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  //   ],
  //   hot: false,
  //   pinned: false,
  //   createdAd: {
  //     date: "9 Mar",
  //     time: "10:10",
  //   },
  // },
  // {
  //   id: Math.random().toString(),
  //   title:
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  //   body: [
  //     "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  //   ],
  //   hot: false,
  //   pinned: true,
  //   post: {
  //     platform: "youtube",
  //     url: "https://youtu.be/lJIrF4YjHfQ",
  //   },
  //   createdAd: {
  //     date: "9 Mar",
  //     time: "10:10",
  //   },
  // },
  // {
  //   id: Math.random().toString(),
  //   title:
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  //   body: [
  //     "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  //     "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  //   ],
  //   hot: true,
  //   pinned: false,
  //   postBy: {
  //     name: " Liverpool F.C.",
  //     avatar: Avatar_2,
  //   },
  //   createdAd: {
  //     date: "4h ago",
  //     time: "09:00",
  //   },
  // },
];
