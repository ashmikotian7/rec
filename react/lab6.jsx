import React, { useState, useEffect, useCallback } from "react";
import DOMPurify from "dompurify";
import "./App.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const sanitizeInput = (value) => DOMPurify.sanitize(value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value.trim())
    }));
  };

  const validateForm = useCallback(() => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (
      !/(?=.[A-Z])(?=.\d)(?=.*[@$!%?&])/.test(formData.password)
    ) {
      newErrors.password =
        "Password must have at least one uppercase letter, one number, and one special character";
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={form-input ${errors.name ? "error" : ""}}
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={form-input ${errors.email ? "error" : ""}}
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className={form-input ${errors.password ? "error" : ""}}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="form-submit"
            disabled={!isFormValid}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success Message Box */}
      {submittedData && (
        <div className="success-box">
          ✅ Your form has been submitted successfully!
        </div>
      )}

      {/* Submitted Details Box */}
      {submittedData && (
        <div className="submitted-details">
          <h3>Submitted Info</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;


.form-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  border: 2px solid #d88181; /* <-- Simple gray border */
  border-radius: 8px;
  background-color: #e50f0f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* optional, can remove */
}