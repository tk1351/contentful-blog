import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Custom404: NextPage = () => {
  return (
    <div>
      <h1>
        <span className="font-medium text-indigo-600">404</span>- Page Not Found
      </h1>
      <Link href="/">
        <a>
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Go back home
          </button>
        </a>
      </Link>
    </div>
  )
}

export default Custom404
