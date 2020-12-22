import React from 'react';

import Base from '../components/base';
import Head from '../components/head';

import profileImage from '../media/favicon.svg';

import style from '../style/contact.module.css';

function About() {
  return (
    <div className={style.about}>
      <img src={profileImage} alt="Shafi" />
      <h2>Shafi Rayhan</h2>
      <p>Front End Web Developer</p>
      <section className={style.details}>
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
        <section className={style.skills}>
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
      <div className={style.form}>
        <h2>Contact Me!</h2>
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
          <label htmlFor="message">
            Message:
            <textarea
              required
              id={style.message}
              name="message"
              onChange={this.handleChange}
              value={message}
            />
          </label>

          <button type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default function ContactPage() {
  return (
    <Base>
      <Head title="Contact" />
      <div className={style.contact}>
        <About />
        <ContactForm />
      </div>
    </Base>
  );
}
