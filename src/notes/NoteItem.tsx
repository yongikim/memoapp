import Note from 'models/Note'
import { AuthContext } from 'contexts/AuthContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

interface NoteItemParams {
  note: Note
}

function NoteItem(params: NoteItemParams): JSX.Element {
  const authContext = useContext(AuthContext)
  const { note } = params

  return (
    <>
      <h1>{note.title}</h1>

      {authContext.state.auth ? (
        <div>
          <ul>
            <li>
              <Link to={`notes/${note.id}/edit`}>edit</Link>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}

      <div>
        <ul>
          <li>{note.user_id}</li>
          <li>{note.created_at}</li>
          <li>{note.updated_at}</li>
        </ul>
        <p>{note.content}</p>
      </div>
    </>
  )
}

export default NoteItem
