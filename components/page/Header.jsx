import React from 'react'
import HeaderTitle from "./HeaderTitle";
import HeaderItem from "./HeaderItem";

class Header extends React.Component {
    render() {
        return (
            <div className="container items-center justify-between font-title flex h-16 pl-32 pr-64 shadow-md">
                <HeaderTitle />
                <div className="space-x-8">
                    <HeaderItem href='/'>about</HeaderItem>
                    <HeaderItem href='/'>posts</HeaderItem>
                </div>
            </div>
        )
    }
}

export default Header
