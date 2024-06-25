import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import "./components/post.css";

const POSTS_PER_PAGE = 10;
const MAX_VISIBLE_PAGES = 5; // Maximum number of visible page numbers

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

  useEffect(() => {
    if (dataFetched) {
      fetchPosts();
    }
  }, [dataFetched]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
    setLoading(false);
  };

  const handleGetPosts = () => {
    setDataFetched(true); // Trigger fetching data when button is clicked
  };

  const handleNextPage = () => {
    if (currentPage * POSTS_PER_PAGE < posts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const currentPageIndex = currentPage - 1;

    if (totalPages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const startPage = Math.max(
        0,
        currentPageIndex - Math.floor(MAX_VISIBLE_PAGES / 2)
      );
      let endPage = startPage + MAX_VISIBLE_PAGES - 1;

      if (endPage >= totalPages - 1) {
        endPage = totalPages - 1;
        return Array.from(
          { length: MAX_VISIBLE_PAGES },
          (_, index) => totalPages - MAX_VISIBLE_PAGES + 1 + index
        );
      } else {
        return Array.from(
          { length: MAX_VISIBLE_PAGES },
          (_, index) => startPage + 1 + index
        );
      }
    }
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const displayedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="fetch-data-container">
      <button className="show-data-button" onClick={handleGetPosts}>
        GET POSTS
      </button>
      {loading && (
        <div className="loading">
          <div className="loading-spinner"></div>
          Loading...
        </div>
      )}
      {dataFetched && posts.length > 0 && (
        <>
          <div className="post-list">
            {displayedPosts.map((post, index) => (
              <Post
                key={post.id}
                id={startIndex + index + 1}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
          <div className="pagination">
            <button
              className="pagination-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}Remove-Item

            >
              &lt; Prev
            </button>
            {generatePageNumbers().map((page, index) => (
              <button
                key={index}
                className={`pagination-number ${
                  page === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageClick(page)}
              >
                {typeof page === "number" ? page : "..."}
              </button>
            ))}
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage * POSTS_PER_PAGE >= posts.length}
            >
              Next &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
