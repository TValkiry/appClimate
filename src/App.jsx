import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Search from './components/Search'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect(() => {

        const success = (pos) => {
          const lat = pos.coords.latitude
          const lon = pos.coords.longitude
          

          const API_KEY = "2da86dff8bb32c64b34643b5140827b4"

          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

          
          axios.get(url)
          .then(({data}) => setWeatherInfo(data))
          .catch((err) => console.log(err))

    }

    navigator.geolocation.getCurrentPosition(success)

  }, [])
  
  return (

    <main className='bg-black min-h-screen text-white font-lato flex justify-center items-center px-4'>

        

      <Weather weatherInfo={weatherInfo} />
      



      
    </main>
  )
}

export default App
