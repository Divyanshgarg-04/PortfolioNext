import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import tw from "twin.macro";
// import Particle from "../Particle";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n8m4rsj",
        "template_yovpnhp",
        form.current,
        "E7TJ-qFUc_yhJoOeD"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message Sent!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <Particle /> */}
      <ContactSection>
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Name" />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Email Address" />
            <label>Message</label>
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
        <SocialLinks>
          <div>
            <a href="https://github.com/Lucif3r-in">
              <AiFillGithub />
              See what I have developed
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/v_ashu_dev_/">
              <AiFillInstagram />
              Follow me on Instagram
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ashutosh-rath-afk02/">
              <AiFillLinkedin /> Check for my professional life
            </a>
          </div>
          <div>
            <a href="https://twitter.com/v_ashu_dev">
              <AiFillTwitterCircle />
              Check out my Tweets!
            </a>
          </div>
        </SocialLinks>
      </ContactSection>
    </>
  );
};

export default Contact;

// Styles
const ContactSection = styled.div`
  z-index: 999;
  height: 100vh;
  margin-top: -60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
  a {
    text-decoration: none;
    color: white;
  }
`;
const SocialLinks = styled.div`
  z-index: 999;

  fonst-size: 4rem;
  margin-top: 60px;
  color: white;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${tw`
    hidden
    md:flex
  `}
`;

const StyledContactForm = styled.div`
  z-index: 999;

  width: 400px;
  margin: 0 10px 0 10px;
  margin-top: 100px;
  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      left: 0;
      color: white;
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
