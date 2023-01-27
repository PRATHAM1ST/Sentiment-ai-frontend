import TopCenter from "./TopCenter";
import TopLeft from "./TopLeft";

export default function Analytics() {
	return (
		<div style={{display: "flex", gap: "1em"}}>
			<TopLeft />
            <TopCenter />
			<TopLeft />
		</div>
	);
}
