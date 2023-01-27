import { useRef, useState } from "react";
import styles from "./index.module.css";

export default function Search() {
	const searchRef = useRef(null);
	const [userSearch, setUserSearch] = useState({ search: "", datetime: "" });

	document.onkeydown = function (e) {
		if (e.ctrlKey && e.code === "Space") {
			console.log(searchRef.current);
			searchRef.current.focus();
		}
	};

	function UserSearch(e) {
		if(e.code === "Enter"){
			setUserSearch({
				search: searchRef.current.value,
				datetime: new Date().toUTCString() + ""
			})
			searchRef.current.value = ""
		}
	}

	return (
		<div className={styles.searchbox}>
			<input
				ref={searchRef}
				className={styles.search}
				type="text"
				placeholder="Ctrl + Space"
				onKeyDown={UserSearch}
			/>
			<div className={styles.usersearch}>
				<div className={styles.searchtime}>
					{userSearch.datetime}
				</div>
				<div className={styles.searchtitle}>
					{userSearch.search}
				</div>
			</div>
		</div>
	);
}
