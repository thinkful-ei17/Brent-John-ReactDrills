import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar(props) {
  const newLinks = props.links.map(link =>
    (<li>
      <a href={link.href}>{link.text}</a>
    </li>
    ));
  console.log("hello world", newLinks);
  return (
    <div className="navigation-bar">
      <h1>{props.title}</h1>
      <nav className="navigation-bar-nav">
        <ul>
          {newLinks}
        </ul>
      </nav>
    </div>
  );


}