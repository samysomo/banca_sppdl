import HeaderBox from '@/components/HeaderBox'
import ServiceCard from '@/components/ServiceCard'
import { Services } from '@/constants'
import React from 'react'

const ServicesPage = () => {
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox
          title='Pay your services'
          subtext='Select your providers and easily pay your bills.'
        />
        <div className='space-y-4'>
          <h2 className='header-2'>
            Services
          </h2>
        </div>
        <div className='flex w-full items-center justify-center mt-10'>
          <div className='grid grid-cols-4 gap-8'>
            {Services.map((service) => (
              <ServiceCard tittle={service.serviceName} key={service.serviceName}/>
            ))}
          </div>
        </div>
        <div>
          </div> 
      </div>  
    </section>
  )
}

export default ServicesPage