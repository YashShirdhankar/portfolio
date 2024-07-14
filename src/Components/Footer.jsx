import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/YashShirdhankar" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yash-shirdhankar/" target="_blank">
        <FaLinkedin />
        </a>

        <a href="mailTo:yashshirdhankar@gmai.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
