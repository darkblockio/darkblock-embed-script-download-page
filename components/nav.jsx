import React from 'react'
import Link from 'next/link'

const Nav = () => {

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-xl"
      x-data="{ 'showModal': false }"
    >
      <nav className="mx-auto bg-white md:px-4 max-w-7xl lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-4">
          <div className="flex items-start md:flex md:items-center">
            <Link href="/" passHref>
              <img // eslint-disable-line
                className="hidden w-auto h-10 px-2 py-2 rounded cursor-pointer hover:bg-gray-200 md:block"
                src="/images/dblogo-black.svg"
                alt="Darkblock | Decentralized Unlockables"
              />
            </Link>
          </div>
          <Link href="/" passHref>
            <img // eslint-disable-line
              src="/images/footericon-blk.svg"
              className="h-6 md:hidden" alt="icon" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
