import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

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
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 700,
        margin: 'auto',
        padding: '1rem',
        backgroundColor: '#222222',
        color: 'white',
        borderRadius: '12px',
        boxSizing: 'border-box',
      }}
    >
      <ResponsiveContainer width="100%" aspect={1.3}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 50, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" fontSize={12} stroke="#ccc" />
          <YAxis
            yAxisId="left"
            fontSize={12}
            stroke="#ccc"
            tickFormatter={(v) => `${v.toLocaleString()}`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[-3, 3]}
            fontSize={12}
            stroke="#ccc"
            tickFormatter={(v) => `${v.toFixed(1)}%`}
          />
          <Tooltip
            formatter={(value, name) =>
              name === 'population'
                ? `${value.toLocaleString()}명`
                : `${value.toFixed(1)}%`
            }
            labelFormatter={(label) => `연도: ${label}`}
            contentStyle={{
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
            }}
            itemStyle={{ color: '#FFD700', fontWeight: 'bold' }}
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
            stroke="#66bb6a"
            strokeWidth={2}
            strokeDasharray="4 2"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
