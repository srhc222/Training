import { MenuItem } from './../model/menu-item';
import { Footer } from "../model/footer";
import { Header } from "../model/header";

export const pageHeader: Header = {
  title: 'First Motor',
  menuIcon: 'menu',
  homeIcon: 'home',
  profileName: 'profile',
  isMobile: true
}

export const pageFooter: Footer = {
  copyright: 'all right reserved to SRHC',
  address: 'Kochav yaakov',
  phone: 972548490935,
  email: 'srhc222@gmail.com',
}

export const pageMenuItem: MenuItem = {
  name: "Bugatti",
  url: "a",
  isShow: true,
}
