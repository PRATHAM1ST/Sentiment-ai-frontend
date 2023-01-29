import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export default function Memes({ query }) {
	console.log(query);
	const [memesData, setMemesData] = useState();

	// {
	// 	title: "Cool",
	// 	link: "https://google.com",
	// 	datetime: "2023",
	// 	data: "fen frnjnfr krf kj cjkjcdksnckjnd",
	// },
	// {
	// 	title: "Cool",
	// 	link: "https://google.com",
	// 	datetime: "2023",
	// 	data: "fen frnjnfr krf kj cjkjcdksnckjnd",
	// },
	// {
	// 	title: "Cool",
	// 	link: "https://google.com",
	// 	datetime: "2023",
	// 	data: "fen frnjnfr krf kj cjkjcdksnckjnd",
	// },
	// {
	// 	title: "Cool",
	// 	link: "https://google.com",
	// 	datetime: "2023",
	// 	data: "fen frnjnfr krf kj cjkjcdksnckjnd",
	// },
	// {
	// 	title: "Cool",
	// 	link: "https://google.com",
	// 	datetime: "2023",
	// 	data: "fen frnjnfr krf kj cjkjcdksnckjnd",
	// },
	// {
	// 	title: "Cool",
	// 	link: "https://google.com",
	// 	datetime: "2023",
	// 	data: "fen frnjnfr krf kj cjkjcdksnckjnd",
	// },

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
				childrens[index].style.filter = "blur(0px)";
			} else {
				if (!prevVisible) {
					prevVisible = false;
					break;
				}
				childrens[index].style.filter = "blur(5px)";
			}
		}
	}

	useEffect(() => {
		setMemesData();
		memesRef && isVisible();
		fetch("http://localhost:5000/getMemes/" + query)
			.then((res) => res.json())
			.then((data) => {
				setMemesData(data);
			})
			.catch((e) => {
				throw e;
			});
	}, [memesRef, query]);

	return (
		<>
			<h1>
			<small style={{fontWeight: 100}}>
					<FontAwesomeIcon icon={faMeteor} /> {" "}
					Memes Feed on
				</small>{" "}
				<code>
					<i>{query}</i>
				</code>
			</h1>
			<div ref={memesRef} className={styles.memes} onScroll={isVisible}>
				{memesData?.map((meme, idx) => (
					<div key={idx} className={styles.meme}>
						<LazyLoadImage
							className={styles.background}
							alt={meme.username}
							height={400}
							src={meme.url} // use normal <img> attributes as props
							width={400}
						/>
						<div
							className={styles.header}
							style={{ marginBottom: "1em" }}
						>
							<h2>{meme.username}</h2>
							<small style={{ fontSize: 10 }}>
								{new Date(meme.created_at).toLocaleString()}
							</small>
						</div>
						<LazyLoadImage
							alt={meme.username}
							height={400}
							src={meme.url} // use normal <img> attributes as props
							width={400}
						/>
						<p>{meme.text}</p>
						<a
							href={`https://twitter.com/${meme.username}/status/${meme.id}`}
							target="_blank"
						>
							{/* {meme.username} {meme.id} {meme.url} */}
							Twitter Link
						</a>
					</div>
				))}
			</div>
		</>
	);
}
