import React from "react"
import NoteInput from "./NoteInput"
import PropTypes from "prop-types"

class NoteCreateForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			body: "",
		}

		this.titleChangeHandler = this.titleChangeHandler.bind(this)
		this.bodyChangeHandler = this.bodyChangeHandler.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	titleChangeHandler(ev) {
		const characterLimit = 50
		if (ev.target.value.length > characterLimit) return

		this.setState({
			title: ev.target.value,
		})
	}

	bodyChangeHandler(ev) {
		this.setState({
			body: ev.target.value,
		})
	}

	submitHandler(ev) {
		ev.preventDefault()
		const { title, body } = this.state
		if (!title || !body) return

		this.props.submitHandler({ title, body })
		this.setState({ title: "", body: "" })
	}

	render() {
		const { title, body } = this.state
		return (
			<div className="note-input">
				<h2 className="note-input__title">Buat catatan</h2>
				<p className="note-input__title__char-limit">
					Sisa karakter: <span>{50 - title.length}</span>
				</p>
				<form onSubmit={this.submitHandler}>
					<div>
						<NoteInput
							handler={this.titleChangeHandler}
							placeholder={"Tulis Judul Disini..."}
							type={"text"}
							value={title}
						/>
					</div>
					<div>
						<NoteInput
							handler={this.bodyChangeHandler}
							placeholder={"Tulis Catatan Disini..."}
							type={"textarea"}
							value={body}
							style={{ height: "200px" }}
						/>
						<button
							type="submit"
							className="mt-4 w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={!title || !body}
						>
							Tambah Catatan
						</button>
					</div>
				</form>
			</div>
		)
	}
}

NoteCreateForm.propTypes = {
	submitHandler: PropTypes.func.isRequired,
}

export default NoteCreateForm
