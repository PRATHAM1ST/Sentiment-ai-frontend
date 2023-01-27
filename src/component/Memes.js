import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import memeImg from "./meme.jpeg";

export default function Memes() {
	const [memesData, setMemesData] = useState([
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

	const memesRef = useRef(null);

	function isVisible() {
		const childrens = memesRef.current.children;
		let prevVisible = true;
		for (let index = 0; index < childrens?.length; index++) {
			const rect = childrens[index].getBoundingClientRect();
			if (
				rect.left >= 0 &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			) {
				prevVisible = true;
				childrens[index].style.opacity = "1";
			} else {
				if (!prevVisible) {
					prevVisible = false;
					break;
				}
				childrens[index].style.opacity = "0.25";
			}
		}
	}

	useEffect(() => {
		memesRef && isVisible();
	}, [memesRef]);

	return (
		<div ref={memesRef} className={styles.memes} onScroll={isVisible}>
			{memesData?.map((meme, idx) => (
				<div key={idx} className={styles.meme}>
					<div className={styles.header}>
						<h2>{meme.title}</h2>
						<small>{meme.datetime}</small>
					</div>
					<img src={memeImg} />
					<p>{meme.data}</p>
					<a href={meme.link} target="_blank">
						Link
					</a>
				</div>
			))}
		</div>
	);
}
