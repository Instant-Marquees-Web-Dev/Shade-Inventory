import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';

export const ChartTemp = ({data, type}) => (
  <ResponsiveContainer width="100%" height={100}>
    <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" hide />
          <YAxis label={{ value: 'Temperature °C', angle: -90, position: 'center' }}/>
          <Tooltip />
          <Area type="monotone" dataKey={type} stroke='#ed8936' fill='#f6ad55'  />
    </AreaChart>
  </ResponsiveContainer>
)


export const ChartWind = ({data, type}) => (
  <ResponsiveContainer width="100%" height={100}>
        <BarChart 
          height={100} 
          data={data} 
          margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}>
          <Tooltip/>
          <XAxis 
            dataKey="name"
            hide
            
          />
          <YAxis label={{ value: 'Wind km/hr', angle: -90, position: 'center' }}/>
          <Bar dataKey={type} fill='#b794f4'/>
        </BarChart>
  </ResponsiveContainer>
)

export const ChartHumidity = ({data, type}) => (
  <ResponsiveContainer width="100%" height={100}>
    <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <XAxis dataKey="name" hide />
          <YAxis label={{ value: 'Humidity %', angle: -90, position: 'center' }}/>
          <Tooltip />
          <Area type="monotone" dataKey={type} stroke='#f56565' fill='#fc8181'  />
    </AreaChart>
  </ResponsiveContainer>
)
