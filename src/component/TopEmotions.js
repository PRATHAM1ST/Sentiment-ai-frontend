import React from "react";
import { animated, useTransition, interpolate } from "@react-spring/web";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { LegendOrdinal } from "@visx/legend";
import { scaleThreshold } from "@visx/scale";
import {
	CircleSubject,
	EditableAnnotation,
	Label,
	Annotation,
} from "@visx/annotation";
import { Text } from "@visx/text";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import topEmotions from "./topEmotions.module.css";
import letterFrequency, {
	LetterFrequency,
} from "@visx/mock-data/lib/mocks/letterFrequency";
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
					id={`${arc.data.name}`}
					style={{
						stroke: "#646464",
						strokeWidth: "1px",
						// strokeDasharray: "2, 2",
						strokeLinejoin: "round",
					}}
				/>
				{/* {hasSpaceForLabel && ( */}
				<text
					fill="white"
					x={centroidX}
					y={centroidY}
					// x={centroidX > 0 ? centroidX + 10 : centroidX - 10}
					// y={centroidY > 0 ? centroidY + 10 : centroidY - 10}
					// y={centroidY}
					dy="0.33em"
					// dx= "-2em"
					// angle={10}
					// scaleToFit={true}
					fontSize={10}
					textAnchor="middle"
					pointerEvents="none"
				>
					{getKey(arc)}
				</text>
				{/* // <animated.g style={{ opacity: props.opacity }}> */}
				//{" "}
				{/* <Annotation x={centroidX} y={centroidY}>
					// 		<CircleSubject radius={0}/>
					// 		<Label
					// 			title={getKey(arc)}
					// 			backgroundPadding={0}
					// 			x={centroidX}
					// 			y={centroidY}
					// 			backgroundFill="rgba(0,0,0,0)"
					// 			anchorLineStroke="rgba(0,0,0,0)"
					// 			fontColor="#fff"
					// 			showAnchorLine={false}
					// 		/>
					// 	</Annotation> */}
				{/* // </animated.g> */}
				{/* )} */}
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
		{ name: "Anger", color: "#ea3546", percentage: 46 },
		{ name: "Happiness", color: "#f9c80e", percentage: 30 },
		{ name: "Frustration", color: "#662e9b", percentage: 20 },
		{ name: "Humor", color: "#f86624", percentage: 10 },
		{ name: "Sadness", color: "#43bccd", percentage: 4 },
	];

	const threshold = scaleThreshold({
		domain: elements.map((e) => e.name),
		range: elements.map((e) => e.color),
	});

	// const width = 180;
	// const half = width / 2;

	return (
		<section
			className={`${styles.section} ${topEmotions.card}`}
			id="twitter"
		>
			<div className={styles.header}>
				<h2>Top 5 Emotions</h2>
				<h1><FontAwesomeIcon icon={faChartSimple}/></h1>
			</div>
			<div className={styles.piechartbody}>
				{/* <div className={styles.score}>
					<h4>Total Emotions Analysed</h4>
					<h1>2,390</h1>
				</div> */}
				<div className={styles.piechart}>
					<svg width={width} height={width}>
						<Group top={half} left={half}>
							{/* <Pie
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
							</Pie> */}
							<Pie
								// selectedBrowser
								// 	? browsers.filter(
								// 			({ label }) =>
								// 				label === selectedBrowser
								// 	  )
								// 	: browsers
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
										getColor={
											(arc) => arc.data.color
											// console.log(arc.data.color)
										}
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
