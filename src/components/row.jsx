import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './movie'
import  {MdChevronLeft ,MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchUrl, rowID}) => {

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results)
        })
    },[fetchUrl]);
    
    // console.log(movies)

    const slideLeft = ()=>{
        let slider = document.getElementById('slider'+rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = ()=>{
        let slider = document.getElementById('slider'+ rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4 my-2'>
                {title}
            </h2>
            <div className="relative flex items-center group">
                <MdChevronLeft 
                    onClick={slideLeft}
                    size={40} 
                    className='bg-white left-0 rounded-full mx-2 opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block'
                />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {
                        movies.map((items,id)=>{
                            return(
                                <Movie items={items} key={id} />
                        )
                        })
                    }
                </div>

                <MdChevronRight
                    onClick={slideRight}
                    size={40} 
                    className='bg-white right-0 rounded-full mx-2 opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block'
                />
            </div>
        </div>
    )
}

export default Row
