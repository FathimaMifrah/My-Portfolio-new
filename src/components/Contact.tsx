import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";
import { ScrollReveal } from "./ScrollReveal";
import "./Contact.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const sendToNumber = (method: "whatsapp" | "sms" | "email") => {
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!message.trim()) {
      setErrorMsg("Please write your message.");
      return;
    }

    setErrorMsg("");

    // Target phone number: 075 5954323 -> Sri Lanka international code +94755954323
    const targetPhone = "94755954323";

    if (method === "whatsapp") {
      const waText =
        `*New Message from Portfolio Website*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email || "Not provided"}\n` +
        `📌 *Subject:* ${subject || "Inquiry"}\n` +
        `💬 *Message:*\n${message}`;

      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
      setSuccessMsg("Opening WhatsApp to send your message to 0755954323...");
    } else if (method === "sms") {
      const smsText =
        `New Message from Portfolio:\n` +
        `Name: ${name}\n` +
        `Email: ${email || "N/A"}\n` +
        `Subject: ${subject || "Inquiry"}\n` +
        `Message: ${message}`;

      const smsUrl = `sms:+${targetPhone}?body=${encodeURIComponent(smsText)}`;
      window.location.href = smsUrl;
      setSuccessMsg("Opening SMS app to send your message to 0755954323...");
    } else if (method === "email") {
      const mailSubject = encodeURIComponent(
        subject ? `[Portfolio] ${subject}` : `Portfolio Inquiry from ${name}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
      setSuccessMsg(`Opening email app to send to ${profile.email}...`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default submit action sends via WhatsApp to 075 5954323
    sendToNumber("whatsapp");
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <ScrollReveal className="contact__header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-subtitle">
            I'm currently seeking a software engineering internship. Feel free to
            reach out for opportunities, collaborations, or any questions.
          </p>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal delay={1}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {errorMsg && <p className="contact__error">{errorMsg}</p>}
              {successMsg && <p className="contact__success">{successMsg}</p>}

              <div className="contact__actions">
                <button
                  type="submit"
                  className="btn btn-primary contact__submit-btn contact__submit-btn--whatsapp"
                  title="Send message to 0755954323 via WhatsApp"
                >
                  <FaWhatsapp size={18} />
                  <span>Send via WhatsApp (0755954323)</span>
                </button>

                <div className="contact__alt-buttons">
                  <button
                    type="button"
                    className="btn btn-secondary contact__alt-btn"
                    onClick={() => sendToNumber("sms")}
                    title="Send SMS to 0755954323"
                  >
                    <FiMessageSquare size={16} />
                    <span>Send SMS</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary contact__alt-btn"
                    onClick={() => sendToNumber("email")}
                    title="Send Email"
                  >
                    <FiMail size={16} />
                    <span>Send Email</span>
                  </button>
                </div>
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="contact__info">
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-text">
                The best way to reach me is via email or phone / WhatsApp. I'm open to
                internship opportunities and happy to discuss my projects and
                experience.
              </p>

              <ul className="contact__info-list">
                <li className="contact__info-item">
                  <div className="contact__info-icon">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <p className="contact__info-label">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="contact__info-link"
                    >
                      {profile.email}
                    </a>
                  </div>
                </li>

                <li className="contact__info-item">
                  <div className="contact__info-icon">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <p className="contact__info-label">Phone & WhatsApp</p>
                    <a
                      href="https://wa.me/94755954323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__info-link contact__info-link--highlight"
                      title="Click to WhatsApp 0755954323"
                    >
                      0755954323 <FaWhatsapp size={14} className="inline-wa-icon" />
                    </a>
                  </div>
                </li>

                <li className="contact__info-item">
                  <div className="contact__info-icon">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <p className="contact__info-label">Location</p>
                    <p className="contact__info-value">{profile.location}</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

