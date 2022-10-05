import Image from 'next/image'
import React from 'react'

export default function Errorpage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        
    <Image src="/svg/undraw_page_not_found_re_e9o6.svg" height='700hv' width='700wv' alt='error'/>
    </div>
  )
}
