import { useEffect, useRef, useState } from "react";
import useSearchData from "../hooks/useSearchData";
import useNewsData from "../hooks/useNewsData";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const client = new WebSocket("ws://localhost:5000");

export default function Search({ setQueryGiven }) {
	const searchRef = useRef(null);
	const [userSearch, setUserSearch] = useState({ search: "", datetime: "" });
	const [emotions, query, setQuery] = useSearchData();

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

	return (
		<div
			className={styles.searchbox}
			style={{ gap: userSearch.search ? "2em" : "0" }}
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
			</div>
			{userSearch.search && (
				<div className={styles.usersearch}>
					<h1 className={styles.searchtitle}>
						{userSearch.search}
					</h1>
					<small className={styles.searchtime}>
						{userSearch.datetime}
					</small>
				</div>
			)}
		</div>
	);
}
