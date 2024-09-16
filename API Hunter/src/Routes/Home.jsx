import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login" className="button">Login</Link>
      <Link to="/home" className="button">Home</Link>
    </div>
  );
}
export default Home;
