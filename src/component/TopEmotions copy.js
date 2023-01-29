import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./index.module.css";
import topEmotions from "./topEmotions.module.css";
import {
	Chart,
	ChartLegend,
	ChartSeries,
	ChartSeriesItem,
	ChartSeriesLabels,
	ChartTooltip,
	ChartTitle,
	ChartArea,
} from "@progress/kendo-react-charts";
import "hammerjs";
const data = [
	{ name: "Anger", color: "#ff0000", percentage: 46 },
	{ name: "Happiness", color: "#ffff00", percentage: 30 },
	{ name: "Frustration", color: "#f00000", percentage: 20 },
	{ name: "Humor", color: "#ff000", percentage: 10 },
	{ name: "Sadness", color: "#ffff00", percentage: 4 }
];
const labelContent = (e) => e.name;
const ChartContainer = () => (
	<section className={`${styles.section} ${topEmotions.card}`} id="twitter">
		<div className={styles.header}>
			<h2>Top 5 Emotions</h2>
			{/* <div className="options">ooo</div> */}
		</div>
		<div className={styles.piechartbody}>
			{/* <div className={styles.score}>
					<h4>Total Emotions Analysed</h4>
					<h1>2,390</h1>
				</div> */}
			<div className={styles.piechart}></div>
			<Chart>
				<ChartSeries>
					<ChartSeriesItem
						type="donut"
						data={data}
						categoryField="name"
						field="name"
						colorField="color"
					>
						<ChartSeriesLabels
							color="#fff"
							background="none"
							content={labelContent}
						/>
					</ChartSeriesItem>
				</ChartSeries>
				<ChartLegend visible={false} />
			</Chart>
		</div>
	</section>
);

// const labelContent = (e) => `${e.category}: \n ${e.data}%`;

// const ChartContainer = () => {
// 	const mapSeries = (series, index, array) => (
// 		<ChartSeriesItem
// 			key={index}
// 			type="donut"
// 			startAngle={150}
// 			name={series.category}
// 			data={series.data}
// 			field="data"
// 			categoryField="category"
// 			colorField="color"
// 		>
// 			{index === array.length - 1 && (
// 				<ChartSeriesLabels
// 					position="outsideEnd"
// 					background="none"
// 					content={labelContent}
// 				/>
// 			)}
// 		</ChartSeriesItem>
// 	);
// 	const renderTooltip = (context) => {
// 		const { category, series, data } = context.point || context;
// 		return (
// 			<div>
// 				{category} ({series.category}): {data}%
// 			</div>
// 		);
// 	};

// 	return (
// 		<section
// 			className={`${styles.section} ${topEmotions.card}`}
// 			id="twitter"
// 		>
// 			<div className={styles.header}>
// 				<h2>Top 5 Emotions</h2>
// 				{/* <div className="options">ooo</div> */}
// 			</div>
// 			<div className={styles.piechartbody}>
// 				{/* <div className={styles.score}>
//  					<h4>Total Emotions Analysed</h4>
//  					<h1>2,390</h1>
//  				</div> */}
// 				<div className={styles.piechart}></div>
// 				<Chart>
// 					<ChartTooltip render={renderTooltip} />
// 					<ChartLegend visible={false} />
// 					<ChartArea background="none" />
// 					<ChartSeries>{data.map(mapSeries)}</ChartSeries>
// 				</Chart>
// 			</div>
// 		</section>
// 	);
// };

export default ChartContainer;
