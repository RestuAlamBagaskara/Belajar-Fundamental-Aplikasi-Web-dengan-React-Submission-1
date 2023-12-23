import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
	return (
		<nav>
			<Link to="/">List</Link>
			<Link to="/archives">Arsip</Link>
			<Link to="/notes/new">Tambah</Link>
		</nav>
	)
}

export default Navigation
