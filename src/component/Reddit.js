import axios from "axios";
import { useEffect, useState } from "react";
import styles from './index.module.css';

export default function TopLeft() {
	const [elements, setElements] = useState([
		"Overview",
		"Campaigns",
		"Ad Group",
		"Keywords",
		"Cool"
	]);

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2>Reddit</h2>
				<div className="options">ooo</div>
			</div>
			<div className={styles.body}>
				{elements?.map((element, idx) => (
					<div className={styles.list} key={idx}>
						<li>{element}</li>
						<div className={styles.numbers}>123</div>
					</div>
				))}
			</div>
		</section>
	);
}
