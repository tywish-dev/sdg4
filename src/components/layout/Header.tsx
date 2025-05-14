"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Search } from '@/components/ui/search';

const Header = () => {
  const pathname = usePathname();

  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 grid grid-cols-3 items-center fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center">
        <Link href="/goals/4-quality-education">
          <div className="flex items-center space-x-2">
            <img
              src="https://www.kureselamaclar.org/wp-content/uploads/ka_logo.png"
              alt="The Global Goals"
              className="h-8 md:h-12"
            />
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center justify-center space-x-6">
        <Link
          href="/goals/4-quality-education"
          className={`text-sm font-bold transition-colors ${isActiveLink('/goals/4-quality-education')
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-800 hover:text-primary'
            }`}
        >
          Ana Sayfa
        </Link>
        <Link
          href="/goals"
          className={`text-sm font-bold transition-colors ${isActiveLink('/goals')
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-800 hover:text-primary'
            }`}
        >
          17 Hedef
        </Link>
        <Link
          href="/news"
          className={`text-sm font-bold transition-colors ${isActiveLink('/news')
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-800 hover:text-primary'
            }`}
        >
          Haberler
        </Link>
        <Link
          href="/videos"
          className={`text-sm font-bold transition-colors ${isActiveLink('/videos')
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-800 hover:text-primary'
            }`}
        >
          Videolar
        </Link>
      </nav>

      <div className="flex items-center justify-end space-x-4">
        <div className="w-64 md:w-80">
          <Search placeholder="Arama yap..." searchPath="/search" />
        </div>

        <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-gray-100 md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
