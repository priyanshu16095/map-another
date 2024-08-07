import React, { useState } from 'react'

function Navbar() {
    const [navbarSticky, setNavbarSticky] = useState(false)

    function handleScroll(e) {
        if (window.scrollY > 10) {
            setNavbarSticky(true)
            return
        }
        setNavbarSticky(false)
    }
    window.addEventListener('scroll', handleScroll)

    return (
        <div className={`navbar ${navbarSticky && 'navbar__sticky'}`}>
            <div className="navbar__container flex-s gap">
                <div className="navbar__right flex-h gap-xl">
                    <p className="font bold">NaveIn</p>
                    <p className="link show">Docs</p>
                    <p className="link show">About</p>
                    <p className="link show">Products</p>
                </div>

                <p className="link">Log in</p>
            </div>
        </div>
    )
}

export default Navbar
