import React from "react";

export default function Alert(props) {
  //const [trick,settrick]=useState(props.trick)
  return (
    props.alert &&
    <div>
      
       <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {props.alert}
       
      </div>
    </div>
  );
}
