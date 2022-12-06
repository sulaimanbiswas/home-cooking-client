import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-20 mb-1 p-10 bg-base-200 text-base-content">
        <div>
          <div className="w-12 h-12">
            <img src={logo} alt="" />
          </div>

          <p>
            Home Cooking.
            <br />
            Providing reliable tech since 2022
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Branding
          </Link>
          <Link to="" className="link link-hover">
            Design
          </Link>
          <Link to="" className="link link-hover">
            Marketing
          </Link>
          <Link to="" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="link link-hover">
            About us
          </Link>
          <Link to="" className="link link-hover">
            Contact
          </Link>
          <Link to="" className="link link-hover">
            Jobs
          </Link>
          <Link to="" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover">
            Terms of use
          </Link>
          <Link to="" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
