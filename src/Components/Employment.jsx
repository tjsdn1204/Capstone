import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
    Cell
  } from 'recharts';
  
  const data = [
    {
      region: '수도권',
      rate: 69.3,
      color: '#4CAF50', // 초록
    },
    {
      region: '비수도권',
      rate: 63.7,
      color: '#2196F3', // 파랑
    }
  ];
  
  export default function EmploymentBarChart() {
    return (
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis domain={[0, 100]} unit="%" />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar dataKey="rate" isAnimationActive fill="#8884d8">
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }