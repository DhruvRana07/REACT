import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader"; // Import the Loader component

function SingleProductPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before making the API call
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      )
      .then((res) => {
        setData(res.data.data);
        setLoading(false); // Set loading to false after receiving the data
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false even in case of error
      });
  }, [id]);

  if (loading) {
    return <Loader />; // Render Loader component while data is being fetched
  }

  return (
    <div className="product-container">
      <div>
        <h3 data-testid="product-brand">{data.brand}</h3>
      </div>
      <div>
        <img
          src={data.img}
          data-testid="product-image"
          style={{ height: "400px" }}
        />
      </div>
      <div data-testid="product-category">{data.category}</div>
      <div data-testid="product-details">{data.details}</div>
      <div data-testid="product-price">{data.price}</div>
      <Link to="/dashboard" className="back-button">Back to Dashboard</Link>
    </div>
  );
}

export default SingleProductPage;
