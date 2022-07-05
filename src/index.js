import React, { useState } from "react";
import ReactDOM from "react-dom";

// These imports won't work until you fix ./components/index.js

import { Feature, Loading, Preview, Search, Title } from "./components";

// ************ WHICH IS BETTER ↑   or  ↓ **********
// import Feature from "./Feature";
// import Loading from "./loading";
// import Preview from "./Preview";
// import Search from "./Search";

const App = () => {
  /**
   * This App component is our TOP LEVEL component. Any state which needs to be shared between immediate children should
   * be made here, so create state pairs using the useState() hook for the following:
   *
   * searchResults, setSearchResults (default should be this object:  {info: {}, records: []} )
   * featuredResult, setFeaturedResult (default should be null)
   * isLoading, isLoading (default should be false)
   */
  const [isLoading, setisLoading] = useState();
  const [searchResults, setSearchResults] = useState({ info: {}, records: [] });
  const [featuredResult, setFeaturedResult] = useState();
  // * FOR THE FOLLOWING CODE, COMMENT YOUR COMPONENTS IN, AS YOU WORK ON THEM TO AVOID ERRORS BREAKING YOUR CODE!
  return (
    <div className="app">
      <Title />
      <Search setisLoading={setisLoading} setSearchResults={setSearchResults} />

      {/* The following Title component is static, doesn't need any props  **** DONE (?) */}

      {/* The following Search component needs props for setIsLoading and setSearchResults (trigger <Loading /> on search start/end, and transfer results to preview) */}

      {/* <Search /> */}
      {/* The following Preview component needs props for searchResults, setIsLoading and setSearchResults (clicking prev/next buttons), and setFeaturedResult (clicking a preview) */}
      {/* <Preview /> */}
      {/* The following Feature component needs props for featuredResult, as well as setIsLoading and setSearchResults (clicking on searchable properties) */}
      {/* <Feature /> */}
      {/* The following Loading component is static, but should only render when isLoading is true */}
      {/* <Loading /> use a ternary and render null if isLoading is false */}
    </div>
  );
};
export default Search;
ReactDOM.render(<App />, document.getElementById("app"));
