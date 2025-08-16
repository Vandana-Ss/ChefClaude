import Logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <img src={Logo}/>
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header