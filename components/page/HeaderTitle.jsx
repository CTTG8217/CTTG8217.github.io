import React from 'react'
import Link from 'next/link'

class HeaderTitle extends React.Component {
    render() {
        return (
            <Link href='/'>
                <a className="text-xl tracking-tighter font-medium transition-all duration-200 hover:opacity-30">
                    Middle School Dev Story
                </a>
            </Link>
        )
    }
}

export default HeaderTitle
