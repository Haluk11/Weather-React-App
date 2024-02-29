import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
    return (
        <div>
            <div className="flex items-center justify-center py-0 text-xl text-cyan-300">
                <p>Cloudy, clear....</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3" >
                <img src="https://img.freepik.com/premium-vector/sun-pencil-colour-sketch-simple-style_1639-47718.jpg" alt=""
                     className="w-10"  />

                <p className="text-5xl"> 34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Feel
                        <span className="font-medium ml-1">32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity
                        <span className="font-medium ml-1">65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind
                        <span className="font-medium ml-1">15 km/h</span>
                    </div>
                </div>
            </div>


            <div className="flex flex-row items-center justify-center
            space-x-2 text-white text-sm py-3">

                <UilSun/>
                <p className="font-light">
                    Rise <span>06:45</span>
                </p>
                <p className="font-light">|</p>

                <UilSunset/>
                <p className="font-light">
                    Set <span>06:45</span>
                </p>
                <p className="font-light">|</p>

                <UilSun/>
                <p className="font-light">
                    High <span>45°</span>
                </p>
                <p className="font-light">|</p>

                <UilSun/>
                <p className="font-light">
                    Low <span>50°</span>
                </p>
                <p className="font-light">|</p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails
