import React, { Fragment } from "react";
import phone from "./pictures/phone-499991_1024.jpg";
import "./Contact.css";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  let handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <Fragment>
      <article>
        <div class="news-section">
          <p>Contact</p>
        </div>
      </article>
      <article>
        <img
          class="contact-img"
          width="1024"
          height="auto"
          src={phone}
          alt="phone"
        ></img>
      </article>
      <article>
        <p class="big">Lorem, ipsum dolor.</p>
        <p class="big">Dentist</p>
        <p class="small">Adress Lorem ipsum dolor sit.</p>
        <p class="mid">Adress Lorem ipsum dolor sit.</p>
        <p class="mid">Owner Lorem, ipsum dolor.</p>
        <p class="mid">999 999 999</p>
        <p class="mid">777 777 777</p>
        <p class="big contact-label">Contact us:</p>
        <form
          id="comment-form"
          class="sample-form"
          method="post"
          onSubmit={handleFormSubmit}
          action-xhr="#comment-form"
        >
          <div>
            <div>
              <label for="in1">Name:</label>
              <input type="text" id="in1" required />
            </div>
            <div>
              <label for="in2">E-mail:</label>{" "}
              <input type="text" id="in2" required />
            </div>
            <div>
              <label for="in3">Message:</label>
              <textarea type="text" id="in3" rows="4" required></textarea>
            </div>
          </div>
          <div class="send">
            <button type="submit" class="send-btn">
              Send
            </button>
          </div>
        </form>
        <p hidden={!formSubmitted} class="posted">
          Your message has been sent!
        </p>
      </article>
    </Fragment>
  );
};

export default Contact;
