import React from 'react';

function Contact() {
  return (
    <form data-netlify="true" name="contact">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
        <button type="submit">Send!</button>
      </div>
    </form>
  );
}

export default Contact;
