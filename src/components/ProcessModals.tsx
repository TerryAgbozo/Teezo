import 'bootstrap/dist/css/bootstrap.min.css'
import PinReset from '../processes/PinReset';
import MomoReversal from '../processes/MomoReversal';
import LostCall from '../processes/LostCall';
import { Modal } from 'react-bootstrap';

interface Props{
    modalHeader:string
    showModal:boolean
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>
    setShowNotification:React.Dispatch<React.SetStateAction<boolean>>
    setNotificationTitle:React.Dispatch<React.SetStateAction<string>>
    setNotificationSubTitle:React.Dispatch<React.SetStateAction<string>>
    setNotificationMessage:React.Dispatch<React.SetStateAction<string>>
    setNotificationBackround:React.Dispatch<React.SetStateAction<string>>
}

function ProcessModals({modalHeader, showModal, setShowModal, setShowNotification,  setNotificationTitle, setNotificationSubTitle, setNotificationMessage, setNotificationBackround}:Props) {
    function renderSwitch(param:string) {
        switch(param) {
          case 'PIN Reset':
            return <PinReset setShowModal={setShowModal} setShowNotification={setShowNotification} setNotificationTitle={setNotificationTitle} setNotificationSubTitle= {setNotificationSubTitle} setNotificationMessage= {setNotificationMessage} setNotificationBackground={setNotificationBackround}/>;
          case 'Momo Reversal':
            return <MomoReversal setShowModal={setShowModal} setShowNotification={setShowNotification} setNotificationTitle={setNotificationTitle} setNotificationSubTitle= {setNotificationSubTitle} setNotificationMessage= {setNotificationMessage} setNotificationBackground={setNotificationBackround}/>;
          case 'Lost Call':
            return <LostCall setShowModal={setShowModal} setShowNotification={setShowNotification} setNotificationTitle={setNotificationTitle} setNotificationSubTitle= {setNotificationSubTitle} setNotificationMessage= {setNotificationMessage} setNotificationBackground={setNotificationBackround}/>;
          case 'Account Suspension':
            return <div/>;
          default:
            return <div className="container"></div>;
        }
      }

  return (
    <>
      <Modal show = {showModal} onHide={()=>setShowModal(false)} size='xl' backdrop='static'>
        <Modal.Header closeButton= {true}>
          <Modal.Title>
              {modalHeader}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { renderSwitch(modalHeader)}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProcessModals;