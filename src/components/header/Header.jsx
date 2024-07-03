import './header.css'

import headerImg from '../.././assets/yordan-working.png'

export default function Navbar() {
    return (
        <>
            <header className="header">
                <img className="header__img" src={headerImg} alt="Portrait image of Yordan" />
                {/* Personal details section */}
                <section className="header__info">
                    <h1 className="header__title">Hey, Yordan here!</h1>
                    <p className='text-s'>I am a front-end developer from The Hague 🇳🇱
                        <br></br>
                        Crafting high-quality software that enhances users’ lives. Approaching development with a keen eye for detail and passionate about polished interfaces.
                    </p>
                </section>
            </header>
        </>
    );
}