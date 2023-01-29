import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function News({ query }) {
	const [newsData, setNewsData] = useState([
		{
			source: {
				id: "engadget",
				name: "Engadget",
			},
			author: "Kris Holt",
			title: "ASUS' latest Zenbook Pro 16X OLED has more space to stay cool",
			description:
				"Along with its gaming-focused laptops and models that offer 3D visuals without the need for glasses, ASUS had some upgraded general-purpose systems to show off at CES. Depending on how you spec them, though, the likes of Elden Ring should still look pretty gr…",
			url: "https://www.engadget.com/asus-zenbook-oled-ces-2023-190025437.html",
			urlToImage:
				"https://s.yimg.com/os/creatr-uploaded-images/2022-12/c003f9b0-87c0-11ed-9fff-0afa1d554f1a",
			publishedAt: "2023-01-04T19:00:25Z",
			content:
				"Along with its gaming-focused laptops and models that offer 3D visuals without the need for glasses, ASUS had some upgraded general-purpose systems to show off at CES. Depending on how you spec them,… [+2832 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Chris Baraniuk",
			title: "It’s Getting Too Hot to Make Snow",
			description:
				"Some ski resorts rely on machines to keep powder on the slopes. But snow guns guzzle water, are energy-intensive, and need cool temperatures to operate.",
			url: "https://www.wired.com/story/fixing-snow-shortages/",
			urlToImage:
				"https://media.wired.com/photos/63c6f5c9ba53d80ea8aba540/191:100/w_1280,c_limit/Fake_snow_climate_Science_GettyImages-1246277721.jpg",
			publishedAt: "2023-01-18T12:00:00Z",
			content:
				"Ted Shepherd, a climate scientist at the University of Reading in the UK, knows what its like to arrive at a ski resort only to find that the snow is holidaying elsewhere. This Christmas, he went to … [+3686 chars]",
		},
		{
			source: {
				id: "bbc-news",
				name: "BBC News",
			},
			author: "https://www.facebook.com/bbcnews",
			title: "Snot bubbles and belly flops keep echidnas cool, research finds",
			description:
				"Australian researchers discovered the native animal's unusual cooling methods using thermal imaging.",
			url: "https://www.bbc.co.uk/news/world-australia-64313853",
			urlToImage:
				"https://ichef.bbci.co.uk/news/1024/branded_news/A283/production/_128330614_echidnati01.jpg",
			publishedAt: "2023-01-18T05:13:56Z",
			content:
				"Echidnas blow snot bubbles and do belly flops to keep themselves cool in the Australian heat, new research has found.\r\nThe native animals are believed to less tolerant to hot weather than other Austr… [+1246 chars]",
		},
		{
			source: {
				id: "ars-technica",
				name: "Ars Technica",
			},
			author: "Jennifer Ouellette",
			title: "This cool new approach to refrigeration could replace harmful chemicals",
			description:
				"New method uses salt and an organic solvent to change a material’s melting point.",
			url: "https://arstechnica.com/science/2023/01/future-refrigerators-could-use-ionocaloric-cooling/",
			urlToImage:
				"https://cdn.arstechnica.net/wp-content/uploads/2023/01/caloriccooling-760x380.jpg",
			publishedAt: "2023-01-12T23:46:26Z",
			content:
				"Enlarge/ Berkeley Lab scientists have developed ionocaloric cooling, a new refrigeration cycle they hope could help phase out refrigerants that contribute to global warming.\r\n7 with 0 posters partici… [+2893 chars]",
		},
		{
			source: {
				id: null,
				name: "Lifehacker.com",
			},
			author: "Allie Chanthorn Reinmann",
			title: "Make Mini Beef Wellingtons for Your Fancy Football Party",
			description:
				"Assembling a classic beef Wellington is a bit of a dramatic process. There’s a hectic rolling procedure, long bake time, and when you slice it to serve, all of the delicious goodies fall out. As with my outlook on 2023, I’m choosing to take the drama out of i…",
			url: "https://lifehacker.com/make-mini-beef-wellingtons-for-your-fancy-football-part-1849944627",
			urlToImage:
				"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e8e47d0ffbf13ba17c4b823e56e7af00.jpg",
			publishedAt: "2023-01-03T20:30:00Z",
			content:
				"Assembling a classic beef Wellington is a bit of a dramatic process. Theres a hectic rolling procedure, long bake time, and when you slice it to serve, all of the delicious goodies fall out. As with … [+4885 chars]",
		},
		{
			source: {
				id: "engadget",
				name: "Engadget",
			},
			author: "Igor Bonifacic",
			title: "Hyundai managed to put its 'crab-walking' e-Corner technology into an Ioniq EV",
			description:
				"Five years after debuting at CES 2018, Hyundai’s e-Corner technology is closer to reality. Following its most recent appearance at CES 2021\r\n, the system was on display at last week’s show. And this time around, rather than building a dedicated prototype to s…",
			url: "https://www.engadget.com/hyundai-integrated-its-crabwalking-e-corner-technology-into-an-ioniq-5-ev-190443090.html",
			urlToImage:
				"https://s.yimg.com/os/creatr-uploaded-images/2023-01/4aa25a70-9118-11ed-bde3-1c723b7cdd9b",
			publishedAt: "2023-01-10T19:04:43Z",
			content:
				"Five years after debuting at CES 2018, Hyundais e-Corner technology is closer to reality. Following its most recent appearance at CES 2021\r\n, the system was on display at last weeks show. And this ti… [+1086 chars]",
		},
		{
			source: {
				id: null,
				name: "Android Central",
			},
			author: "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
			title: "Quest hand tracking still sucks but at least Silhouette makes good use of it",
			description:
				"A new hand-tracking game on the Oculus Quest 2 highlights just how simultaneously cool and frustrating the tech can be.",
			url: "https://www.androidcentral.com/gaming/virtual-reality/quest-hand-tracking-still-sucks-but-at-least-silhouette-makes-good-use-of-it",
			urlToImage:
				"https://cdn.mos.cms.futurecdn.net/niaZukLkY6Z42HzBamnuuC-1200-80.jpg",
			publishedAt: "2023-01-26T18:00:00Z",
			content:
				"Imagine for a moment that you were holding up a flashlight with one hand, using it to cast shadows on the wall with the other. Suddenly, little creatures begin crawling on your shadow in an effort to… [+3823 chars]",
		},
		{
			source: {
				id: "reuters",
				name: "Reuters",
			},
			author: null,
			title: "Fed's Williams says Fed needs more rate rises to cool inflation - Reuters.com",
			description:
				"Federal Reserve Bank of New York President John Williams said on Thursday the U.S. central bank has more rate hikes ahead and sees signs inflationary pressures might be starting to cool off from torrid levels.",
			url: "https://www.reuters.com/markets/us/feds-williams-says-fed-needs-more-rate-rises-cool-inflation-2023-01-19/",
			urlToImage:
				"https://www.reuters.com/resizer/71vFR3tGS7gYKq88vkb4u5RpRec=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UJFN5MPHOVKRBLAKTI6GKCWWHA.jpg",
			publishedAt: "2023-01-19T23:36:00Z",
			content:
				"NEW YORK, Jan 19 (Reuters) - Federal Reserve Bank of New York President John Williams said on Thursday the U.S. central bank has more rate hikes ahead and sees signs inflationary pressures might be s… [+2570 chars]",
		},
		{
			source: {
				id: "reuters",
				name: "Reuters",
			},
			author: null,
			title: "'Joe Cool' delivers as Bengals plow Bills to reach AFC ... - Reuters",
			description:
				"Quarterback Joe Burrow overcame driving snow and a hostile road environment, leading the Cincinnati Bengals past the favored Buffalo Bills 27-10 and reach the AFC Championship game for the second straight year.",
			url: "https://www.reuters.com/lifestyle/sports/joe-cool-delivers-bengals-plow-bills-reach-afc-championship-game-2023-01-23/",
			urlToImage:
				"https://www.reuters.com/resizer/cioiInJSqe1OXFIJa-D4ndPQ5UQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MHGHS5BY4VJ73GZYSOQFXV2LFU.jpg",
			publishedAt: "2023-01-23T01:04:00Z",
			content:
				"Jan 22 (Reuters) - Quarterback Joe Burrow overcame driving snow and a hostile road environment, leading the Cincinnati Bengals past the favored Buffalo Bills 27-10 and reach the AFC Championship game… [+1823 chars]",
		},
		{
			source: {
				id: "business-insider",
				name: "Business Insider",
			},
			author: "aharoun@insider.com (Azmi Haroun)",
			title: "Feds seized a party boat, a Rolls Royce, and a motorcycle from a man accused of using COVID loans to buy his way into a Texas yacht club",
			description:
				'Michael George McQuarn submitted 10 PPP loans under four different business names, including one titled "Cool Kids Entertainment Group, LLC."',
			url: "https://www.businessinsider.com/feds-seized-party-boat-rolls-royce-covid-fraud-scheme-2023-1",
			urlToImage:
				"https://i.insider.com/63d43d594589790018e5952c?width=1200&format=jpeg",
			publishedAt: "2023-01-27T23:13:39Z",
			content:
				"A Texas man's 26-foot party boat, Rolls Royce, and yacht club membership were repossessed by the federal government after he had embezzled millions in a COVID fraud scheme, prosecutors said.\r\nAustin,… [+2114 chars]",
		},
	]);

	useEffect(() => {
		console.log(query);
		if (query) {
			fetch("http://localhost:5000/getNews/" + query)
				.then((res) => res.json())
				.then((data) => {
					setNewsData(data.articles);
				})
				.catch((e) => {
					throw e;
				});
		}
	}, [query]);

	console.log(newsData);

	return (
		<>
			<h1>
				<small style={{ fontWeight: 220 }}>
					<FontAwesomeIcon icon={faNewspaper} /> News Feed on
				</small>{" "}
				<code>
					<i>{query}</i>
				</code>
			</h1>
			<Marquee gradientColor={[255, 247, 233]}>
				<div className={styles.newsmarquee}>
					{newsData?.map((news, idx) => (
						<div className={styles.news} key={idx}>
							<LazyLoadImage src={news.urlToImage} />
							<h2 style={{ color: "#1746A2" }}>{news.title}</h2>
							<small>
								{new Date(news.publishedAt).toLocaleString()}
							</small>
							<p>{news.description}</p>
							<a href={news.url} target="_blank">
								Check out{" "}
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</a>
						</div>
					))}
				</div>
			</Marquee>
		</>
	);
}
