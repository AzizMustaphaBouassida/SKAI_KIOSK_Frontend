import '../styles/App.css'
import '../i18n/i18n.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '../contexts/ThemeContext.jsx'
import routes from './routes'
function App() {

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
