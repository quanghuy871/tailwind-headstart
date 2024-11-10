import React from 'react'
import {WordMarkWhite} from "./icons";
import Link from "../utils/link";

const Header = () => {
    const [offCanvas, setOffCanvas] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [sticky, setSticky] = React.useState(false)
    const [direction, setDirection] = React.useState('down')

    let props = {
        onClick: () => setOffCanvas(false),
        activeClassName: 'active',
    }

    const openOffCanvas = () => {
        setOffCanvas(!offCanvas)
    }

    const closeMenu = () => {
        setOffCanvas(false)
    }

    let isScrolling
    let prevScroll = 0

    const onScroll = (e) => {

        let scr, hhScrolled

        const curScroll = window.scrollY || document.scrollTop
        const stickyHeader = document?.querySelector(".sticky-header")
        scr = curScroll > 1
        const dir = curScroll > prevScroll ? "down" : "up"

        if (Math.abs(prevScroll - curScroll) <= 5) return

        if (stickyHeader) {
            if (direction === "down") {
                setSticky(true)
                stickyHeader.classList.add("active")
            } else {
                setSticky(false)
                stickyHeader.classList.remove("active")
            }
        } else {
            setSticky(false)
        }

        prevScroll = curScroll

        requestAnimationFrame(() => {
            setScrolled(scr)
            setDirection(dir)
        })
    }

    const scrollDetect = () => {
        window.clearTimeout(isScrolling)
        isScrolling = setTimeout(onScroll, 0)
    }

    React.useEffect(() => {
        window.addEventListener("scroll", scrollDetect, false)
        return () => {
            window.removeEventListener("scroll", scrollDetect, false)
        }
    }, [])

    let headerClass = "header"
    if (scrolled) headerClass += " header--scrolled"
    if (offCanvas) headerClass += " header--off-canvas"
    if (sticky) headerClass += " header--sticky"
    if (direction === 'down' && scrolled) headerClass += ' header--up'

    return (
        <>
            <header className={headerClass}>
                <div className='header__inner'>
                    <div className='header__button'>
                        <Link className='btn btn--scarlet' to='/'>Book</Link>
                    </div>
                    <div className='header__nav'>
                        <ul>
                            <li><Link to='/menu' {...props}>Menu</Link></li>
                            <li><Link to='/shop-coming-soon' {...props}>Order Online</Link></li>
                            <li><Link to='/events' {...props}>Events</Link></li>
                        </ul>
                    </div>
                    <div className='header__logo'>
                        <Link to='/'><WordMarkWhite/></Link>
                    </div>
                    <nav className='header__nav'>
                        <ul>
                            <li><Link target='_blank' to='https://darlinggroup.com.au/vouchers/'>Vouchers</Link></li>
                            <li><Link to='/contact' {...props}>Contact</Link></li>
                            <li><Link to='https://www.sevenrooms.com/explore/cheri/reservations/create/search' className='btn btn--scarlet' {...props}>Book</Link></li>
                        </ul>
                    </nav>
                    <button onClick={() => openOffCanvas()}
                            className={`btn btn--light-maroon ${offCanvas ? 'header__hamburger active' : 'header__hamburger'}`}>
                        {offCanvas ? 'Close' : 'Menu'}
                    </button>
                </div>
            </header>

            <div className={`off-canvas ${offCanvas && 'active'}`}>
                <div className='off-canvas__inner'>
                    <nav className='off-canvas__nav'>
                        <ul>
                            <li><Link to='/menu' {...props}>Menu</Link></li>
                            <li><Link to='/shop-coming-soon' {...props}>Order Online</Link></li>
                            <li><Link to='/events' {...props}>Events</Link></li>
                            <li><Link to='https://darlinggroup.com.au/vouchers/' {...props}>Vouchers</Link></li>
                            <li><Link to='/contact' {...props}>Contact</Link></li>
                            <li><Link to='https://www.sevenrooms.com/explore/cheri/reservations/create/search' {...props}>Make a Booking</Link></li>
                        </ul>
                    </nav>

                    <div className='off-canvas__bottom'>
                        <Link to='/'>285–287 Coventry St <br/> STH.Mel VIC 3205</Link>
                        <Link to={`mailtoeat@cherieatery.com.au`}>eat@cherieatery.com.au</Link>
                        <Link to={`tel:+61396902688`}>03 9690 2688</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header