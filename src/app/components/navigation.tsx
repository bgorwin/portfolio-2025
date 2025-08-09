import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
// import { fadeUpText } from '../animations/fadeUpText';

export default function Navigation() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  const linesRef = useRef<Array<HTMLDivElement | null>>([]);

  

  return (
    <div className="flex justify-end align-end p-4  bg-blur-[2px] backdrop-blur-md bg-white/10">
        <nav className="flex justify-end gap-4">
            <Link href="/" className={`nav-link ${activeLink === '/' ? 'active' : ''} text-xl`}>
                Home
            </Link>
            <Link href="/about" className={`nav-link ${activeLink === '/about' ? 'active' : ''} text-xl`}>
                About
            </Link>
            <Link href="/contact" className={`nav-link ${activeLink === '/contact' ? 'active' : ''} text-xl`}>
                Contact
            </Link>
        </nav>
    </div>
    
  );
}