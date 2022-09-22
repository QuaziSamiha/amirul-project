import React from 'react'
import Service from '../Service/Service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowLeft, faBook, faCab, faDatabase, faHome, faStickyNote, faTableList, faUser } from '@fortawesome/free-solid-svg-icons'


const services = [
    {
        title: 'Transport',
        img: <FontAwesomeIcon className='h-8 w-10' icon={faCab} />,
        descriptions: ['Running Students(1338)', 'Departmens(13)', 'Cultural Programs(2)']
    },
    {
        title: 'Leave Application',
        img: <FontAwesomeIcon className='h-8 w-10' icon={faTableList} />,
        descriptions: ['Running Students(1338)', 'Departmens(13)', 'Cultural Programs(2)']
    },
    {
        title: 'Storage Management',
        img: <FontAwesomeIcon className='h-8 w-10' icon={faDatabase} />,
        descriptions: ['Running Students(1338)', 'Departmens(13)', 'Cultural Programs(2)']
    },
    {
        title: 'Library',
        img: <FontAwesomeIcon className='h-8 w-10' icon={faBook} />,
        descriptions: ['Running Students(1338)', 'Departmens(13)', 'Cultural Programs(2)']
    },
    {
        title: 'Result System',
        img: <FontAwesomeIcon className='h-8 w-10' icon={faStickyNote} />,
        descriptions: ['Running Students(1338)', 'Departmens(13)', 'Cultural Programs(2)']
    },
    {
        title: 'Guest House',
        img: <FontAwesomeIcon className='h-8 w-10' icon={faHome} />,
        descriptions: ['Running Students(1338)', 'Departmens(13)', 'Cultural Programs(2)']
    }
]

console.log(services.descriptions)
export default function Services() {
    return (
        <section className="mx-8 md:mx-10 lg:mx-16">
            <div className='flex flex-row'>
                <div className='pt-5 sm:pt-2 md:pt-6 text-white'>
                    <FontAwesomeIcon icon={faArrowLeft} className='h-4 w-4 md:w-5 md:h-5' />
                </div>
                <div className='grow text-center'>
                    <h1 className='md:text-xl tracking-wide text-white underline p-4'>
                        Registrar Portal
                        {/* <hr className='w-8 flex justify-center'/> */}
                    </h1>
                </div>
            </div>
            <div className='sm:grid grid-rows-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map((service, index) => <Service key={index} service={service} />)
                }
            </div>
            <div className='py-6 text-white flex flex-row-reverse'>
                <button className='px-4 m-2 border-2 border-white'>
                    <FontAwesomeIcon icon={faArrowCircleLeft} className='pr-2 h-4 w-4' />
                    Logout
                </button>
                <button className='px-4 m-2 border-2 border-white'>
                    <FontAwesomeIcon icon={faUser} className='pr-2 h-4 w-4' />
                    Profile
                </button>
            </div>
        </section>
    )
}
