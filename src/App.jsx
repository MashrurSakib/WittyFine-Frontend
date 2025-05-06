import './index.css'
import { routerpaths } from './utils/react-router-dom/reactRouter'
import { RouterProvider } from 'react-router-dom'
import ContactCalltoAction from './shared/Drawer/ContactCalltoAction/ContactCalltoAction'
import Chatbot from './components/Chatbot/Chatbot'

function App() {
  return (
    <div className="App" style={{ width: '100vw' }}>
      <ContactCalltoAction>
        <RouterProvider router={routerpaths} />
      </ContactCalltoAction>
      <Chatbot />
    </div>
  )
}

export default App
