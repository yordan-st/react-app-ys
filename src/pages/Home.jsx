import Header from '.././components/header/Header'
import Workhistory from '.././components/work-history/Workhistory'

function Home() {

  return (
    <>
      <Header></Header>
      <main>
        <section className="section section--dark">
              <h2>Currently doing</h2>
              <p>At the moment I am part of the front-end team for the Young Sogeti App. Here we develop a React application that provides Young Sogetists with relevant news and the ability to register for Young Sogeti events. Recently, I created a JavaScript calculator for the TMAP training sessions of the Sogeti Testing Community. I continuously update my knowledge and refine my skills, following the Sogeti Front-end Learning track to expand my expertise and stay current with the latest techniques.</p>
        </section>
        <section className="section section--dark last-section">
              <h2>Work history</h2>
              <Workhistory></Workhistory>
        </section>
      </main>
    </>
  )
}

export default Home
