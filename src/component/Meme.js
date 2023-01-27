import { useEffect, useRef, useState } from "react";
import memeImg from "./meme.jpeg";

export default function Meme({meme, key}) {
	const ref = useRef(null);
    const [visible, setVisible] = useState(false);

	useEffect(() => {
		const rect = ref?.current.getBoundingClientRect();
		// console.log(ref.current);
        // console.log(rect);
		if (
		    rect.top >= 0 &&
		    rect.left >= 0 &&
		    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		) setVisible(true)
	}, [ref]);

	return (
		<></>
	);
}
