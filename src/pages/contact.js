import React from 'react';
import Base from '../components/base';

import '../styles/contact.css';

function About() {
  return (
    <div className="about">
      <img src="https://picsum.photos/200" alt="profile" />
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

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      msg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!this.state.email.match(emailRegex)) {
      e.preventDefault();
      document.querySelector('.error').style.display = 'block';
      setTimeout(() => {
        document.querySelector('.error').style.display = 'none';
      }, 3000);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <main className="form">
        <form onSubmit={this.handleSubmit} name="message" netlify>
          <label htmlFor="name">Name:</label>
          <input required type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            onChange={this.handleChange}
          />
          <p className="error">Not a valid email</p>
          <label htmlFor="msg">Message:</label>
          <textarea required id="msg" onChange={this.handleChange}></textarea>
          <button type="submit" id="send">
            Send
          </button>
        </form>
      </main>
    );
  }
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
