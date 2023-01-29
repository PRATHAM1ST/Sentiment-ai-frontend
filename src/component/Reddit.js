import axios from "axios";
import { useEffect, useState } from "react";
import styles from './index.module.css';
import reddit from './reddit.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

export default function TopLeft() {
	const [elements, setElements] = useState([
		{
			emotion: "Anger",
			percentage: 64.3,
		},
		{
			emotion: "Happiness",
			percentage: 10.2,
		},
		{
			emotion: "Frustration",
			percentage: 5.4,
		},
		{
			emotion: "Joy",
			percentage: 6.7,
		},
		{
			emotion: "Temptation",
			percentage: 3.4,
		},
	]);

	return (
		<section className={`${styles.section} ${reddit.card}`} id="twitter">
			<div className={styles.header}>
				<h2>Reddit</h2>
				<h1><FontAwesomeIcon icon={faRedditAlien}/></h1>
				{/* <div className="options">ooo</div> */}
			</div>
			<div className={styles.body}>
				{elements?.map((element, idx) => (
					<div className={styles.list} key={idx}>
						<li>{element.emotion}</li>
						<div className={styles.numbers}>{element.percentage + " %"}</div>
					</div>
				))}
			</div>
		</section>
	);
}
