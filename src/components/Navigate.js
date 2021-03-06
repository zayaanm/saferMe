import React from 'react';
import '../styles/Navigate.css';
import {}
from 'react-bootstrap';
import img from '../assets/86665821_178198983462585_1128028565648965632_n.png'

import { Link } from "react-router-dom";


function Navigate() {
    return (
    <>
  <div class="header">
    <h2 class="logo"><img src={img}></img></h2>
    <input type="checkbox" id="chk"></input>
    <label for="chk" class="show-menu-btn">
      <i class="fas fa-ellipsis-h"></i>
    </label>

    <ul class="menu">
      <Link to="/"><a>Home</a></Link>
      {/*<Link to="/about"><a>About</a></Link>*/}
      <Link to="/alt"><a>meInfo</a></Link>
      <Link to="/map"><a>meMap</a></Link>
      {/*<Link to="/graph"><a>eGraph</a></Link>*/}
      
      <label for="chk" class="hide-menu-btn">
        <i class="fas fa-times"></i>
      </label>
    </ul>
  </div>
</>
);
}


export default Navigate;