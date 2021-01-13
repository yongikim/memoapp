import Note from 'models/Note'

interface NoteItemParams {
  note: Note
}

function NoteItem(params: NoteItemParams): JSX.Element {
  const { note } = params

  return (
    <>
      <h1>{note.title}</h1>
      <ul>
        <li>{note.user_id}</li>
        <li>{note.created_at}</li>
        <li>{note.updated_at}</li>
      </ul>
      <p>{note.content}</p>
    </>
  )
}

export default NoteItem
