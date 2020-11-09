import React from 'react';
import Base from '../components/base';

export default function Contact() {
  return (
    <Base>
      <div className="contact">
        <div className="about">
          <img src="https://picsum.photos/200" alt="profile image" />
          <h2>NAME NAME ABC</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, earum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fuga
            officia dolor atque, distinctio placeat cumque molestias veritatis
            praesentium ad.
          </p>
        </div>
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
      </div>
    </Base>
  );
}
