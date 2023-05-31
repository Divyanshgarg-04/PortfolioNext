import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div
    style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>Opps, seems like you are lost!</h1>
    <p>
      Mind going back? or <Link to="/">Home</Link>
    </p>
  </div>
);

export default NotFoundPage;
