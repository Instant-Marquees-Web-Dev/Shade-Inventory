import React, { useState, useEffect, useCallback } from 'react'
import { Spin, Card, Tabs } from 'antd'
import dayjs from 'dayjs'
import  { ChartTemp, ChartWind, ChartHumidity, ChartRain } from './Charts'

const { TabPane } = Tabs 

const computeNearestHr = () => {
  const currentTimeInHrs = new Date().getHours();
  const constHrs = [0, 3, 6, 9, 12, 15, 18, 21];
  const differences = constHrs.map(e => Math.abs(e - currentTimeInHrs));
  const indexofLowestDiff = differences.indexOf(Math.min(...differences));

  return constHrs[indexofLowestDiff]
}

const SET_CURRENT_DATE = dayjs().format('YYYY/MM/DD').concat(`, ${computeNearestHr()}`).toString()


const WeatherWidget = () => {
  const [location, setLocation] = useState('moorabbin')
  const [weather, setWeather] = useState({
    error: false,
    loading: true,
    forecast:{}
  })
  const [chart, setChart] = useState({
    chartTemp: true,
    chartWind: false,
    chartHumi: false
  })
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location},AU&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`)
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
  }, [location]) // change on user input state 
  
  const {chartTemp, chartWind, chartHumi} = chart
  const {loading, error, forecast} = weather

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      const { location } = e.target
      setLocation(location.value)
      e.target.reset()
    },
    []
  )

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

  let tempArr = []
  let humidityArr = []
  let windArr = []

  list.forEach(({main,wind,dt_txt}) => {
    tempArr.push(
        {
          name: dayjs(dt_txt).format('dddd, h:mm a'),
          temperature: Math.round(main.temp)
        }
      )
      windArr.push(
        {
          name: dayjs(dt_txt).format('dddd, h:mm a'),
          wind: Math.round(wind.speed)
        }
      )
    humidityArr.push(
        {
          name: dayjs(dt_txt).format('dddd, h:mm a'),
          humidity: Math.round(main.humidity)
        }
      )
  })
  

  return (
    <div className="rounded overflow-hidden shadow-lg mt-16 bg-white border-2 border-gray-200 px-4 py-5">

    <h3 className="text-xl leading-4 font-medium text-gray-900">
            {name} VIC
    </h3>
      <Tabs
        defaultActiveKey={SET_CURRENT_DATE}
        tabPosition="bottom"
        size="large"
      >
      {
        list.map(({dt, main:{temp, humidity}, weather:[{description, icon}], wind:{speed}, dt_txt}) => (
          <TabPane
            key={dayjs(dt_txt).format('YYYY/MM/DD, H')}
            tab={
              <div className="flex flex-col items-center">
                <span>
                  {dayjs(dt_txt).format('ddd')}
                </span>
                <span className="flex justify-center">
                  <img 
                  src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
                  className="w-1/2"
                  />
                </span>
                <span>
                  {dayjs(dt_txt).format('h a')}
                </span>
              </div>
              }
          >
          <div className="flex justify-between">
            <div>
              <p className="-mt-1 text-sm leading-5 text-gray-500">
                {dayjs(dt_txt).format('dddd, h:mm a')}
              </p>
              <p className="-mt-4 text-sm leading-5 text-gray-500 capitalize">
                {description}
              </p>
            </div>

            <div className="w-40 sm:w-56 lg:w-64">
            <label htmlFor="location" className="sr-only">Location</label>
            <div className="relative rounded-md shadow-sm">
            <form
              onSubmit={onSubmit}
            >
                <input 
                  id="location"
                  name="location" 
                  className="form-input block w-full sm:text-sm sm:leading-5" 
                  placeholder="Suburb name" 
                  />
            </form>
            </div>
            </div>

          </div>

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

                <div>
                <span className="relative z-0 sm:inline-flex shadow-sm">
                  <button 
                    type="button" 
                    onClick={() => setChart({
                      chartTemp: true,
                      chartWind: false,
                      chartHumi: false
                    })}
                    className="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-gray-300 bg-white text-xs leading-4 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Temperature
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setChart({
                      chartTemp: false,
                      chartWind: true,
                      chartHumi: false
                    })}
                    className="-ml-px relative inline-flex items-center px-2.5 py-1.5 border border-gray-300 bg-white text-xs leading-4 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Wind
                  </button>
                  <button 
                    type="button"
                    onClick={() => setChart({
                      chartTemp: false,
                      chartWind: false,
                      chartHumi: true
                    })} 
                    className="-ml-px relative inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs leading-4 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Humidity
                  </button>
                </span>
              </div>
            </div>

          </div>

            <div>
            {
              chartTemp && <ChartTemp data={tempArr} type={"temperature"}/> 
            }
            {
              chartWind && <ChartWind data={windArr} type={"wind"}/>
            }
            {
              chartHumi &&  <ChartHumidity data={humidityArr} type={"humidity"}/>
            }
            </div>
          </TabPane>
        ))
      }
      </Tabs>
    </div>
  )
}

export default WeatherWidget
