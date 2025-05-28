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
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#222222', minHeight: '100vh', color: 'white' }}>
        <Routes>
          <Route path="/withdrawal" element={<WithdrawalBarChartWrapper />} />
          <Route path="/birth" element={<BirthTrendChartWrapper />} />
          <Route path="/school-age" element={<SchoolAgePopulationChartWrapper />} />
          <Route path="/map-scroll" element={<ScrollDisappearingMapWrapper />} />
          <Route path="/culture" element={<CultureFacilityChartWrapper />} />
          <Route path="/employment" element={<MapWithBubblesWrapper />} />
          <Route path="/low-enrollment" element={<LowEnrollmentChartWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// 각 시각화마다 헤더 포함한 래퍼 컴포넌트 정의
const WithdrawalBarChartWrapper = () => (
  <>
    <h2>수도권 vs 비수도권 자퇴율</h2>
    <WithdrawalBarChart />
  </>
);

const BirthTrendChartWrapper = () => (
  <>
    <h2>출생아 수 추이 (2014~2024)</h2>
    <BirthTrendChart />
  </>
);

const SchoolAgePopulationChartWrapper = () => (
  <>
    <h2>학령인구(6~21세) 추이 및 증감률</h2>
    <SchoolAgePopulationChart />
  </>
);

const ScrollDisappearingMapWrapper = () => (
  <>
    <h2>점이 사라지는 지역별 지도</h2>
    <ScrollDisappearingMap />
  </>
);

const CultureFacilityChartWrapper = () => (
  <>
    <h2>지역별 문화기반시설 수</h2>
    <CultureFacilityChart />
  </>
);

const MapWithBubblesWrapper = () => (
  <>
    <h2>지역별 평균 취업률</h2>
    <MapWithBubbles />
  </>
);

const LowEnrollmentChartWrapper = () => (
  <>
    <h2>충원율 80.8% 미만 대학 시각화</h2>
    <LowEnrollmentChart />
  </>
);

export default App;