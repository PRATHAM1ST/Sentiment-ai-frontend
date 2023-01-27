import axios from "axios";
import { useEffect, useState } from "react";
import styles from './index.module.css';

export default function TopCenter() {
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
				<h2>Top 5 Emotions</h2>
				<div className="options">ooo</div>
			</div>
			<div className={styles.body}>
				<div className={styles.score}>
                    <h4>Total Emotions Analysed</h4>
                    <h1>2,390</h1>
                </div>
                <div className={styles.piechart}>
                    
                </div>
			</div>
		</section>
	);
}
