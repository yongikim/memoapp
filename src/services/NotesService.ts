import axios, { AxiosResponse } from 'axios'
import Note from 'models/Note'

const listNotesUrl = 'api/v1/notes'
const postNoteUrl = 'api/v1/notes'

export class NotesService {
  client = axios.create({
    baseURL: process.env['REACT_APP_API_BASE_URL'],
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    withCredentials: true,
  })

  listNotes = (): Promise<AxiosResponse<Note[]>> => {
    return this.client.get<Note[]>(listNotesUrl)
  }

  createNote = (
    title: string,
    content: string,
  ): Promise<AxiosResponse<Note>> => {
    const data = { title, content }

    return this.client.post<Note>(postNoteUrl, data)
  }
}

export default new NotesService()
