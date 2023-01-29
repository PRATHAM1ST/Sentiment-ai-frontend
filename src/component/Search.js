import { useEffect, useRef, useState } from "react";
import useSearchData from "../hooks/useSearchData";
import useNewsData from "../hooks/useNewsData";
import styles from "./index.module.css";

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
			<div className={styles.search}>
				<input
					autoFocus
					ref={searchRef}
					className={styles.search}
					type="text"
					placeholder="Ctrl + Space"
					onKeyDown={UserSearch}
				/>
			</div>
			{userSearch.search && (
				<div className={styles.usersearch}>
					<div className={styles.searchtime}>
						{userSearch.datetime}
					</div>
					<div className={styles.searchtitle}>
						{userSearch.search}
					</div>
				</div>
			)}
		</div>
	);
}
