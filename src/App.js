import React from 'react';
import WithdrawalBarChart from './Components/Withdrawal';
import BirthTrendChart from './Components/BirthTrendChart';
import ScrollDisappearingMap from './Components/Maps';
import SchoolAgePopulationChart from './Components/SchoolAgePopulationChart';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>

      {/* 자퇴율 분석 그래프 */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>수도권 vs 비수도권 자퇴율</h2>
        <WithdrawalBarChart />
      </div> 

      {/* 출생아 수 추이 그래프 */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>출생아 수 추이 (2014~2024)</h2>
        <BirthTrendChart />
      </div>

      {/* 학령인구 변화 그래프 */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>학령인구(6~21세) 추이 및 증감률</h2>
        <SchoolAgePopulationChart />
      </div>

      {/* 스크롤에 따라 점이 사라지는 지도 애니메이션 */}
      <div>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>점이 사라지는 지역별 지도</h2>
        <ScrollDisappearingMap />
      </div>

    </div>
  );
}

export default App;