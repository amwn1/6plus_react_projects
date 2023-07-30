
import './App.css'
import ContactForm from './componenets/ContactForm/ContactForm'
import ContactHeader from './componenets/ContactHeader/ContactHeader'
import Navigation from './componenets/Navigation/Navigation'


function App() {
  return (
    <div>
  <Navigation/>
  <main className="main_container">
  <ContactHeader/>
  <ContactForm/>
  </main>
    </div>
  )
}

export default App
