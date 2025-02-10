import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import { PiMusicNote } from 'react-icons/pi'

export default function Logo() {
  return (
    <Link href="/" className='flex items-center font-black text-3xl gap-0.5 group'>
      <div className="w-[260px] h-[73px] flex items-center"> {/* Use flex to align items in the same line */}
        <Image 
          src="/3k-logo_272x146.png" 
          alt="Music Note"
          width={136} 
          height={73} 
        />
        <p className="ml-4"> {/* Add margin to the left of the text */}
          <span className="text-primary">ก๊อกๆๆ</span>
          <br />
          <span className="text-[22px] font-light">v.1.2.0</span>
        </p>
      </div>
    </Link>
  )
}
