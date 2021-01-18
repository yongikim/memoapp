import './App.css'
import { AuthContextProvider } from 'contexts/AuthContext'
import MemoApp from 'MemoApp'

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <MemoApp />
    </AuthContextProvider>
  )
}

export default App
