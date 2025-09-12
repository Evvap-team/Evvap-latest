import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.tsx'
import Contact from './pages/contact.tsx'
import Header from './components/header.tsx'

const AppRoutes=()=>(
    <>
   <Header />
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>

    </Routes>
    </>
)

export default AppRoutes