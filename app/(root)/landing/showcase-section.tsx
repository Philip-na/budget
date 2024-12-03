import React from 'react'
import ShowcaseTabs from './showcase-tabs'

const ShowcaseSection = () => {
  return (
    <div className="primary-section py-10">
        <div className="container ">

            <h1 className='text-2xl  font-semibold font-sans '>
                All on univesell
            </h1>
            <p className='text-gray-500'>
                Discover all the best events happening around you
            </p>

            <ShowcaseTabs />

        </div>
    </div>
  )
}

export default ShowcaseSection