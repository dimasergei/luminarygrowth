import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Privacy from './pages/Privacy';
import Fulfillment from './pages/Fulfillment';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="fulfillment" element={<Fulfillment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
