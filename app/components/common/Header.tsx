import BugAtlas from '@/public/bugatlas.svg'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='w-full mx-auto py-2 text-gray-800'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <div className='flex gap-8 items-center'>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image src={BugAtlas} alt='Bug Atlas' width={30} height={30} />
                        <h1 className='font-bold text-2xl'>Bug Atlas</h1>
                    </Link>
                    <ul className='flex gap-3 font-semibold'>
                        <li>
                            <Link href='/'>Dashboard</Link>
                        </li>
                        <li>
                            <Link href='/bugs'>Bugs</Link>
                        </li>
                    </ul>
                </div>
                <Link href='/login' className='py-2 px-5 rounded bg-amber-500 font-semibold text-white hover:bg-amber-600 duration-300 ease-in-out'>Login</Link>
            </div>
        </div>
    )
}

export default Header