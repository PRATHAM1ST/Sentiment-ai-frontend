import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import twitter from "./twitter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// for (let index = 0; index <= 100; index+=5) {
// 	console.log(`${index}%{\n\ttop: ${Math.random().toFixed(4)*100};\n\tleft: ${Math.random().toFixed(4)*100};\n}`)
// }

export default function TopLeft() {
	const [elements, setElements] = useState([
		{
			emotion: "Happiness",
			percentage: 50.2,
		},
		{
			emotion: "Anger",
			percentage: 24.3,
		},
		{
			emotion: "Frustration",
			percentage: 5.4,
		},
		{
			emotion: "Joy",
			percentage: 3.67,
		},
		{
			emotion: "Temptation",
			percentage: 3.4,
		},
	]);

	return (
		<section className={`${styles.section} ${twitter.card}`} id="twitter">
			<div className={styles.header}>
				<h2>Twitter</h2>
				<h1><FontAwesomeIcon icon={faTwitter}/></h1>
				{/* <div className="options">ooo</div> */}
			</div>
			<div className={styles.body}>
				{elements?.map((element, idx) => (
					<div className={styles.list} key={idx}>
						<li>{element.emotion}</li>
						<div className={styles.numbers}>
							{element.percentage + " %"}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
