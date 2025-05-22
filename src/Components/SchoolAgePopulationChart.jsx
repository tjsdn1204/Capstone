import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: 2014, population: 9181, changeRate: -2.1 },
  { year: 2015, population: 8920, changeRate: -2.8 },
  { year: 2016, population: 8672, changeRate: -2.8 },
  { year: 2017, population: 8461, changeRate: -2.4 },
  { year: 2018, population: 8236, changeRate: -2.7 },
  { year: 2019, population: 8094, changeRate: -1.7 },
  { year: 2020, population: 7873, changeRate: -2.7 },
  { year: 2021, population: 7669, changeRate: -2.6 },
  { year: 2022, population: 7469, changeRate: -2.6 },
  { year: 2023, population: 7282, changeRate: -2.5 },
  { year: 2024, population: 7440, changeRate: 2.2 },
];

export default function SchoolAgePopulationChart() {
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
          margin={{ top: 20, right: 50, left: 0, bottom: 10 }}
          onClick={handleClick}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" fontSize={14} />
          <YAxis yAxisId="left" fontSize={14} tickFormatter={(v) => `${v.toLocaleString()}`} />
          <YAxis yAxisId="right" orientation="right" fontSize={14} domain={[-3, 3]} tickFormatter={(v) => `${v.toFixed(1)}%`} />
          <Tooltip
            formatter={(value, name) => name === 'population' ? `${value.toLocaleString()}명` : `${value.toFixed(1)}%`}
            labelFormatter={(label) => `연도: ${label}`}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="population"
            name="학령인구"
            stroke="#1976d2"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="changeRate"
            name="증감률"
            stroke="#388e3c"
            strokeWidth={2}
            strokeDasharray="4 2"
            dot={{ r: 4 }}
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
            textAlign: 'center'
          }}
        >
          <h3 style={{ margin: 0 }}>{selected.year}년</h3>
          <p style={{ margin: '0.5rem 0 0', fontSize: '1.1rem' }}>
            학령인구: <strong>{selected.population.toLocaleString()}</strong> 명<br />
            증감률: <strong>{selected.changeRate}%</strong>
          </p>
        </motion.div>
      )}
    </div>
  );
}
