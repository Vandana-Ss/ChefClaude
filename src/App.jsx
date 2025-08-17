import './App.css'
import Header from './components/Header.jsx'
import Page from './components/Page.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header/>
      <main className='app-container'>
        <Page/>
      </main>
      <Footer/>
    
    </>
  )
}

export default App
