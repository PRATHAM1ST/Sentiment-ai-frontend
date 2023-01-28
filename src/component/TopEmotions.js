import React from "react";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function TopCenter() {
	const [elements, setElements] = useState([
		{ name: "Overview", color: "skyblue", percentage: 20 },
		{ name: "Campaigns", color: "lime", percentage: 20 },
		{ name: "Ad Group", color: "grey", percentage: 20 },
		{ name: "Keywords", color: "yellow", percentage: 50 },
		{ name: "Cool", color: "pink", percentage: 20 },
	]);

	const width = 180;
	const half = width / 2;

	const [active, setActive] = useState(null);

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2>Top 5 Emotions</h2>
				<div className="options">ooo</div>
			</div>
			<div className={styles.piechartbody}>
				<div className={styles.score}>
					<h4>Total Emotions Analysed</h4>
					<h1>2,390</h1>
				</div>
				<div className={styles.piechart}>
					<svg width={width} height={width}>
						<Group top={half} left={half}>
							<Pie
								data={elements}
								pieValue={(data) => data.percentage}
								outerRadius={half}
								innerRadius={({data})=>{
									const size = active && active.name === data.name ? 20 : 10;
									return half- size
								}}
								padAngle={0.09}
							>
								{(pie) =>
									pie.arcs.map((arc) => (
										<g
											key={arc.data.name}
											onMouseEnter={() => setActive(arc.data)}
											onMouseLeave={() => setActive(null)}
										>
											<path
												d={pie.path(arc)}
												fill={arc.data.color}
											></path>
										</g>
									))
								}
							</Pie>
							<Text textAnchor="middle" fontSize={20} fill="rgb(255,255,255)">{active?.name}</Text>
						</Group>
					</svg>
				</div>
			</div>
		</section>
	);
}
