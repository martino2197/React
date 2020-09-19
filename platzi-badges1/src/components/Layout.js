import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      {" "}
      {/*podemos regreesar mas de un elemento gracias a React.Fragment*/}
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
