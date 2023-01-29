import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Marquee from "react-fast-marquee";
import useNewsData from "../hooks/useNewsData";

export default function News({ queryGiven }) {
	const [news, setNews] = useNewsData();
	useEffect(()=>{
		setNews(queryGiven)
	}, [])

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

	return (
		<Marquee gradientColor={[40, 40, 40]}>
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
