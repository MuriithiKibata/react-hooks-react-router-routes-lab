import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
<NavLink 
to = "/Home"
> Home</NavLink> 

<NavLink  to = "/Movies"
>Movies
</NavLink>
<NavLink to = "/Actors">
Actors
</NavLink>
<NavLink to = "/Directors">
Directors
</NavLink>
  </div>;
}

export default NavBar;
