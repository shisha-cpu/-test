import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const data = [
  { name: 'Янв', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Фев', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Мар', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Апр', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Май', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Июн', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Июл', uv: 3490, pv: 4300, amt: 2100 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Панель управления</h1>
      <div className="charts-container">
        <div className="chart">
          <h3>Линейный график</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h3>Столбчатый график</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h3>Круговая диаграмма</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Link to="/users" className="view-users-link">Просмотр картотеки пользователей</Link>
    </div>
  );
};

export default Dashboard;
