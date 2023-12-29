import React, { useState } from 'react'
import { FaHeart ,FaRegHeart } from 'react-icons/fa6'
import { UserAuth } from '../context/authContext'
import { db } from '../utils/firebase-config'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Movie = ({items,id}) => {
    
    const [likes, setLikes] = useState(false);
    const [saved, setSaved] = useState(false);
    
    const {user} = UserAuth();

    const moiveID = doc(db,'users', `${user?.email}`);

    const saveShows = async()=>{
        if(user?.email){
            setLikes(!likes);
            setSaved(true);

            await updateDoc(moiveID,{
                savedShows: arrayUnion({
                    id: items.id,
                    title: items.title,
                    img: items.backdrop_path,
                })
            })
        }
        else{
            alert('Please LogIn first to save your Show.')
        }
        
    }

    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2" key={id}>
            <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`} alt={items?.title} />

            <div className="absolute top-0 left-0  w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white" >
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center text-center items-center h-full'>
                    {items?.title}
                </p>
                <p onClick={saveShows}>
                    {likes? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}

                </p>
            </div>
        </div>
    )
}

export default Movie
