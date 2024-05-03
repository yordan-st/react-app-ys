import heroImg from '../assets/hero-img.png'

export default function Hero() {
    return (
        <section className='hero'>
            <img src={heroImg} className="hero--img" alt="Hero image grid" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}