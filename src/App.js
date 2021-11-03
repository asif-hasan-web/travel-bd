
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Plans from './pages/Plans';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import Booking from './pages/Booking';
import PrivateRoute from './Route/PrivateRoute';
import MyPackage from './pages/MyPackage';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <AuthProvider>
     <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/about'>
              <About></About>
            </Route>

            <Route path='/contact'>
              <Contact></Contact>
            </Route>

            <Route exact path='/plans'>
              <Plans></Plans>
            </Route>


            <PrivateRoute exact path='/mypackage'>
            <MyPackage></MyPackage>
            </PrivateRoute>

            
            <PrivateRoute exact path='/admin'>
            <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute exact path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>

          <Footer></Footer> 
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
