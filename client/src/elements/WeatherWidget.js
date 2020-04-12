import React, { useState, useEffect } from 'react'
import { Spin, Card, Tabs } from 'antd'
import dayjs from 'dayjs'
// import { useCookies } from '../hooks'

const { TabPane } = Tabs 

const computeNearestHr = () => {
  const currentTimeInHrs = new Date().getHours();
  const constHrs = [0, 3, 6, 9, 12, 15, 18, 21];
  const differences = constHrs.map(e => Math.abs(e - currentTimeInHrs));
  const indexofLowestDiff = differences.indexOf(Math.min(...differences));

  return constHrs[indexofLowestDiff]
}

const SET_CURRENT_DATE = () => {
    return dayjs().format('YYYY/MM/DD').concat(`, ${computeNearestHr()}`).toString()
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    error: false,
    loading: true,
    forecast:{}
  })
  const [currentDay, setCurrentDay] = useState(SET_CURRENT_DATE)
  const USER_INPUT= 'springvale'
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${USER_INPUT},Victoria,AU&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather({
          error: false,
          loading: false,
          forecast: data
        })
      })
      .catch(e => setWeather({
        error: true,
        loading: false,
        forecast: {}
      }))
  }, [])
  
  const {loading, error, forecast} = weather

  if(loading) {
    return (
      <div className="flex w-full justify-center mt-6">
        <Spin
          size="large"
          tip="Loading..."
        />
      </div>
    )
  }

  if(error) {return <h1>Error Retriving Weather data</h1>}

  const {
    city:{name}, 
    list // lists of 40 readings 5day / 3 hours
  }= forecast

  
  const currentData = () => {
    return (list.find(e => new Date(e.dt_txt).getHours() === computeNearestHr()))
  }

  return (
    <div className="rounded overflow-hidden shadow-lg mt-16 bg-white px-4 py-5">
    <h3 className="text-xl leading-4 font-medium text-gray-900">
            {name} VIC
          </h3>
      <Tabs
        defaultActiveKey={currentDay}
        tabPosition="bottom"
      >
      {
        list.map(({dt, main:{temp, humidity}, weather:[{description, icon}], wind:{speed}, rain, dt_txt}) => (
          <TabPane
            key={dayjs(dt_txt).format('YYYY/MM/DD, H')} 
            tab={
              <div className="flex flex-col">
                <span>
                  {dayjs(dt_txt).format('ddd')}
                </span>
                <span>
                  {dayjs(dt_txt).format('h a')}
                </span>
              </div>
              }
          >
            <p className="-mt-1 text-sm leading-5 text-gray-500">
              {dayjs(dt_txt).format('dddd, h:mm a')}
            </p>
            <p className="-mt-4 text-sm leading-5 text-gray-500">
              {description}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={` http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                <div className="flex">
                  <h1 className="text-5xl">{temp.toFixed(0)}</h1>
                  <span>°C</span>
                </div>
              </div>

              <div className="px-6 py-5 w-40 sm:w-56 lg:w-64 leading-tight">
                <p className="-mt-1 text-sm text-gray-500">
                  Humidity:{ humidity}%
                </p>
                <p className="-mt-1 text-sm text-gray-500">
                  Wind:{ (speed * 3.6).toFixed(0)}km/hr
                </p>
              </div>
            </div>
            
          </TabPane>
        ))
      }
      </Tabs>
    </div>
  )
}

export default WeatherWidget
