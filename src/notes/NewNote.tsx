import React, { useState } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

function NewNote(): JSX.Element {
  const [text, setText] = useState('')
  const [markedText, setMarkedText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
    setMarkedText(DOMPurify.sanitize(marked(e.currentTarget.value)))
  }

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
