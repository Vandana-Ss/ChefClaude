import Logo from '../assets/logo.png'

function Header() {
    return (
        <>
        <header>
            <img src={Logo} alt='logo' className='app-logo' />
            <p className='heading'>Chef Claude</p>
        </header>
        </>
    )
}

export default Header