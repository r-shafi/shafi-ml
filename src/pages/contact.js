import React from 'react';
import axios from 'axios';

import Base from '../components/base';
import Head from '../components/head';

import '../style/contact.css';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function About() {
  return (
    <div className="about">
      <img src="https://picsum.photos/200" alt="profile" />
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
    axios.post('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(this.state),
    })
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { name, email, msg } = this.state;
    return (
      <main className="form">
        <form
          name="message"
          method="POST"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          action="/submission"
        >
          <input type="hidden" name="form-name" value="message" />
          <label htmlFor="name">
            Name:
            <input
              required
              type="text"
              id="name"
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
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <p className="error">Not a valid email</p>
          <label htmlFor="msg">
            Message:
            <textarea
              required
              id="msg"
              onChange={this.handleChange}
              value={msg}
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
