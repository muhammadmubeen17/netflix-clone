import React from 'react';
import FooterSignin from '../components/FooterSignin';
import LoginhelpForm from '../components/LoginhelpForm';
import Navbar from '../components/Navbar';

const LoginHelp = () => {
    return (
        <>
            <section id='login-help__header' className='pt-5'>
                <Navbar screen="loginhelp" />
                <LoginhelpForm />
                <FooterSignin />
            </section>
        </>
    );
}

export default LoginHelp;
