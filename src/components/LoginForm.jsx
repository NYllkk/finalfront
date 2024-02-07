import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
    error: "",
    success: false,
  };
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setIsSubmitting(true);

      if (!formData.email || !formData.password) {
        throw new Error("Email and password are required.");
      }

      const response = await axios.post(`${backendUrl}/login`, {
        email: formData.email,
        password: formData.password,
      });

      setFormData({ ...initialState, success: true });
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      console.error("Login failed:", error.message);
      setFormData({
        ...initialState,
        error: error.message || "Invalid email or password. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(formData);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Login</h2>
      <p>nikhil@gmail.com</p>
      <p>"nikhil@1234</p>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          name="password"
          type="password"
          id="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {formData.error && <p style={{ color: "red" }}>{formData.error}</p>}
      {formData.success && <p style={{ color: "green" }}>Login successful</p>}
      <button onClick={handleLogin} disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default LoginForm;
