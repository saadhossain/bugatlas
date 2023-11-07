'use client'
import BugAtlas from '@/public/bugatlas.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Header = () => {
    const navLinks = [
        {label: 'Dashboard', href:'/'},
        {label: 'Bugs', href:'/bugs'}
    ]
    const currentPath = usePathname();
    // console.log(currentPath);
    return (
        <div className='w-full mx-auto py-2 text-secondary'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <div className='flex gap-8 items-center'>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image src={BugAtlas} alt='Bug Atlas' width={30} height={30} />
                        <h1 className='font-bold text-2xl'>Bug Atlas</h1>
                    </Link>
                    <ul className='flex gap-3'>
                        {
                            navLinks.map((link)=><Link 
                            key={link.href}
                            href={link.href}
                            className={`${link.href === currentPath && 'text-accent border-b-2 border-accent' } text-secondary hover:text-accent transition-colors`}
                            >{link.label}</Link>)
                        }
                    </ul>
                </div>
                <Link href='/login' className='py-2 px-5 rounded bg-primary font-semibold text-white hover:bg-accent transition-colors'>Login</Link>
            </div>
        </div>
    )
}

export default Header