import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { 지역: '경기도', 문화기반시설수: 622 },
  { 지역: '서울특별시', 문화기반시설수: 469 },
  { 지역: '강원특별자치도', 문화기반시설수: 247 },
  { 지역: '전라남도', 문화기반시설수: 240 },
  { 지역: '경상북도', 문화기반시설수: 234 },
  { 지역: '경상남도', 문화기반시설수: 229 },
  { 지역: '충청남도', 문화기반시설수: 221 },
  { 지역: '전북특별자치도', 문화기반시설수: 211 },
  { 지역: '충청북도', 문화기반시설수: 178 },
  { 지역: '부산광역시', 문화기반시설수: 144 },
  { 지역: '대구광역시', 문화기반시설수: 102 },
  { 지역: '인천광역시', 문화기반시설수: 101 },
  { 지역: '제주특별자치도', 문화기반시설수: 92 },
  { 지역: '울산광역시', 문화기반시설수: 84 },
  { 지역: '광주광역시', 문화기반시설수: 77 },
  { 지역: '세종특별자치시', 문화기반시설수: 50 },
];

function CultureFacilityChart() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        height: '500px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
      }}
    >
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1.5rem', color: '#273F4F', textAlign: 'center' }}>
        지역별 문화기반시설 수
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="지역"
            angle={-45}
            textAnchor="end"
            interval={0}
            stroke="#666"
            style={{ fontSize: 12 }}
          />
          <YAxis
            stroke="#666"
            allowDecimals={false}
            style={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #ccc' }}
            labelStyle={{ color: '#273F4F', fontWeight: 600 }}
          />
          <Bar
            dataKey="문화기반시설수"
            fill="#273F4F"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CultureFacilityChart;