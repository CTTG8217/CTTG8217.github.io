import React from 'react'
import Link from "next/link";

class HeaderItem extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a className="text-xl tracking-tighter font-light transition-all duration-200 hover:opacity-30">
                    {this.props.children.toLowerCase()}
                </a>
            </Link>
        )
    }
}

export default HeaderItem
