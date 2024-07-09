import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
        setTotalPages(data.totalPages);
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container" className="countries-container">
        {countries.map((country) => (
          <CountriesCard key={country.id} country={country.country} population={country.population} />
        ))}
      </div>
      <Pagination current={page} onChange={setPage} total={totalPages} />
    </div>
  );
}

export default Countries;
