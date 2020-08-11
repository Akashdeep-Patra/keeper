import React from "react";
import "./Footer.css";
export default () => {
  return (
    <div class="footer-container">
      <footer>
        <p className="footer footer-container ">
          Copyright © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
