import React, { useState } from "react";
import ReactDOM from "react-dom";
export const BASE_URL = "https://api.harvardartmuseums.org";
export const KEY = "apikey=b88b88da-9451-40c6-872c-480999d8ebd0";

function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}

fetchObjects();
