import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

interface Props{
    showNotification:boolean,
    notificationTitle:string,
    notificationSubTitle:string,
    notificationMessage:string,
    notificationBackground:string|'success'|'danger',
    setShowNotification:React.Dispatch<React.SetStateAction<boolean>>
}
function Notification({showNotification, setShowNotification, notificationTitle,notificationSubTitle,notificationMessage, notificationBackground}:Props) {
  return (
        <ToastContainer  position='bottom-end' className='m-3' >
            <Toast show = {showNotification} onClose={() => setShowNotification(false)} bg={notificationBackground}>
                <Toast.Header >
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{notificationTitle}</strong>
                <small className="text-muted">{notificationSubTitle}</small>
                </Toast.Header>
                <Toast.Body className='text-white'>{notificationMessage}</Toast.Body>
            </Toast>
        </ToastContainer>
      );
}

export default Notification;