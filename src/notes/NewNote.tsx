import React, { useState, useEffect } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'
import NotesService from 'services/NotesService'
import Note from 'models/Note'

function NewNote(): JSX.Element {
  const [note, setNote] = useState<Note>()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [markedText, setMarkedText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
    setMarkedText(DOMPurify.sanitize(marked(e.currentTarget.value)))
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (note === undefined) {
        if (title === '' && text === '') {
          console.log('waiting for the user to type something...')
        } else {
          console.log('creating new note')

          // TODO: create new note and do setNote(note)
          // NotesService.createNote('test title from memoapp', text)
          //   .then((res) => {
          //     console.log('save successful.')
          //     console.log(res)
          //     setNote(res.data)
          //   })
          //   .catch((err) => {
          //     console.log('save failed.')
          //     console.log(err)
          //   })
        }
      } else {
        if (note.title == '' && note.content == '') {
          console.log('deleting note')

          // TODO: delete note
          setNote(undefined)
        } else {
          console.log('updating note')

          // TODO: upate note
          // note.content = text
          // note.title = title
        }
      }
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [text])

  return (
    <div className="editor-preview-container">
      <div className="editor-container">
        <textarea
          className="editor-textarea"
          value={text}
          onChange={handleChange}
          placeholder={'memo'}
        />
      </div>
      <div className="preview-container">
        <div
          className="preview-mirror"
          dangerouslySetInnerHTML={{ __html: markedText }}
        />
      </div>
    </div>
  )
}

export default NewNote
