import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.

export default function Contact(props) {
  console.log(props);
  return (
    <div className="contact">
      <img className="contact-photo" src={props.photo} alt="contact icon" />
      <h2 className="contact-name">{props.name}</h2>
      <p className="contact-address">{props.address}</p>
    </div>
  );
}