import React, { useEffect, useState } from "react";

const socket = new WebSocket(`ws://localhost:5000/getEmotions`);

function useSearchData() {
  const [emotions, setEmotions] = useState({});
  const [query, setQuery] = useState("");
  
  // Listen for the server
  socket.onopen = event => {
    console.log("Connected to getEmotions Endpoint")
  };

  // Listen for messages from the server
  socket.onmessage = event => {
    setEmotions(JSON.parse(event.data));
  };

  useEffect(() => {
    if(query){
      socket.send(query);
    }
  }, [query]);

  return [
    emotions,
    query,
    setQuery
  ];
}

export default useSearchData;
