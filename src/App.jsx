import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoList from "./routes/RepoList";
import RepoDetails from "./routes/RepoDetails";
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/repo/:repoName" element={<RepoDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
