import React from 'react'
import { WiHail, WiSunset, WiHumidity, WiNightRain, WiStrongWind } from 'react-icons/wi';


const Weathercard = (props) => {
    // console.log(props)
    let sec = props.tempInfo.sunset
    let date = new Date(sec * 1000)

    // Converting milliseconds into hour and min 
    let sunsetTime = `${date.getHours()}:${date.getMinutes()}`
    let sunsetHourTime = sunsetTime.split(':')[0]
    let sunsetMinTime = sunsetTime.split(':')[1]
    let updatedHour = sunsetHourTime < 10 ? `0${sunsetHourTime}` : `${sunsetHourTime}`
    let updatedMin = sunsetMinTime < 10 ? `0${sunsetMinTime}` : `${sunsetMinTime}`
    let finalSunsetTime = `${updatedHour}:${updatedMin}`



    return (
        <>
            <div className='container w-11/12 max-w-lg grid rounded-2xl font-sans mx-auto'>

                <div className='weatherIcon text-center mx-auto py-4'>
                    <WiHail size={100} color="black" />
                </div>

                <div className='weatherInfo flex flex-row w-full text-white  bg-cyan-600 '>
                    <div className='temperature py-10 bg-black  w-10/12 flex justify-center gap-3  '>
                        <span className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>{props.tempInfo.temp}&deg;</span>

                        <div className='description'>
                            <div className='weatherCondition uppercase text-xl sm:text-2xl md:text-3xl'>{props.tempInfo.weatherMood}</div>
                            <div className='place text-xs'>{props.tempInfo.name}, {props.tempInfo.country}</div>
                        </div>
                    </div>
                    <div className='date px-6  font-bold py-10 text-center text-sm :text-lg w-4/12 sm:w-4/12'>
                        {new Date().toLocaleString()}
                    </div>
                </div>


                {/* Our Last temperature part */}
                <div className='lastPortion grid grid-cols-2 sm:grid-cols-4 text-white text-sm gap-2 sm:gap-4 px-7 sm:px-4 py-4 sm:py-7 font-semibold'>
                    <div className="temp-icons flex flex-row content-center">
                        <p><WiSunset size={30} color='#22A7F0' /></p>
                        <div className='icons-reading px-2 '>
                            {finalSunsetTime} PM, Sunset
                        </div>
                    </div>

                    <div className="temp-icons flex flex-row content-center">
                        <p><WiHumidity size={30} color='#22A7F0' /></p>
                        <div className='icons-reading px-2'>
                            {props.tempInfo.humidity} %, Humidity
                        </div>
                    </div>

                    <div className="temp-icons flex flex-row content-center">
                        <p><WiStrongWind size={30} color='#22A7F0' /></p>
                        <div className='icons-reading ps-2'>
                            {props.tempInfo.speed} km/h, Wind
                        </div>
                    </div>

                    <div className="temp-icons flex flex-row content-center">
                        <p><WiNightRain size={30} color='#22A7F0' /></p>
                        <div className='icons-reading px-2'>
                            {props.tempInfo.pressure} Hg, Pressure
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Weathercard