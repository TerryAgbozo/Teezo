
import NavbarComponent from './components/Navbar';
import { useState } from 'react';
import ProcessList from './components/ProcessList';
import ProcessModals from './components/ProcessModals';
import Notification from './components/Notification';


function App() {
  const [modalHeader, setModalHeader] = useState('h')
  const [showModal, setShowModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationTitle, setNotificationTitle] = useState('')
  const [notificationSubTitle, setNotificationSubTitle] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationBackground, setNotificationBackground] = useState('success')
  
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <ProcessModals modalHeader= {modalHeader} showModal= {showModal} setShowModal={setShowModal} setNotificationMessage={setNotificationMessage} setNotificationSubTitle={setNotificationSubTitle} setNotificationTitle={setNotificationTitle} setShowNotification={setShowNotification} setNotificationBackround={setNotificationBackground} /> 
      <ProcessList setModalHeader={setModalHeader} setShowModal={setShowModal}/>        
      <Notification showNotification = {showNotification} notificationTitle={notificationTitle} notificationSubTitle={notificationSubTitle} notificationMessage={notificationMessage} notificationBackground= {notificationBackground} setShowNotification={setShowNotification}></Notification>
    </>
  );
}

export default App
