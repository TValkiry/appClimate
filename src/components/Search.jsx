import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {

  const [countries, setCountries ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const country = e.target.country.value


    const API_KEY = "2da86dff8bb32c64b34643b5140827b4"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid={API_KEY}`

    axios
    .get(url)
    .then(({data}) => setCountries(data.id))
    .catch((err) => console.log(err))
  };






  return (
    <section className='bg-black min-h-screen text-white font-lato grid-cols-1 justify-items-center items-start h-screen p-4'>
      <form onSubmit={handleSubmit} className='flex rounded-md overflow-hidden max-w-max mx-auto'>
        <input id="country" className='text-black p-2' placeholder= "Where are you?" type="text" />
        <button className='p-4 bg-indigo-400/40' >Search</button>
      </form>
      
    </section>
  )
}

export default Search

