import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Component/Layout/Header';
import LoginForm from './Component/Pages/LoginForm';
import MailBox from './Component/Pages/Mailbox';
import Inbox from './Component/Pages/Inbox';
import SentMail from './Component/Pages/SentMail';
import ForgotPassword from './Component/Pages/ForgotPassword';


function App() {
  return (
    <div className='app-body'>
      <Header/>
      {/* <SiderBar/> */}
      <Routes>
      <Route path="/" element={ <LoginForm/>} />
      {/* <Route path="/sidebar" element={<SiderBar/>}/> */}
      <Route path="/mailbox" element={ <MailBox/>} />
      <Route path="/inbox" element={<Inbox/>}/>
      <Route path="/sent" element={<SentMail/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;