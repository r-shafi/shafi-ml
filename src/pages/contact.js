import React from 'react';
import Base from '../components/base';

import '../styles/contact.css';

function About() {
  return (
    <div className="about">
      <img src="https://picsum.photos/200" alt="profile image" />
      <h2>Shafi Rayhan</h2>
      <p>Front End Web Developer</p>
      <p>
        Studying Power Engineering at <em>Sylhet Polytechnic Institute</em>
      </p>
      <p>Placeholder text incoming...</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        ratione. Amet dolores repellat qui iste, autem minus expedita quo
        incidunt!
      </p>
    </div>
  );
}

function ContactForm() {
  return (
    <main className="form">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="msg">Message:</label>
        <textarea id="msg"></textarea>
        <button type="submit" id="send">
          Send
        </button>
      </form>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Base>
      <div className="contact">
        <About />
        <ContactForm />
      </div>
    </Base>
  );
}
