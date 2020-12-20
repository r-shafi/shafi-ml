import React from 'react';
import { navigate } from 'gatsby';

import Base from '../components/base';
import Head from '../components/head';

import profileImage from '../media/favicon.svg';

import '../style/contact.css';

function About() {
  return (
    <div className="about">
      <img src={profileImage} alt="profile" />
      <h2>Shafi Rayhan</h2>
      <p>Front End Web Developer</p>
      <section className="details">
        <p>
          I am studying Power Engineering at
          {' '}
          <a href="http://spi.gov.bd/">Sylhet Polytechnic Institute</a>
          .
        </p>
        <p>I've been programming since 2017 and still learning something new everyday.</p>
        <p>
          Whenever I'm not coding I love to spend my time with my family, watching movies
          {' '}
          <em>or</em>
          {' '}
          old tv shows
          {' '}
          <em>or</em>
          {' '}
          anime
          {' '}
          <em>or</em>
          {' '}
          listening to music.
        </p>
        <section className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>Design</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <main className="form">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="https://getform.io/f/41699d4b-d123-4239-929b-5612601d261f"
        >
          <label htmlFor="name">
            Name:
            <input
              required
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              required
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <p className="error">Not a valid email</p>
          <label htmlFor="msg">
            Message:
            <textarea
              required
              id="message"
              name="message"
              onChange={this.handleChange}
              value={message}
            />
          </label>

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
      <Head title="Contact" />
      <div className="contact">
        <About />
        <ContactForm />
      </div>
    </Base>
  );
}
