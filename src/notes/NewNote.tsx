import React, { useState, useEffect } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

function NewNote(): JSX.Element {
  const [text, setText] = useState('')
  const [markedText, setMarkedText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
    setMarkedText(DOMPurify.sanitize(marked(e.currentTarget.value)))
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(`save ${text}`)
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
