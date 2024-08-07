import React, { useEffect, useRef } from 'react'

function Login() {
    const emailRef = useRef()

    useEffect(() => {
        emailRef.current.focus()
    })

    return (
        <div className='auth center-both'>
            <div className="auth__container flex-v gap-l">
                <p className="font bold-xl orange">Welcome Back</p>
                {/* <p style={{ fontSize: '5rem' }}>😊</p> */}
                <div className="flex-c"><img src="map.png" width={'100rem'} /></div>
                <div className="auth__text flex-v gap-s">
                    <p className="font-l bold-xl">Sign In to Your Account</p>
                    <p className='primary'>Let's get you signed in and straight to your way.</p>
                </div>
                <div className="auth__inputs flex-v gap-s">
                    <input type="text" placeholder='Email Address' ref={emailRef} />
                    <input type="text" placeholder='Password' />
                </div>
                <button>Sign In</button>
                {/* <p className='flex-c gap-s'>Didn't have an account? <p className='link'>Sign up and get started!</p></p> */}
                <p className='flex-c gap-s'>Didn't have an account? <p className='link orange'>Sign up</p></p>
            </div>

        </div>
    )
}

export default Login
