import React, { useState } from "react";
import styles from "./Inquiries.module.css";
import emailjs from "emailjs-com";
import LandingModal from "./LandingModal";

export default function InquiriesForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsButtonDisabled(true);

    emailjs
      .send(
        "service_i8r0sol",
        "template_2joutye",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          from_phone: formData.phone,
          message_sent: formData.message,
        },
        "UzzQKjNZgNgkBw5Cb"
      )
      .then(() => {
        setIsModalOpen(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      })
      .catch((err) => {
        const errorMessage = extractGoogleError(err) || "Failed to send message. Please try again.";
        console.error("Error sending email:", err);
        alert(errorMessage);
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  const extractGoogleError = (error) => {
    if (error?.response?.status === 400) {
      return "There was an issue with the request. Please check your input.";
    } else if (error?.response?.status === 500) {
      return "Server error. Please try again later.";
    } else if (error?.message) {
      return `Error: ${error.message}`;
    }
    return null;
  };

  return (
    <div className={styles.UserInquiries}>
      <form className={styles.InqContainer} onSubmit={handleSubmit}>
        <h1 className={styles.Inqheading}>TALK TO US</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/539fbf282d8669cc5f25ab7c5ae3ff2aa92ac07ee205fd571d112d068b93adf7?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83"
          className={styles.logo}
          alt="Company Logo"
        />
        <h2 className={styles.subheading}>
          Let's Transform Your Supply Chain Experience
        </h2>

        <div className={styles.inputRow}>
          <div>
            <label htmlFor="firstName" className={styles["visually-hidden"]}>First Name</label>
            <input
              type="text"
              id="firstName"
              className={styles.InqinputField}
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
          </div>
          <div>
            <label htmlFor="lastName" className={styles["visually-hidden"]}>Last Name</label>
            <input
              type="text"
              id="lastName"
              className={styles.InqinputField}
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
          </div>
        </div>

        <div className={styles.inputRow}>
          <div>
            <label htmlFor="email" className={styles["visually-hidden"]}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.InqinputField}
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="phone" className={styles["visually-hidden"]}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              className={styles.InqinputField}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={styles["visually-hidden"]}>Tell Us Something</label>
          <textarea
            id="message"
            className={styles.messageField}
            placeholder="Tell Us Something..."
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <button type="submit" className={styles.submitButton} disabled={isButtonDisabled}>
          SEND
        </button>
      </form>

      <LandingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
