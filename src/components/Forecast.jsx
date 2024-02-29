import React from 'react'

function Forecast({title}) {
    return (
        <div>
            <div className="flex items-center justify-center mt-6">
                <p className="text-white font-medium uppercase mr-auto">
                    {title}
                </p>
            </div>
            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white">
                <div className=" flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        4:30
                    </p>
                    <img
                        src="https://img.freepik.com/premium-vector/sun-pencil-colour-sketch-simple-style_1639-47718.jpg"
                        className="w-5 my-1" alt=""
                    />
                    <p className="font-medium">22°</p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        4:30
                    </p>
                    <img
                        src="https://img.freepik.com/premium-vector/sun-pencil-colour-sketch-simple-style_1639-47718.jpg"
                        className="w-5 my-1" alt=""
                    />
                    <p className="font-medium">22°</p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        4:30
                    </p>
                    <img
                        src="https://img.freepik.com/premium-vector/sun-pencil-colour-sketch-simple-style_1639-47718.jpg"
                        className="w-5 my-1" alt=""
                    />
                    <p className="font-medium">22°</p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        4:30
                    </p>
                    <img
                        src="https://img.freepik.com/premium-vector/sun-pencil-colour-sketch-simple-style_1639-47718.jpg"
                        className="w-5 my-1" alt=""
                    />
                    <p className="font-medium">22°</p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        4:30
                    </p>
                    <img
                        src="https://img.freepik.com/premium-vector/sun-pencil-colour-sketch-simple-style_1639-47718.jpg"
                        className="w-5 my-1" alt=""
                    />
                    <p className="font-medium">22°</p>
                </div>

            </div>
        </div>

    )
}

export default Forecast
