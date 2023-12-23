import React from "react"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Archived from "./pages/Archived"
import DetailNote from "./pages/DetailNote"
import AddNote from "./pages/AddNote"
import PageNotFount from "./pages/404"

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/archives" element={<Archived />} />
					<Route path="/detail/:id" element={<DetailNote />} />
					<Route path="/notes/new" element={<AddNote />} />
					<Route path="/*" element={<PageNotFount />} />
				</Routes>
			</>
		)
	}
}

export default App
