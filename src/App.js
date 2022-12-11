import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './App.scss';

// Main Entry Point
function App() {
  return (
    <>
      {/* Shitty ass comments... Setting up routes */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
