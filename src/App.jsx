import './App.css'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'
import Pages from './routing';

function App() {

  return (
    <>
      <DesktopHeader />
      <main id='main-content'>
        <Pages/>
        
      </main>
    </>
  )
}

export default App
