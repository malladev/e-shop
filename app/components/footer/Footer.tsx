
import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <div className='bg-slate-700 text-sm mt-16 text-white'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Destops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">Tvs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Return & Exchanges</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">Faqs</Link>
                    </FooterList>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0 mr-5'>
                        <h3 className='text-base font-bold mb-2'>About Us</h3>
                        <p className='mb-2 text-justify'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem porro id ullam. Repudiandae ipsam autem in non facere est eius quisquam ad quod. Neque explicabo voluptas hic iure labore!
                        </p>
                        <p>&copy; {new Date().getFullYear()} Malla Dev. All right reserved.</p>
                    </div>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Follow Us</h3>
                        <div className='flex gap-2'>
                            <Link href="#">
                                <MdFacebook size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillInstagram size={24} />
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </div>
    )
}

export default Footer