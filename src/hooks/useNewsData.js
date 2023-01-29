import React, { useEffect, useState } from "react";

function useNewsData() {
	const [news, setNews] = useState();

	useEffect(() => {
        if(news){
            fetch('http://localhost:5000/getNews/' + news).then((data)=>{

            })
        }
	}, [news]);

	return [news, setNews];
}

export default useNewsData;
