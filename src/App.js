import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Account from './Pages/Account';
import {AuthContextProvider} from './context/AuthContext';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

// library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)


function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/account" element={<Account />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
