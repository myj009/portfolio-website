import React from "react";

import classes from "@/styles/footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="px-48 pb-5">
        <div>
          <div className={`${classes.footer__copyright}`}>
            <p>
              &copy; Copyright {year} - Developed by Mohammad Jagora. All right
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
