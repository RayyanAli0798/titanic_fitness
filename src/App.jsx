import './App.css'
import DesktopHeader from './components/DesktopHeader/DesktopHeader'
import MobileHeader from './components/MobileHeader/MobileHeader';
import Pages from './routing';

function App() {

  return (
    <>
      <DesktopHeader />
      <MobileHeader/>
      <main id='main-content'>
        <Pages/>
        
      </main>
    </>
  )
}

export default App
