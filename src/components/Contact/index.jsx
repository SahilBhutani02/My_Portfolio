import "./index.css";
import { Loader } from "react-loaders";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("1oe2ZK9thKk6F7Mne");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_6f5884x", // Service ID
        "template_qiixutq", // Template ID
        refForm.current,
        "1oe2ZK9thKk6F7Mne" // Public key
      );

      console.log("SUCCESS!", result.status, result.text);
      setMessage("Message sent successfully! I will get back to you soon.");
      setMessageType("success");
      refForm.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setMessage("Failed to send message. Please try again or contact me directly.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me!</h1>
          <p>
            I am interested in freelance and full-time role opportunities -
            especially ambitious or large projects. However, if you have other
            requests or questions, don't hesitate to contact me using the form below.
          </p>
          
          {message && (
            <div className={`message ${messageType}`} role="alert">
              {message}
            </div>
          )}

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} noValidate>
              <ul>
                <li className="half">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    required 
                    disabled={isLoading}
                    aria-label="Your name"
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    disabled={isLoading}
                    aria-label="Your email address"
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    disabled={isLoading}
                    aria-label="Message subject"
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    disabled={isLoading}
                    aria-label="Your message"
                    rows="6"
                  ></textarea>
                </li>
                <li>
                  <button 
                    type="submit" 
                    className={`flat-button ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                    aria-label={isLoading ? "Sending message..." : "Send message"}
                  >
                    {isLoading ? "SENDING..." : "SEND"}
                  </button>
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