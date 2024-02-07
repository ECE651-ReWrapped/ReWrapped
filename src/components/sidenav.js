import React from 'react';
import './sidenav.css'; // Import CSS for styling

function SideNav() {
  return (
    <div className="sidenav">
      <a href="#">Dashboard</a>
      <a href="#">Analytics</a>
      <a href="#">About</a>
      <a href="#">Log Out</a>

    </div>
  );
}

export default SideNav;