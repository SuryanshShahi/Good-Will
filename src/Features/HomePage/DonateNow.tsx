import { Button } from '@/@common/Button'
import React from 'react'

const DonateNow = () => {
  return (
    <div className="justify-center flex donation-bg">
    <div className="text-center my-[85px] max-w-2xl">
      <div className="font-bold text-[59px]">Donate Today</div>
      <p className="text-[20px] my-6">
        Charity law within the UK varies among England and Wales, Scotland
        and Northern Ireland, but the fundamental principles are the same.
      </p>
      <div className="flex gap-2 py-6">
        <Button name="$10" />
        <Button
          name="$25"
          bgColor="text-transparent"
          color="text-black"
          border="border-[2.4px] border-black"
        />
        <Button
          name="$50"
          bgColor="text-transparent"
          color="text-black"
          border="border-[2.4px] border-black"
        />
        <Button
          name="$100"
          bgColor="text-transparent"
          color="text-black"
          border="border-[2.4px] border-black"
        />
      </div>
      <button className="font-[500] text-white px-20 mt-3 text-sm bg-green-400 py-[14px]">
        DONATE NOW
      </button>
    </div>
  </div>
  )
}

export default DonateNow