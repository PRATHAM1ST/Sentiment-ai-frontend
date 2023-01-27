import { useState } from "react";
import styles from "./index.module.css";
import Marquee from "react-fast-marquee";

export default function News() {
	const [newsData, setNewsData] = useState([
		{
			title: "Cool",
			link: "https://google.com",
			datetime: "2023",
			data: "fen frnjnfr krf kj cjkjcdksnckjnd",
		},
		{
			title: "Cool",
			link: "https://google.com",
			datetime: "2023",
			data: "fen frnjnfr krf kj cjkjcdksnckjnd",
		},
		{
			title: "Cool",
			link: "https://google.com",
			datetime: "2023",
			data: "fen frnjnfr krf kj cjkjcdksnckjnd",
		},
		{
			title: "Cool",
			link: "https://google.com",
			datetime: "2023",
			data: "fen frnjnfr krf kj cjkjcdksnckjnd",
		},
		{
			title: "Cool",
			link: "https://google.com",
			datetime: "2023",
			data: "fen frnjnfr krf kj cjkjcdksnckjnd",
		},
		{
			title: "Cool",
			link: "https://google.com",
			datetime: "2023",
			data: "fen frnjnfr krf kj cjkjcdksnckjnd",
		},
	]);

	return (
		<Marquee gradientColor={[72, 75, 78]}>
			<div className={styles.newsmarquee}>
				{newsData?.map((news, idx) => (
					<div className={styles.news} key={idx}>
						<h2>{news.title}</h2>
						<small>{news.datetime}</small>
						<p>{news.data}</p>
						<a href={news.link} target="_blank">Check out</a>
					</div>
				))}
			</div>
		</Marquee>
	);
}
