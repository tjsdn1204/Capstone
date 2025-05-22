import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: 2014, births: 435000 },
  { year: 2015, births: 438000 },
  { year: 2016, births: 406000 },
  { year: 2017, births: 357000 },
  { year: 2018, births: 326000 },
  { year: 2019, births: 304000 },
  { year: 2020, births: 272000 },
  { year: 2021, births: 260000 },
  { year: 2022, births: 248000 },
  { year: 2023, births: 230000 },
  { year: 2024, births: 240000 }, // 예측치 가능
];

export default function BirthTrendChart() {
  const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    if (e && e.activePayload && e.activePayload[0]) {
      setSelected(e.activePayload[0].payload);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
      <ResponsiveContainer height={320}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          onClick={handleClick}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" fontSize={14} />
          <YAxis fontSize={14} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value) => `${value.toLocaleString()}명`}
            labelFormatter={(label) => `연도: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="births"
            stroke="#3f51b5"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* 클릭 시 상세 정보 표시 카드 */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: '1rem',
            padding: '1.2rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ margin: 0 }}>{selected.year}년</h3>
          <p style={{ margin: '0.5rem 0 0', fontSize: '1.1rem' }}>
            출생아 수: <strong>{selected.births.toLocaleString()}</strong> 명
          </p>
        </motion.div>
      )}
    </div>
  );
}