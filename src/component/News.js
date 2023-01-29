import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Marquee from "react-fast-marquee";
import useNewsData from "../hooks/useNewsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function News({ query }) {
	const [newsData, setNewsData] = useState([
		{
			title: "News",
			link: "https://google.com",
			datetime: "2023",
			data: "Breaking News...\nSomething has happened and you might want to see it.",
		},
		{
			title: "News",
			link: "https://google.com",
			datetime: "2023",
			data: "Breaking News...\nSomething has happened and you might want to see it.",
		},
		{
			title: "News",
			link: "https://google.com",
			datetime: "2023",
			data: "Breaking News...\nSomething has happened and you might want to see it.",
		},
		{
			title: "News",
			link: "https://google.com",
			datetime: "2023",
			data: "Breaking News...\nSomething has happened and you might want to see it.",
		},
		{
			title: "News",
			link: "https://google.com",
			datetime: "2023",
			data: "Breaking News...\nSomething has happened and you might want to see it.",
		},
		{
			title: "News",
			link: "https://google.com",
			datetime: "2023",
			data: "Breaking News...\nSomething has happened and you might want to see it.",
		},
	]);

	useEffect(() => {
		console.log(query);
		if (query) {
			fetch("http://localhost:5000/getNews/" + query)
				.then((res) => res.json())
				.then((data) => {
					setNewsData(data.articles);
				})
				.catch((e) => {
					throw e;
				});
		}
	}, [query]);

	console.log(newsData);

	return (
		<>
			<h1>
				<small style={{fontWeight: 100}}>
					<FontAwesomeIcon icon={faNewspaper} /> {" "}
					News Feed on
				</small>{" "}
				<code>
					<i>{query}</i>
				</code>
			</h1>
			<Marquee gradientColor={[40, 40, 40]}>
				<div className={styles.newsmarquee}>
					{newsData?.map((news, idx) => (
						<div className={styles.news} key={idx}>
							<LazyLoadImage src={news.urlToImage} />
							<h2>{news.title}</h2>
							<small>
								{new Date(news.publishedAt).toLocaleString()}
							</small>
							<p>{news.description}</p>
							<a href={news.url} target="_blank">
								Check out{" "}
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</a>
						</div>
					))}
				</div>
			</Marquee>
		</>
	);
}
