'use client'
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProductImages({images}:{images:string[]}) {
    const [current, setCurrent] = useState(0)
  return (
    <div className="space-y-4">
      <Image src={images[current]} alt='product_image' height={1000} width={1000}/>
      <div className="flex gap-2">
        {images.map((image, index) => 
          <div key={index} onClick={ () => setCurrent(index)} className={cn(
            'cursor-pointer border mr-2 hover:border-orange-600',
            index === current && 'border-orange-600'
          )}>
            <Image src={image} alt='product_image' height={100} width={100} />
          </div>
        )}
      </div>
    </div>
  )
}
