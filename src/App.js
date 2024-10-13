import { BrowserRouter, Route, Switch, useNavigate, Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'

function App() {

  const { authIsReady, user  } = useAuthContext()
  const navigate = useNavigate()

  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/"
            element={(!user && <Navigate to="/login" />) || (user && <Home />)}>
            </Route>
            <Route path="/login"
            element={(user && <Navigate to="/" />) || (!user && <Login />) }>
            </Route>
            <Route path="/signup"
            element={(user && <Navigate to="/" />) || (!user && <Signup />)}>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
