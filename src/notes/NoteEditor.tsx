import React, { useState } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'
import useNote from 'hooks/UseNote'
import Note from 'models/Note'

interface NoteEditorParams {
  note: Note
}

function NoteEditor(params: NoteEditorParams): JSX.Element {
  const [markedText, setMarkedText] = useState('')
  const [note, setNote] = useNote({ note: params.note })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setNote({ ...note, content: e.currentTarget.value })
    setMarkedText(DOMPurify.sanitize(marked(e.currentTarget.value)))
  }

  return (
    <div className="editor-preview-container">
      <div className="editor-container">
        <textarea
          className="editor-textarea"
          value={note.content}
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

export default NoteEditor
