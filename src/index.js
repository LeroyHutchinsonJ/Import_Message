import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PropTypes from "prop-types";

var App = () => {
  return (
    <div className="dialog">
      <Dialog>
        <Title />
        <Body />
        <Footer />
      </Dialog>
    </div>
  );
};
var Dialog = ({ children }) => {
  var childArray = React.Children.toArray(children);

  return (
    <div>
      <h2>{childArray[0]}</h2>
      {childArray[1]}
      {childArray[2]}
    </div>
  );
};

var Title = () => {
  return <div>This is important</div>;
};

var Body = () => {
  return <div>Here is some important information</div>;
};

var Footer = () => {
  return <button className="button">Close</button>;
};

//Create a custom proptype checker to make sure that the children of dialog acccepts, the right types
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
