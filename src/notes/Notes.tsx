import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NotesService from 'services/NotesService'
import Note from 'models/Note'
import NoteItem from 'notes/Note'

function Notes(): JSX.Element {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      NotesService.listNotes()
        .then((res) => {
          setNotes(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    fetchNotes()
  }, [])

  return (
    <>
      <section>
        <p>{notes.length} notes fetched</p>
      </section>

      <section>
        <Link to={'new'}>New note</Link>
      </section>

      <section>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <NoteItem note={note} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Notes
