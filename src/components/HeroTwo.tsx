import React from 'react'
import Image from 'next/image'

export default function HeroTwo() {
  return (
    <div className='w-full h-[139px] flex justify-center items-center'>
      <div className='w-[86%] h-full flex justify-center items-center gap-x-28 mt-12'>
      <div> <Image
              src="/images/logo-01.png"
              alt=""
              width={87}
              height={85}
            /></div>
      <div>
      <Image
              src="/images/logo-02.png"
              alt=""
              width={107}
              height={109}
            />
      </div>
      <div>
      <Image
              src="/images/logo-03.png"
              alt=""
              width={135}
              height={139}
            />
      </div>
      <div>
      <Image
              src="/images/logo-4.png"
              alt=""
              width={87}
              height={85}
            />
      </div>
      <div>
      <Image
              src="/images/logo-5.png"
              alt=""
              width={113}
              height={115}
            />
      </div>
      <div>
      <Image
              src="/images/logo-6.png"
              alt=""
              width={87}
              height={85}
            />
      </div>
      <div>
      <Image
              src="/images/logo-07.png"
              alt=""
              width={63}
              height={65}
            />
      </div>
    </div>
    </div>
  )
}
