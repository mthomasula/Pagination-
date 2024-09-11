import { useState, useEffect } from "react";
import searchPosts from "../api";
import Post from "./Post";
import PaginationControles from "./PaginationControls";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const pageForward = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageBack = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const handleFetch = async () => {
      const postResults = await searchPosts();

      setPosts(postResults);
    };

    handleFetch();
  }, []);

  const postElements = posts.map((post) => {
    return <Post key={post.id} title={post.title} body={post.body}></Post>;
  });

  //get current subset of posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postElements.slice(indexOfFirstPost, indexOfLastPost);
  //

  return (
    <div>
      {posts.length === 0 ? <div>Loading...</div> : <div>{currentPosts}</div>}
      <div style={{ paddingLeft: "300px" }}>
        <PaginationControles
          pageForward={pageForward}
          pageBack={pageBack}
          lastPage={posts.length / postsPerPage}
        />
      </div>
    </div>
  );
}

export default App;
