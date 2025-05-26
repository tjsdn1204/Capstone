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
  { 지역: '경북', 충원율미달_대학수: 9 },
  { 지역: '서울', 충원율미달_대학수: 8 },
  { 지역: '전남', 충원율미달_대학수: 6 },
  { 지역: '경기', 충원율미달_대학수: 4 },
  { 지역: '충북', 충원율미달_대학수: 2 },
  { 지역: '경남', 충원율미달_대학수: 2 },
  { 지역: '대전', 충원율미달_대학수: 2 },
  { 지역: '전북', 충원율미달_대학수: 1 },
  { 지역: '부산', 충원율미달_대학수: 1 },
  { 지역: '강원', 충원율미달_대학수: 1 },
  { 지역: '충남', 충원율미달_대학수: 1 },
  { 지역: '광주', 충원율미달_대학수: 0 },
  { 지역: '인천', 충원율미달_대학수: 0 }
];

function LowEnrollmentChart() {
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
        충원율 80.8% 미만 대학 수 (지역별)
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
            dataKey="충원율미달_대학수"
            fill="#273F4F"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LowEnrollmentChart;
