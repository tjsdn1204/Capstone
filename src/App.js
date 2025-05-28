import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WithdrawalBarChart from './Components/Withdrawal';
import BirthTrendChart from './Components/BirthTrendChart';
import ScrollDisappearingMap from './Components/Maps';
import SchoolAgePopulationChart from './Components/SchoolAgePopulationChart';
import MapWithBubbles from './Components/MapWithBubbles';
import CultureFacilityChart from './Components/BarChart';
import LowEnrollmentChart from './Components/Midal';

function App() {
  return (
    <Router>
      <div style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        backgroundColor: '#222222',
        minHeight: '100vh',
        color: 'white'
      }}>
        <Routes>
          <Route path="/withdrawal" element={<WithdrawalBarChart />} />
          <Route path="/birth" element={<BirthTrendChart />} />
          <Route path="/school-age" element={<SchoolAgePopulationChart />} />
          <Route path="/map-scroll" element={<ScrollDisappearingMap />} />
          <Route path="/culture" element={<CultureFacilityChart />} />
          <Route path="/employment" element={<MapWithBubbles />} />
          <Route path="/low-enrollment" element={<LowEnrollmentChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;