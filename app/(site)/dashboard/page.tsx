import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Dashboard = async() => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
  return (
       <div className="flex flex-col overflow-hidden relative flex-col pb-12 w-full lg:min-h-[700px] max-md:max-w-full">
    <p className=' flex flex-col mt-20 text-xl justify-center items-center'>Hi {user?.given_name}, this is your dashboard </p>

    </div>

  )
}

export default Dashboard