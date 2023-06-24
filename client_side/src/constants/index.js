import {
  createCampaign,
  dashboard,
  logout,
  editUser,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "notifications",
    imgUrl: createCampaign,
    link: "/notifications",
    // disabled: true,
  },
  {
    name: "add asset",
    imgUrl: withdraw,
    link: "/create-asset",
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "edit profile",
    imgUrl: editUser,
    link: "/kyc",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    // disabled: true,
  },
];
