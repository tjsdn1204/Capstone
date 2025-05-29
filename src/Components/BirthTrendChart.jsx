import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: 2014, births: 435435 },
  { year: 2015, births: 438420 },
  { year: 2016, births: 406243 },
  { year: 2017, births: 357771 },
  { year: 2018, births: 326822 },
  { year: 2019, births: 302676 },
  { year: 2020, births: 272337 },
  { year: 2021, births: 260562 },
  { year: 2022, births: 249186 },
  { year: 2023, births: 230028 },
  { year: 2024, births: 238300 }, // 예측치
];

export default function BirthTrendChart() {
  const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    if (e && e.activePayload && e.activePayload[0]) {
      setSelected(e.activePayload[0].payload);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '700px',
        margin: 'auto',
        padding: '1rem',
        boxSizing: 'border-box',
        backgroundColor: '#222222',
        color: 'white',
        borderRadius: '12px',
      }}
    >
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
          onClick={handleClick}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="year"
            fontSize={12}
            stroke="#ccc"
            tickLine={{ stroke: '#666' }}
            axisLine={{ stroke: '#666' }}
          />
          <YAxis
            fontSize={12}
            stroke="#ccc"
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
            tickLine={{ stroke: '#666' }}
            axisLine={{ stroke: '#666' }}
          />
          <Tooltip
            formatter={(value, name) => [`${value.toLocaleString()}명`, '출생아 수']}
            labelFormatter={(label) => `연도: ${label}`}
            contentStyle={{
              backgroundColor: '#333',
              border: 'none',
              color: 'white'
            }}
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
            textAlign: 'center',
            color: '#222',
            maxWidth: '90vw',
            marginLeft: 'auto',
            marginRight: 'auto'
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
