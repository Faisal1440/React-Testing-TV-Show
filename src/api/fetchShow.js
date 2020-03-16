import React from "react";
import  axios from 'axios';

// abstracting

export const fetchShow = () => {

  return axios.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
    .then(res => {
      console.log("Res in fetchShow.js", res)
          return res.data
});
};