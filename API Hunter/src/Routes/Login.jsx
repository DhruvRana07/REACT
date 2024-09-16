import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { email, password };
    axios.post("https://reqres.in/api/login", userdata)
      .then((res) => {
        loginUser(res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-form-container">
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
        <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
      <div>
        <Link to="/" className="back-button">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
