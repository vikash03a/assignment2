import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../Blog";
import { getNoOfPage, getPagesFromPage } from "../Utils/home.utils";
import { NO_OF_BLOGS_PER_PAGE } from "../Utils/home.constants";
import Pagination from "@mui/material/Pagination";
import NavBar from "../NavBar/NavBar.component";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [pageDetails, setPageDetails] = useState({ currentPage: 1 });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
      });
  }, []);

  useEffect(() => {
    if (posts.length !== 0) {
      const pages = getNoOfPage(posts.length, NO_OF_BLOGS_PER_PAGE);
      setPageDetails((oldState) => ({ ...oldState, noOfPages: pages }));
    }
  }, [posts]);
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px"
        }}
      >
        {getPagesFromPage(
          posts,
          pageDetails.currentPage,
          NO_OF_BLOGS_PER_PAGE
        ).map((post, index) => (
          <div key={index}>
            <Blog title={post.title} body={post.body} onEdit={(id) => {}} />
          </div>
        ))}
      </Box>
      <Pagination
        count={pageDetails.noOfPages}
        page={pageDetails.currentPage}
        onChange={(event, value) => {
          setPageDetails((oldState) => ({ ...oldState, currentPage: value }));
        }}
      />
      <div></div>
    </>
  );
}
