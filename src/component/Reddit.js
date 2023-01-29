import axios from "axios";
import { useEffect, useState } from "react";
import styles from './index.module.css';
import reddit from './reddit.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import useNotification from "../hooks/useNotification";


export default function Reddit() {
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
			notification({status: 200, message: "Reddit Posts were successfully analysed"})
		}
	},[elements])

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
						<li>{element.name}</li>
						<div className={styles.numbers}>{element.value + " %"}</div>
					</div>
				))}
			</div>
		</section>
	);
}
