import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';

// stacked bar용 데이터
const data = [
  {
    구분: '수도권',
    서울: 8,
    경기: 4,
    인천: 0
  },
  {
    구분: '비수도권',
    경북: 9,
    전남: 6,
    충북: 2,
    경남: 2,
    대전: 2,
    전북: 1,
    부산: 1,
    강원: 1,
    충남: 1,
    광주: 0
  }
];

const COLORS = {
  서울: '#52796F',
  경기: '#84A59D',
  인천: '#4D908E',
  경북: '#F28482',
  전남: '#FFB703',
  충북: '#FF9F1C',
  경남: '#FF6B6B',
  대전: '#A7C957',
  전북: '#A98467',
  부산: '#9A8C98',
  강원: '#577590',
  충남: '#118AB2',
  광주: '#E5989B'
};

function LowEnrollmentChart() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '900px',
        height: '500px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#222222', // 어두운 Wix 배경과 일치
        borderRadius: '16px',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        color: 'white'
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="구분" stroke="#ccc" style={{ fontSize: 13 }} />
          <YAxis allowDecimals={false} stroke="#ccc" style={{ fontSize: 13 }} />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none', color: 'white' }} />
          <Legend wrapperStyle={{ color: 'white' }} />

          {/* 수도권 지역 */}
          <Bar dataKey="서울" stackId="수도권" fill={COLORS["서울"]} />
          <Bar dataKey="경기" stackId="수도권" fill={COLORS["경기"]} />
          <Bar dataKey="인천" stackId="수도권" fill={COLORS["인천"]} />

          {/* 비수도권 지역 */}
          <Bar dataKey="경북" stackId="비수도권" fill={COLORS["경북"]} />
          <Bar dataKey="전남" stackId="비수도권" fill={COLORS["전남"]} />
          <Bar dataKey="충북" stackId="비수도권" fill={COLORS["충북"]} />
          <Bar dataKey="경남" stackId="비수도권" fill={COLORS["경남"]} />
          <Bar dataKey="대전" stackId="비수도권" fill={COLORS["대전"]} />
          <Bar dataKey="전북" stackId="비수도권" fill={COLORS["전북"]} />
          <Bar dataKey="부산" stackId="비수도권" fill={COLORS["부산"]} />
          <Bar dataKey="강원" stackId="비수도권" fill={COLORS["강원"]} />
          <Bar dataKey="충남" stackId="비수도권" fill={COLORS["충남"]} />
          <Bar dataKey="광주" stackId="비수도권" fill={COLORS["광주"]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LowEnrollmentChart;
