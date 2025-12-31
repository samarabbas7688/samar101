import React from 'react'
import link from 'next/link'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
          <Link href="/">home                                  </Link>
          <Link href="/about">about                            </Link>
          <Link href="/contact">contact                        </Link>
    </div>
  )
}

export default Navbar