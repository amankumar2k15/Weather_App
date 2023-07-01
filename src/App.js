import React, { useEffect, useState } from 'react'
import axios from "axios"
import Weathercard from './Weathercard'
import backgroundImg from "./assets/weatherImg.jpg"


const App = () => {
    const [searchValue, setSearchValue] = useState("pune")
    const [tempInfo, setTempInfo] = useState({})
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4f1303c95d19ddf5608f41fcf3ecfd32`

    const getWeatherInfo = () => {
        axios.get(url).then((res) => {
            let storeData = res.data
            console.log(storeData)
            // setSearchValue = (null)
            document.getElementById('search').value = ""

            const { humidity, pressure, temp } = storeData.main
            const { name } = storeData
            const { main: weatherMood } = storeData.weather[0]
            const { speed } = storeData.wind
            const { country, sunset } = storeData.sys

            const myNewWeatherInfo = {
                humidity, pressure, temp, name, weatherMood, speed, country, sunset
            }
            setTempInfo(myNewWeatherInfo)
        }).catch((err) => console.log(err))
    }


    //Fetch api method
    // const getWeatherInfo = async () => {
    //     try {
    //         let res = await fetch(url);
    //         let data = await res.json();
    //         // console.log(data)
    //         setWeatherData(data)
    //     } catch (err) { console.log(err) }
    // }


    useEffect(() => {
        getWeatherInfo()
    }, [])


    return (
        <>
            <div className=' h-screen font-sans flex flex-col content-center gap-10' style={{ background: `url(${backgroundImg}) no-repeat center center/cover` }}>
                <div className='2xl:container mt-32 '>
                    <div className='text-center flex flex-row justify-center px-2 '>
                        <input className='py-1 px-4  text-black sm:w-80 outline-none rounded-l-lg '
                            type='search'
                            placeholder='Search...'
                            id='search'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button className='py-1 px-5 bg-cyan-600 text-white hover:transition-all delay-150 ease-in-out  hover:bg-cyan-700 rounded-r-lg'
                            onClick={getWeatherInfo}>
                            Search
                        </button>
                    </div>
                </div>


                {/* Our Temperature card */}


                <Weathercard tempInfo={tempInfo} />
            </div>

        </>
    )
}

export default App