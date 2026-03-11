import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GrowthLabs from './pages/GrowthLabs';
import InspiredCreativity from './pages/InspiredCreativity';
import StrategicInsight from './pages/StrategicInsight';
import HealthWellness from './pages/HealthWellness';
import Technology from './pages/Technology';
import Entertainment from './pages/Entertainment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/growth-labs" element={<GrowthLabs />} />
      <Route path="/inspired-creativity" element={<InspiredCreativity />} />
      <Route path="/strategic-insight" element={<StrategicInsight />} />
      <Route path="/health-wellness" element={<HealthWellness />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/entertainment" element={<Entertainment />} />
    </Routes>
  );
}

export default App;
