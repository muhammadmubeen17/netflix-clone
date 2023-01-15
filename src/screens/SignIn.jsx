import React from 'react'
import FooterSignin from '../components/FooterSignin'
import Navbar from '../components/Navbar'
import SigninForm from '../components/SigninForm'

const SignIn = () => {
  return (
    <>
      <section id='header' className='pt-5'>
        <Navbar screen="signin" />
        <SigninForm />
        <FooterSignin />
      </section>
    </>
  )
}

export default SignIn