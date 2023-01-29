import { useEffect, useRef, useState } from "react";
import useSearchData from "../hooks/useSearchData";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "react-toggle/style.css";

const client = new WebSocket("ws://localhost:5000");

export default function Search({ setQueryGiven }) {
	const searchRef = useRef(null);
	const [userSearch, setUserSearch] = useState({ search: "", datetime: "" });
	const [emotions, query, setQuery] = useSearchData();
	const [switchElem, setSwitchElem] = useState(false);

	document.onkeydown = function (e) {
		if (e.ctrlKey && e.code === "Space") {
			searchRef.current.focus();
		}
	};

	function UserSearch(e) {
		if (e.code === "Enter") {
			setQuery(searchRef.current.value);
			setUserSearch({
				search: searchRef.current.value,
				datetime: new Date().toLocaleString() + "",
			});
			setQueryGiven(searchRef.current.value);
			searchRef.current.value = "";
		}
	}

	console.log(switchElem);

	return (
		<div
			className={styles.searchbox}
			style={{ gap: userSearch.search ? "2em" : "0"}}
		>
			{userSearch.search && (
				<div className={styles.usersearch}>
					<h1>Sentiments-AI</h1>
					<small>❤️ with AInoders</small>
				</div>
			)}
			<div className={styles.search}>
				<input
					autoFocus
					ref={searchRef}
					className={styles.search}
					type="text"
					placeholder={`Ctrl + Space`}
					onKeyDown={UserSearch}
				/>
				<h1 className={styles.searchIcon}>
					<FontAwesomeIcon icon={faSearch} />
				</h1>
				<label class="toggleSwitch nolabel" onclick="">
					<input type="checkbox" value={switchElem} onChange={()=>setSwitchElem(!switchElem)} />
					<a></a>
					<span>
						<span class="left-span">Emotions</span>
						<span class="right-span">Product</span>
					</span>
				</label>
			</div>
			{userSearch.search && (
				<div className={styles.usersearch}>
					<h1 className={styles.searchtitle}>{userSearch.search}</h1>
					<small className={styles.searchtime}>
						{userSearch.datetime}
					</small>
				</div>
			)}
		</div>
	);
}
