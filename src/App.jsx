import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import MainPage from "./pages/MainPage"
import TrackerPage from "./pages/Trackerpage"
import { UserContextProvider } from "./userContext"
function App() {

  return (
    <>
    <div>
    <UserContextProvider>
    <Routes >
    <Route  path="/" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/tracker" element={<TrackerPage />} />
    </Routes>
    </UserContextProvider>
    </div>
    </>
  )
}

export default App
