import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const BlogItems = () => {
  return (
    <div className='w-[300px] min-w-[300px] bg-transparent h-[400px]  relative'>
         <img src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1754184139/dwqqac72j2woyns4nurs.jpg" alt="" className="photo h-[60%] object-cover w-full" />
         <div className="layer gap-2 pt-5 w-[90%]  flex flex-col items-start bg-greenMain absolute top-[55%] left-0">
            <h1 className="title text-2xl font-bold">The sunset faded to twiling.</h1>
            <div className='flex items-center gap-3'>
                <p className="flex gap-5">July 20, 2025</p>
                <div className="dot w-1 h-1 bg-yellow rounded-full"></div>
                <p className="about uppercase">life style</p>
            </div>
            <div className="line w-[37%] h-1 bg-yellow"></div>
            <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ducimus non facilis atque laborum obcaecati unde? Aspernatur vitae doloremque modi.
            </div>
            <button className='btn flex items-center' type='button'>Read More <GoArrowUpRight/> </button>
         </div>
    </div>
  )
}

export default BlogItems