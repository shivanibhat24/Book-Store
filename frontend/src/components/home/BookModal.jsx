import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import React from 'react';

const BookModal = ({book, onClose}) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center" onClick={onClose}>
        <div onClick={(Event)=>Event.stopPropagation()} className="w-[600px] h-[400px] max-w-full bg-white rounded-xl p-4 flex flex-col relative">
            <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose}/>
        </div>
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
                    {item.publishYear}
                </h2>
                <h4 className="my-2 text-gray-500">{item._id}</h4>
                <div>
                    <PiBookOpenTextLight className="text-red-300 text-2xl"/>
                    <h2 className="my-1">{item.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-red-300 text-2xl"/>
                    <h2 className="my-1">{item.author}</h2>
                </div>
                <div className="flex justify-between items-center gap-x-2 mt-4 pt-4">
                  <Link to={`/books/details/${item._id}`}>
                   <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                  </Link>
                  <Link to={`books/edit/${item._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-700 hover:text-black" />
                  </Link>
                  <Link to={`books/edit/${item._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                  </Link>
                  <p className="mt-4">Anything you want to show</p>
                  <p className="my-2">
                    There once was a boy named Harry, destined to be a star.
                  </p>  
                </div>
    </div>
  )
}

export default BookModal