import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import twitter from "./twitter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import useNotification from "../hooks/useNotification";

// for (let index = 0; index <= 100; index+=5) {
// 	console.log(`${index}%{\n\ttop: ${Math.random().toFixed(4)*100};\n\tleft: ${Math.random().toFixed(4)*100};\n}`)
// }

export default function Twitter() {
	const [elements, setElements] = useState([
		{
			name: "Waiting...",
			value: 0,
		},
		{
			name: "Waiting...",
			value: 0,
		},
		{
			name: "Waiting...",
			value: 0,
		},
		{
			name: "Waiting...",
			value: 0,
		},
		{
			name: "Waiting...",
			value: 0,
		},
	]);

	const notification = useNotification();

	useEffect(()=>{
		if(elements){
			notification({status: 200, message: "Tweets were successfully analysed"})
		}
	},[elements])

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
						<li>{element.name}</li>
						<div className={styles.numbers}>
							{element.value + " %"}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
