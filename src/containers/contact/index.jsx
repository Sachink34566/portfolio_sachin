import React, { useRef } from "react";
import PageHeader from "../../components/pageheader";
import { IoIosBookmarks } from "react-icons/io";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com";
import "./styles.css";

const Contact = () => {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_qjpiqgw",
      "template_p7sopck",
      formRef.current,
      "QGamQT3n-wO0Ulrtx"
    )
    .then(
      () => {
        alert("Message sent successfully!");

        // Reset the form completely
        formRef.current.reset();

        // Also reset floating-label CSS classes
        const inputs = formRef.current.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
          input.classList.remove("filled");
          input.classList.remove("active");
          input.classList.remove("focus");
        });
      },
      () => {
        alert("Failed to send message. Try again.");
      }
    );
};


  return (
    <section id="contact" className="contact">
      <PageHeader headerText="My Contact" icon={<IoIosBookmarks size={40} />} />

      <div className="contact_content">
        <Animate play duration={1} start={{ transform: "translateX(-200px)" }}>
          <h3 className="contact_content_header">Let's Talk</h3>
        </Animate>

        <Animate play duration={1} start={{ transform: "translateX(200px)" }}>
          <form ref={formRef} onSubmit={sendEmail} className="contact_content_form">
            
            <div className="contact_content_form_controls">

              <div className="names">
                <input required name="user_name" className="inputname" type="text" />
                <label className="labelname">Name</label>
              </div>

              <div className="emails">
                <input
                  required
                  name="user_email"
                  className="inputemail"
                  type="email"
                />
                <label className="labelemail">Email</label>
              </div>

              <div className="descripations">
                <textarea
                  required
                  name="message"
                  rows="5"
                  className="inputdescripations"
                />
                <label className="labeldescripations">Description</label>
              </div>

            </div>

            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
