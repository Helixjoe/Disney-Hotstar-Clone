import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

import starwarV from './../assets/videos/star-wars.mp4'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGeographicV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'

export default function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGeographicV
        },

    ]
    return (
        <div className='flex gap-2 px-5 md:gap-5 px-20 py-10'>
            {productionHouseList.map((item) => (<div className='border-[4px]  border-gray-400 rounded-lg hover:scale-110 transition-all relative duration-300 ease-in-out cursor-pointer relative shadow-lg shadow-gray-700'>
                <video src={item.video} className='absolute top-0 z-0 opacity-0 hover:opacity-50' autoPlay loop mute playsInline />
                <img src={item.image} className='w-full z-[1] opacity-100' />

            </div>

            ))}
        </div>
    )
}