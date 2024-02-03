import react, { useEffect, useRef, useState } from 'react';
import GlobalAPI from '../services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth
export default function Slider() {
    const elementRef = useRef();
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getTrendingMovies();
    }, [])
    const getTrendingMovies = () => {
        GlobalAPI.getTrendingMovies.then((resp) => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }
    return (
        <div>
            <HiChevronRight className='hidden md:block text-white absolute size-[4rem] mt-[12rem] right-0 cursor-pointer' onClick={() => sliderRight(elementRef.current)} />
            <HiChevronLeft className='hidden md:block md:text-white absolute size-[4rem] mt-[12rem] cursor-pointer ' onClick={() => sliderLeft(elementRef.current)} />
            <div className='flex overflow-x-auto scrollbar-hide px-16 w-full py-5 scroll-smooth ' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} className=' md:h-[25rem] min-w-full object-cover object-left-top rounded-lg mr-5 hover:border-[4px] border-gray-200 translate-all duration-150 ease-in' />
                )
                )
                }
            </div>
        </div>
    )
}
