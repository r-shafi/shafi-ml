import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import me from '../../static/favicon.png';

import style from '../styles/contact.module.css';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function About() {
  return (
    <div className={style.about}>
      <img src={me} alt="Shafi" />
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    if (!validateEmail(this.state.email)) {
      e.preventDefault();
      document.querySelector('#invalid').style.display = 'block';
      setTimeout(() => {
        document.querySelector('#invalid').style.display = 'none';
      }, 3000);
    }
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className={style.form}>
        <h2>Contact Me!</h2>
        <form
          name="contact"
          method="POST"
          action="https://getform.io/f/41699d4b-d123-4239-929b-5612601d261f"
          onSubmit={this.handleSubmit}
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
          <p className={style.invalid} id="invalid">Invalid Email!</p>
          <label htmlFor="message">
            Message:
            <textarea
              required
              id="message"
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
    <Layout>
      <Head title="Contact" description="Contact Shafi Rayhan." />
      <div className={style.contact}>
        <Form />
        <About />
      </div>
    </Layout>
  );
}
