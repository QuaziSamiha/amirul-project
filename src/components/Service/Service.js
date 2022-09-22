import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Service(props) {

  const { title, img, descriptions } = props.service;

  // console.log(descriptions);
  const [a, b, c] = descriptions;

  return (
    <div class="bg-gray-50 bg-opacity-30 text-white rounded-xl lg:rounded-3xl my-6 mx-4 md:mx-10 xl:mx-16 p-6 md:p-8 h-64 md:h-72 lg:h-80 md:hover:h-80 md:hover:h-80 hover:bg-white hover:text-blue-500">
      <h3 className='text-center font-bold text-lg md:text-xl tracking-wide'>{title}</h3>
      <div>
        <div className='my-4 md:hover:my-6 flex justify-center'>
          {img}
        </div>
        <ul className='mx-2 lg:mx-auto my-6 md:hover:my-8 text-xs md:text-sm tracking-wide	'>
          <li> <FontAwesomeIcon icon={faCheck} /> {a}</li>
          <li> <FontAwesomeIcon icon={faCheck} /> {b}</li>
          <li> <FontAwesomeIcon icon={faCheck} /> {c}</li>
        </ul>
        <div className='flex justify-center border-2 border-white-400 mx-8 rounded text-center hover:text-white hover:bg-blue-600 hover:border-0'>
          <button className='px-8 hover:py-2 text-base md:text-lg font-semibold tracking-wide'>
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}
