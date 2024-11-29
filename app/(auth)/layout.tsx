import React from 'react'

const Layout = (
    { children }: { children: React.ReactNode }
) => {
  return (
   <section className='flex flex-col justify-center items-center min-h-[100vh]'>
    {children}
   </section>
  )
}

export default Layout