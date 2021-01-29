import { useState, useEffect } from 'react'
import Note from 'models/Note'

interface UseNoteProps {
  note: Note
}

const useNote = (
  props: UseNoteProps,
): [Note, React.Dispatch<React.SetStateAction<Note>>] => {
  const [note, setNote] = useState<Note>(props.note)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (note.title == '' && note.content == '') {
        console.log('deleting note')

        // TODO: delete note?
      } else {
        console.log('updating note')

        // TODO: upate note
        // note.content = text
        // note.title = title
      }
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [note])

  return [note, setNote]
}

export default useNote
