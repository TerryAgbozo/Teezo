import Spinners from "../components/Spinner"
import { useState } from "react"
import Props from "../components/Types"

function LostCall({setShowModal, setShowNotification, setNotificationTitle, setNotificationSubTitle, setNotificationMessage, setNotificationBackground}:Props) {
    const [buttonState, setButtonState] = useState<boolean>(false)
    const scenario = ['Dropped Call', 'Silent Call', 'No Response', 'Noise on Line']
    return (
        <>
            <div className="container d-flex align-items-center flex-column">
                <div className="collapse" id="spinners">
                    <Spinners></Spinners>
                </div>
                {
                    scenario.map((scenarion) => (                    
                        <button disabled={buttonState} type= 'button' className="btn btn-primary m-3" style={{ width:'250px' }} data-bs-toggle='collapse' data-bs-target='#spinners' 
                            onClick={()=> { setButtonState(true);
                            window?.chrome.runtime.sendMessage('kkohbkkfcmlialblnjijlemfjicoocci', {lost_call: 3}, res => {setShowModal(false); setShowNotification(true); setNotificationTitle('Lost Call'); setNotificationSubTitle(`@ ${new Date().toLocaleTimeString()}`); setNotificationMessage(res?.message || "message from SW"); res?.success || setNotificationBackground('danger') }) }}>
                            <div>
                                {scenarion}
                            </div>
                        </button> 
                    ))
                }
            </div>                  
        </>
    );
  }
  
  export default LostCall
  