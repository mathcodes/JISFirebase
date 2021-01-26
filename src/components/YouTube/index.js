import React, { useState, useEffect } from "react";
import Container from "../Container";
import CCSearchForm from "../CCSearchForm";
import CCSearchResults from "../CCSearchResults";
// import Alert from "../Alert";
import ArticleContext from "../../utils/ArticleContext";
import YouTubeAPI from "../../utils/YouTubeAPI";

//change the state... title and URL of the number
function YouTube() {
  const [articleState, setArticleState] = useState({  // |
    title: "",                                        // |
    url: ""                                           // | 
  });
// in essence the goal of this is to make articleState available in an article context
// so we have created an ArticleContext to do that for us: src/util/ArticleContext.js
  const [search, setSearch] = useState("youTube");
  const [Error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "JobInSight";

    if (!search) {
      return;
    }
// only difference here is that we areusing the set article state tp set those two 
// pieces of state as opposed to calling 2 individiually. 
YouTubeAPI.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found."); 
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticleState({ //now using these 2 pieces of state @ same time
          title: res.data[1][0],
          url: res.data[2][0]
        });
      })
      .catch(err => setError(err));
  }, );

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <ArticleContext.Provider value={articleState}>
    <h5>YouTube</h5>
      <div>
        <Container style={{ minHeight: "" }}>
          <CCSearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <CCSearchResults />
        </Container>
      </div>
    </ArticleContext.Provider>
  );
}

export default YouTube;
