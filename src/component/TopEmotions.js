import React from "react";
import { animated, useTransition, interpolate } from "@react-spring/web";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { scaleThreshold } from "@visx/scale";
import { Text } from "@visx/text";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import topEmotions from "./topEmotions.module.css";
import letterFrequency from "@visx/mock-data/lib/mocks/letterFrequency";
import browserUsage, {
	BrowserUsage as Browsers,
} from "@visx/mock-data/lib/mocks/browserUsage";
import { scaleOrdinal } from "@visx/scale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

let defaultData = { name: "Total", percentage: 1000 };

const fromLeaveTransition = ({ endAngle }) => ({
	// enter from 360° if end angle is > 180°
	startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
	endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
	opacity: 0,
});
const enterUpdateTransition = ({ startAngle, endAngle }) => ({
	startAngle,
	endAngle,
	opacity: 1,
});

function AnimatedPie({
	animate,
	arcs,
	path,
	getKey,
	getColor,
	onClickDatum,
	setActive,
}) {
	const transitions = useTransition(arcs, {
		from: animate ? fromLeaveTransition : enterUpdateTransition,
		enter: enterUpdateTransition,
		update: enterUpdateTransition,
		leave: animate ? fromLeaveTransition : enterUpdateTransition,
		keys: getKey,
	});
	return transitions((props, arc, { key }) => {
		const [centroidX, centroidY] = path.centroid(arc);
		const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

		return (
			<g key={key}>
				<animated.path
					// compute interpolated path d attribute from intermediate angle values
					d={interpolate(
						[props.startAngle, props.endAngle],
						(startAngle, endAngle) =>
							path({
								...arc,
								startAngle,
								endAngle,
							})
					)}
					fill={getColor(arc)}
					onClick={() => onClickDatum(arc)}
					onTouchStart={() => onClickDatum(arc)}
					onMouseEnter={() => setActive(arc.data)}
					onMouseLeave={() => setActive(defaultData)}
					id={`${arc.data.name} ${arc.data.color}`}
					style={{
						stroke: "#646464",
						strokeWidth: "1px",
						strokeLinejoin: "round",
					}}
				/>
				{/* {hasSpaceForLabel && ( */}
				<text
					fill="white"
					x={centroidX}
					y={centroidY}
					dy="0.33em"
					fontSize={10}
					textAnchor="middle"
					pointerEvents="none"
				>
					{getKey(arc)}
				</text>
			</g>
		);
	});
}

export default function TopCenter() {
	const [active, setActive] = useState(defaultData);

	// data and types
	const margin = { top: 20, right: 20, bottom: 20, left: 20 };

	const height = 350;
	const width = 350;
	const half = width / 2;
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;
	const radius = Math.min(innerWidth, innerHeight) / 2;
	const donutThickness = 60;

	let animate = true;

	const BrowserUsage = {
		label: String,
		usage: Number,
	};

	const letters = letterFrequency.slice(0, 4);
	const browserNames = Object.keys(browserUsage[0]).filter(
		(k) => k !== "date"
	);
	const browsers = browserNames.map((name) => ({
		label: name,
		usage: Number(browserUsage[0][name]),
	}));

	// accessor functions
	const usage = (d) => d.usage;
	const frequency = (d) => d.frequency;

	// color scales

	const [selectedBrowser, setSelectedBrowser] = useState(null);

	if (width < 10) return null;

	const elements = [
		{ name: "Waiting", color: "#ea3546", percentage: 20 },
		{ name: "Waiting", color: "#f9c80e", percentage: 20 },
		{ name: "Waiting", color: "#662e9b", percentage: 20 },
		{ name: "Waiting", color: "#f86624", percentage: 20 },
		{ name: "Waiting", color: "#43bccd", percentage: 20 },
	];

	const threshold = scaleThreshold({
		domain: elements.map((e) => e.name),
		range: elements.map((e) => e.color),
	});

	return (
		<section
			className={`${styles.section} ${topEmotions.card}`}
			id="twitter"
		>
			<div className={styles.header}>
				<h2>Top 5 Emotions</h2>
				<h1>
					<FontAwesomeIcon icon={faChartSimple} />
				</h1>
			</div>
			<div className={styles.piechartbody}>
				<div className={styles.piechart}>
					<svg width={width} height={width}>
						<Group top={half} left={half}>
							<Pie
								data={elements}
								pieValue={(data) => data.percentage}
								outerRadius={radius}
								innerRadius={radius - donutThickness}
								cornerRadius={3}
								padAngle={0.005}
							>
								{(pie) => (
									<AnimatedPie
										{...pie}
										animate={animate}
										getKey={(arc) => arc.data.name}
										setActive={setActive}
										onClickDatum={({ data: { label } }) =>
											animate &&
											setSelectedBrowser(
												selectedBrowser &&
													selectedBrowser === label
													? null
													: label
											)
										}
										getColor={(arc) => arc.data.color}
									/>
								)}
							</Pie>

							<Text
								textAnchor="middle"
								fontSize={20}
								dy={-20}
								fill="black"
							>
								{active?.name}
							</Text>
							<Text
								textAnchor="middle"
								dy={30}
								fontSize={50}
								fill="black"
							>
								{(active?.percentage /
									defaultData?.percentage) *
									100 +
									"%"}
							</Text>
						</Group>
					</svg>
				</div>
			</div>
		</section>
	);
}
