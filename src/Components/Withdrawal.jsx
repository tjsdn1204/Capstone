import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { region: '수도권', rate: 2.7, color: '#FE7743', detail: '서울, 경기, 인천 지역 평균 자퇴율' },
  { region: '비수도권', rate: 4.8, color: '#273F4F', detail: '그 외 지역 평균 자퇴율' }
];

export default function WithdrawalBarChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        padding: '1rem',
        backgroundColor: '#222222',
        borderRadius: '12px',
        boxSizing: 'border-box',
        color: 'white'
      }}
    >
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey="region"
            tick={{ fontSize: 14, fill: '#ccc' }}
            axisLine={{ stroke: '#666' }}
            tickLine={{ stroke: '#666' }}
          />
          <YAxis
            unit="%"
            tick={{ fontSize: 14, fill: '#ccc' }}
            domain={[0, 6]}
            axisLine={{ stroke: '#666' }}
            tickLine={{ stroke: '#666' }}
          />
          <Tooltip
            formatter={(value) => `${value.toFixed(1)}%`}
            contentStyle={{
              backgroundColor: '#333',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              color: 'white'
            }}
          />
          <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                cursor="pointer"
                onClick={() => handleClick(index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: '1rem',
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            fontSize: '15px',
            color: '#222'
          }}
        >
          <strong>{data[activeIndex].region}:</strong> {data[activeIndex].detail}
          <br />
          자퇴율: {data[activeIndex].rate}%
        </motion.div>
      )}
    </div>
  );
}
