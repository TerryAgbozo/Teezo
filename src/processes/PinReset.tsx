import { useState, useEffect } from "react";
import Spinners from "../components/Spinner";
import { Button, Container, InputGroup } from "react-bootstrap";
import Props from "../components/Types";

function PinReset({setShowModal, setShowNotification, setNotificationTitle, setNotificationSubTitle, setNotificationMessage, setNotificationBackground}:Props) {
  const [buttonState, setButtonState] = useState<boolean>(false)
  const [pin, setPin] = useState<{[index:string]:string}|null|undefined>(null)
  const resolutions = ['a', 'b']

  useEffect(() => { window?.chrome.runtime.sendMessage('kkohbkkfcmlialblnjijlemfjicoocci', {process: 'pin reset', contact: 3, request: 'data', payload: {}}, res => {setPin(res)});  }, [])
  
  useEffect(() => {
    document.querySelectorAll('.btn_pin').forEach(btn => {btn.addEventListener('click', (e) => 
    { setButtonState(true); window.chrome.runtime.sendMessage('kkohbkkfcmlialblnjijlemfjicoocci', {process: 'pin reset', contact: 3, request: 'tag', payload: {button:(e.target as HTMLButtonElement).id }}, res => {setShowModal(false); setShowNotification(true); setNotificationTitle('PIN Reset'); setNotificationSubTitle(`@ ${new Date().toLocaleTimeString()}`); setNotificationMessage(res?.message || "message from SW"); res?.success || setNotificationBackground('danger') })  })});    
  }, [pin])
  

    return (
      <>
        <Container className="d-flex align-items-center flex-column justify-content-center">
          {
            !pin ? <Spinners></Spinners> :
            <Container className="d-flex align-items-center flex-column justify-content-center" style={{ width:'65%' }}>
              <div className="collapse" id="spinners_pin">
                    <Spinners></Spinners>
                </div>

                <Container className="d-flex my-1 p-0" >
                  <div className="container-fluid">
                    <form className="form-floating">
                      <input readOnly type="text" className="form-control" id="customer_name"  value={pin?.customer_name}/>
                      <label htmlFor="customer_name">Name on SIM</label>
                    </form> 
                  </div>
                  <div className="container-fluid">
                    <form className="form-floating" >
                        <input readOnly type="text" className="form-control" id="account_holder"  value={pin?.account_holder}/>
                        <label htmlFor="account_holder">Name on Account </label>
                      </form> 
                  </div>
                </Container>

                <Container className="d-flex my-1 p-0" >
                  <div className="container-fluid">
                    <form className="form-floating">
                      <input readOnly type="text" className="form-control" id="customer_id"  value={pin?.customer_id}/>
                      <label htmlFor="customer_id">ID on SIM</label>
                    </form> 
                  </div>
                  <div className="container-fluid">
                    <form className="form-floating" >
                      <input readOnly type="text" className="form-control" id="account_id"  value={pin?.account_id}/>
                      <label htmlFor="account_id">ID on Account</label>
                    </form> 
                  </div>
                </Container>

                <Container className="d-flex my-1 p-0">
                  <div className="container-fluid">
                    <form className="form-floating">
                      <input readOnly type="text" className="form-control" id="dob"  value={pin?.dob}/>
                      <label htmlFor="dob">Date of Birth</label>
                    </form> 
                  </div>
                  <div className="container-fluid">
                    <form className="form-floating" >
                      <input readOnly type="text" className="form-control" id="account_balance"  value={pin?.account_balance}/>
                      <label htmlFor="account_balance">Account Balance</label>
                    </form> 
                  </div>
                </Container>
              
              <Container className="d-flex justify-content-center flex-column align-items-center" >
                <Container className="shadow-lg rounded d-flex  flex-column m-3 p-2">
                  { pin?.pin_suspended && <><div> {pin?.status} </div> <hr /></>}
                  <div> {pin?.diagnosis} </div>
                </Container>
              </Container>
              
              <Container className="d-flex justify-content-center flex-column align-items-center">
                {pin?.complete         && <Button disabled= {buttonState} className="m-1 btn_pin" data-bs-toggle='collapse' data-bs-target='#spinners_pin' style={{ width:'100%' }} id="not_affected_number">Not Calling with Affected Number</Button>}
                {pin?.pin_suspended    && <Button disabled= {buttonState} className="m-1 btn_pin" data-bs-toggle='collapse' data-bs-target='#spinners_pin' style={{ width:'100%' }} id="pin_suspension">Tag for PIN Suspension</Button>}
                {pin?.passed_prechecks || <Button disabled= {buttonState} className="m-1 btn_pin" data-bs-toggle='collapse' data-bs-target='#spinners_pin' style={{ width:'100%' }} id="diagnostic_tag">Tag Call Accordingly</Button>}
                {pin?.passed_prechecks && <Button disabled= {buttonState} className="m-1 btn_pin" data-bs-toggle='collapse' data-bs-target='#spinners_pin' style={{ width:'100%' }} id="failed_validation">Tag for failed validation</Button>}
                {pin?.passed_prechecks && <Button disabled= {buttonState} className="m-1 btn_pin" data-bs-toggle='collapse' data-bs-target='#spinners_pin' style={{ width:'100%' }} id="reset_pin">Reset PIN</Button>}
              </Container>

              {
                pin?.passed_prechecks && 
                  <Container className="m-1">
                    <InputGroup className="mb-3">
                      <select className="form-select">                  
                        {resolutions.map((value, index) => (<option key={index}> {value} </option>))}                    
                      </select>
                      <Button disabled= {buttonState} data-bs-toggle='collapse' data-bs-target='#spinners_pin' id="selection">Proceed with Selection</Button>
                    </InputGroup>
                  </Container>
              }
            </Container>
          }
        </Container>
      </>
    );
  }
  
  export default PinReset
  