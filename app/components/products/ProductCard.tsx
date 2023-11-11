"use client"

import { formatPrice } from '@/utils/formatPrice'
import { truncateText } from '@/utils/truncateText'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function ProductCard({data} : any) {

    const router = useRouter()

    const productRating = data.reviews.reduce((acc : number, item : any) => item.rating + acc, 0) /data.reviews.length

    return (
        <div onClick={() => router.push(`/product/${data.id}`)} className='col-span-1 cursor-pointer border-[1px] border-slate-200 bg-slate-50 rounded-md p-2 transition hover:scale-105 text-center'>
            <div className='aspect-square overflow-hidden relative w-full'>
                <Image fill className='w-full h-full object-contain' src={data.images[0].image} alt={data.name}/>
            </div>
            <div className='mt-5 px-2'>
                <div className='text-left'>
                    <Rating value={productRating} readOnly/>
                    <span className='text-base line-clamp-2'>{truncateText(data.name)}</span>
                    <span className='font-bold text-lg '>{formatPrice(data.price)}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard