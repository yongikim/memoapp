import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Notes(): JSX.Element {
  const [notes, setNotes] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result: string[] = []

      setNotes(result)
    }

    fetchData()
  }, [])

  return (
    <>
      <ul>
        <li>Note 1</li>
        <li>Note 2</li>
        <li>Note 3</li>
      </ul>
      <p>{notes.length} notes fetched</p>
      <ul>
        {notes.map((note) => (
          <li>{note}</li>
        ))}
      </ul>
      <Link to={'new'}>New note</Link>
    </>
  )
}

export default Notes
