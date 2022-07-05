import React from "react";
import Title from "./Title";

// import Feature from "./Feature";
// import Loading from "./loading";
// import Preview from "./Preview";
// import Search from "./Search";
//
// ***********DOES THIS ↑↑ GO IN API LIKE THIS? ↑ ***********

/*
 * The index.js file is used to re-export from our separate files, that way rather than write:
 *
 * import Feature from './components/Feature';
 *
 * we can write:
 *
 * import { Feature } from './components';
 *
 * since index.js is assumed as part of the import when you specify a folder
 *
 * Re-export Feature, Loading, Preview, Search, and Title from their respective files
 */
//  const Title = () => {
//     return <h1>Title</h1>;

//   };

// export { default as Title } from "./Title";
// export { default as Loading } from "./loading";

// ReactDOM.render({ Title });

// ReactDOM.render(< Title>, document.getElementById("app"))/>Feature>Feature>;
export { default as Search } from "./Search";
export { default as Title } from "./Title";
