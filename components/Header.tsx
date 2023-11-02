import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Logo from '../public/static/images/pictok.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex flex-col items-center justify-between">
            <div className="mr-10 relative">
              {/* <Logo /> */}
              <p className="absolute pt-12 text-lg font-extrabold 	font-sans">PicTok</p>
              <Image src={Logo} alt="logo" width={50} height={50} className="ml-9" />

              {/* <div className="bg-white w-[28px] h-[21px] absolute top-2 left-3 -z-10"></div> */}
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
