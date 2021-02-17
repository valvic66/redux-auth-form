import React from "react";
import './index.css';

export default function UserForm() {
  const handleEmailChange = text => {
    
  };

  return (
    <div className="form-wrapper">
      <form method="post">
        <h3 class="form-name">Registration form</h3>

        <div class="user-field">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleEmailChange}
          />
        </div>

        <div class="user-field">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}
