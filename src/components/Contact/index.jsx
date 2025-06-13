import "./index.css";
import { Loader } from "react-loaders";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS - Replace 'YOUR_PUBLIC_KEY' with your actual public key
    emailjs.init("1oe2ZK9thKk6F7Mne");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_6f5884x", //  service ID
        "template_qiixutq", //  template ID
        refForm.current,
        "1oe2ZK9thKk6F7Mne" //  public key
      );

      console.log("SUCCESS!", result.status, result.text);
      setMessage("Message sent successfully! I will get back to you soon.");
      refForm.current.reset();
    } catch (error) {
      console.log("FAILED...", error);
      setMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me!</h1>

          <p>
            I am interested in freelance and full-time role opportunities -
            especially ambitious or large projects. However, if you have other
            request or question, don't hesitate to contact me using below form
            either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
