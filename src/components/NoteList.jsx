import React from "react"
import NoteItem from "./NoteItem"
import PropTypes from "prop-types"

function NoteList({ notes, archiveHandler, deleteHandler }) {
	return (
		<div>
			<div>
				<div className="notes-list">
					{notes.length ? (
						notes.map((note) => (
							<NoteItem
								note={note}
								key={note.id}
								archiveHandler={archiveHandler}
								deleteHandler={deleteHandler}
							/>
						))
					) : (
						<p className="notes-list-empty page-not-found">
							Tidak ada catatan.
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
	archiveHandler: PropTypes.func.isRequired,
	deleteHandler: PropTypes.func.isRequired,
}

export default NoteList
