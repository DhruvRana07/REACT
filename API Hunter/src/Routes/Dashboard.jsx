import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import Loader from "../Components/Loader";

function Dashboard() {
  const { logoutUser, authState } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 style={{ color: "red" }}>Dashboard</h1>
      <div>
        <button
          data-testid="logout-btn"
          onClick={logoutUser}
          style={{ height: "50px", width: "100px", fontSize: "18px" }}
        >
          Logout
        </button>
        <p style={{ backgroundColor: "gray", width: "20%", marginLeft: "40%" }}>
          Token:
          <b
            data-testid="user-token"
            style={{ color: "white", fontWeight: "bold" }}
          >
            {authState.token}
          </b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductsTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
