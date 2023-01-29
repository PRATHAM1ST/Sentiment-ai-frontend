// import TopCenter from "./TopEmotions copy";
import TopCenter from "./TopEmotions";
import Twitter from "./Twitter";
import Reddit from "./Reddit";

export default function Analytics() {
	return (
		<div style={{display: "flex", gap: "1em", width: "100%", flexWrap: "wrap", justifyContent: "center"}}>
			<Twitter />
            <TopCenter />
			<Reddit />
		</div>
	);
}
