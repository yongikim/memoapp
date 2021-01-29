import { AxiosResponse } from 'axios'
import Note from 'models/Note'
import client from 'services/BaseClient'

const listNotesUrl = 'api/v1/notes'
const postNoteUrl = 'api/v1/notes'
const getNoteUrl = 'api/v1/notes'

export class NotesService {
  listNotes = (): Promise<AxiosResponse<Note[]>> => {
    return client.get<Note[]>(listNotesUrl)
  }

  createNote = (
    title: string,
    content: string,
  ): Promise<AxiosResponse<Note>> => {
    const data = { title, content }

    return client.post<Note>(postNoteUrl, data)
  }

  getNote = (id: number): Promise<AxiosResponse<Note>> => {
    const url = `${getNoteUrl}/${id}`

    return client.get<Note>(url)
  }
}

export default new NotesService()
