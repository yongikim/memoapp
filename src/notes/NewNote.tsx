import React, { useState, useEffect } from 'react'
import NotesService from 'services/NotesService'
import Note from 'models/Note'
import NoteEditor from 'notes/NoteEditor'

function NewNote(): JSX.Element {
  const [note, setNote] = useState<Note>()

  useEffect(() => {
    NotesService.createNote('New note', '').then((res) => {
      setNote(res.data)
    })
  }, [])

  return note === undefined ? <p>loading...</p> : <NoteEditor note={note} />
}

export default NewNote
