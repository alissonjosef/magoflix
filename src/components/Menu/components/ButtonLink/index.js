import React from 'react';
/* import { Link } from 'react-router-dom'; */

function ButtonLink(props){

  console.log(props);
  return(
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;