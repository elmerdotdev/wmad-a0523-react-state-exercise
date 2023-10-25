import './App.css'

import Welcome from './components/Welcome'
import ButtonLights from './components/ButtonLights'
import ButtonLotto from './components/ButtonLotto'
import ButtonCounter from './components/ButtonCounter'

const App = () => {
  const visitor = {
    firstname: 'Joe',
    lastname: 'Moe'
  }

  return (
    <div className="container">
      <Welcome name={visitor} />
      <div className="btn-wrapper">
        <ButtonLights />
        <ButtonLotto />
        <ButtonCounter />
      </div>
    </div>
  )
}

export default App