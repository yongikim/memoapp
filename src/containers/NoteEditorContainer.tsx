import React, { useState, useEffect } from 'react'
import NotesService from 'services/NotesService'
import Note from 'models/Note'
import NoteEditor from 'notes/NoteEditor'
import { Redirect, RouteComponentProps } from 'react-router-dom'

type NoteEditorContainerProps = RouteComponentProps<{ id: string }>

function NoteEditorContainer({
  match: { params },
}: NoteEditorContainerProps): JSX.Element {
  const id = params.id
  const [note, setNote] = useState<Note>()

  if (isNaN(Number(id))) {
    return <Redirect to="/" />
  }

  useEffect(() => {
    NotesService.getNote(Number(id)).then((res) => {
      setNote(res.data)
    })
  }, [])

  return note === undefined ? <p>loading...</p> : <NoteEditor note={note} />
}

export default NoteEditorContainer
