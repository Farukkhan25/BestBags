import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/bag_images/bagicon.jpg";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Briefcases",
  },
  {
    path: "#",
    display: "Handbags",
  },
  {
    path: "#",
    display: "Backpacks",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#",
    display: "Jobs",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-gray-800 p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto justify-items-center text-center">
        <div className="footer__wrapper lg:flex-row sm:flex-col items-center">
          <div className="footer__logo">
            <div className="flex justify-center">
              <Link
                rel="noopener noreferrer"
                to="/"
                aria-label="Back to homepage"
                className=" px-1 lg:mr-1 pb-5"
              >
                <img src={logo} alt="" style={{ height: "40px" }} />
              </Link>
              <h2 className="text-2xl">BestBags</h2>
            </div>
            <p className="description pt-2">Your Best Choice</p>
            <p className="small__text description">
              You need unique your identity with attractive way of selective
              fashion.
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Products</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Company</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright {year}, Made With ❤️ By Md. Faruk Khan. <br /> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
