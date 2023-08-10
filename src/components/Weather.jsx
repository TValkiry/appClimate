import React, { useState } from 'react'
import Search from './Search'


const Weather = ({weatherInfo}) => {

  /*Funcionamiento del boton cambio de texto*/

  const [changeTextBotton, setChangeTextBotton] = useState('Cambiar a F')

  const [textChange, setTextChange] = useState(false)
  
  const toggleBotton = () => {
    setChangeTextBotton(textChange ? 'Cambiar a F' : 'Cambiar a C');
    setTextChange(!textChange)
  }

   
  const [isCelsius, setIsCelsius] = useState(true)

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1)

  }

  const kelvinToFarenheit = (tempKelvin) => {
    return (((tempKelvin - 273.15) * 9/5) +32).toFixed(1)

  }

  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius)
  }

  const resultTempConvertion = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFarenheit(weatherInfo?.main.temp)

  const imagesWeather = {

    "01d": "bg-[url(/images/sol1.jpeg)] " ,
    "02d": "bg-[url(/images/pocasnubes.jpeg)]",
    "03d": "bg-[url(/images/probnublado.jpeg)]",
    "09d": "bg-[url(/images/lluvia.jpeg)]",
    "10d": "bg-[url(/images/tormenta.jpeg)]",
    "04d": "bg-[url(/images/nublado.jpeg)]",
    "11d": "bg-[url(/images/electrica.jpeg)]",
    "13d": "bg-[url(/images/nieve.jpeg)]",
    "50d": "bg-[url(/images/ventoso.jpeg)]",


    "01n": "bg-[url(/images/sol1.jpeg)]",
    "02n": "bg-[url(/images/pocasnubes.jpeg)]",
    "03n": "bg-[url(/images/probnublado.jpeg)] ",
    "09n": "bg-[url(/images/lluvia.jpeg)]",
    "10n": "bg-[url(/images/tormenta.jpeg)]",
    "04n": "bg-[url(/images/nublado.jpeg)]",
    "11n": "bg-[url(/images/electrica.jpeg)]",
    "13n": "bg-[url(/images/nieve.jpeg)]",
    "50n": "bg-[url(/images/ventoso.jpeg)]", 
    

  }

  return (

    
    <section className='text-center'>

      <h2 className='p-6 text-2xl'>{weatherInfo?.name}</h2>


      <section className={`grid gap-4 sm:grid-cols-[auto_auto] ${imagesWeather[weatherInfo?.weather[0].icon]}`}>
        {/*Seccion superior*/}
        <section className='bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center'>
          <h4 className='col-span-2'>{weatherInfo?.weather[0].description}</h4>
          <span className='text-4xl'>{resultTempConvertion}° {isCelsius ? "C" : "F"} </span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
          </div>

        </section>

        {/*Seccion inferior*/}
        <section className='bg-white/40 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1'>
          <article className='flex gap-2 items-center'>
            <div className='w-[18px]'>
              <img src="/images/speed.png" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed} m/s</span>
          </article>

          <article className='flex gap-2 items-center'>
            <div className='w-[18px]'>
              <img src="/images/humidity.png" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity} % </span>
          </article>

          <article className='flex gap-2 items-center'>
            <div className='w-[18px]'>
              <img src="/images/wind.png" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure} hPa</span>
          </article>

          
        </section>
      </section>    

      <button onClick={() => {handleChangeUnitTemp(); toggleBotton();}} className='mt-4 bg-white text-black p-2 rounded-md'> {changeTextBotton}</button>

      <section>

      
      </section>
          
    </section>
  )
}

export default Weather
