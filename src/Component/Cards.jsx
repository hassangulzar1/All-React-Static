import React from "react";
const Cards = (props) => {
  return (
    <div class="cardport mx-md-5 mt-5 pt-4 shadow">
      <img className="" src={props.img}></img>
      <div class="cardportcontent">
        <div class="cardportitems">
          <a target="_blank" href={props.sourceLink}>
            <span className=" pointer-event">Source Code</span>
          </a>
        </div>
        <h3 className="mt-3">{props.name}</h3>
        <a target="_blank" href={props.link}>
          <button>Preview</button>
        </a>
      </div>
    </div>
  );
};

export default Cards;
