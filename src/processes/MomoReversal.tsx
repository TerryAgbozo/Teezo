import { Container,FloatingLabel, Form, Row, Col, InputGroup, Button, Table, Dropdown, DropdownButton } from "react-bootstrap";
import Spinners from "../components/Spinner";
import { useEffect, useState } from "react";
import Props from "../components/Types";

function MomoReversal({setShowModal, setShowNotification, setNotificationTitle, setNotificationSubTitle, setNotificationMessage, setNotificationBackground}:Props) {
  const [list,setList] = useState<string[]>([])
  const [table,setTable] = useState<string[][]>([['id-1','2','3','4','5','6','7','8','9','10','11', '12', '13', '14', '15'], ['id-2','2','3','4','5','6','7','8','9','10','11', '12', '13', '14', '15'], ['id-3','2','3','4','5','6','7','8','9','10','11', '12', '13', '14', '15'], ['id-4', '2','3','4','5','6','7','8','9','10','11', '12', '13', '14', '15'], ['id-5', '2','3','4','5','6','7','8','9','10','11', '12', '13', '14', '15']])
  const [tableRender,setTableRender] = useState<string[][]>(table)
  const [loading,setLoading] = useState<boolean>(false)
  const [logTicket,setLogTicket] = useState<boolean>(false)
  const [disableButton,setDisableButton] = useState<boolean>(false)
  const [receiverBalance,setReceiverBalance] = useState<string>('')
  const [sender,setSender] = useState<string>('')
  const [receiver,setReceiver] = useState<string>('')
  const [amount,setAmount] = useState<string>('')
  const [transactionId,setTransactionId] = useState<string>('')
  const [fromDate,setFromDate] = useState<string>('')
  const [toDate,setToDate] = useState<string>('')
  const [district,setDistrict] = useState<string>('')
  const [province,setProvince] = useState<string>('')
  const [alternativeNumber,setAlternativeNumber] = useState<string>('')

  useEffect(() => {
    setTableRender(
      table.filter( a => 
      a[0]?.includes(transactionId) && 
      // (new Date(a[2]).getTime() - new Date(fromDate).getTime())||1 > 0 &&
      // (new Date(`${toDate} 23:59:59`).getTime() - new Date(a[2]).getTime())||1 > 0 &&
      (a[6]?.includes(sender) || a[7]?.includes(sender)) &&
      a[9]?.includes(receiver) &&
      a[14]?.includes(amount) )
      )
  }, [sender,receiver,amount,transactionId,fromDate,toDate])
  
    return (
      <>
        <Container className="d-flex flex-column align-items-center justify-content-center">
            { loading && <Spinners/>}
            {receiverBalance && <i style={{ color:'blue' }}>The available account balance of receiver is GHS50.00</i>}
          </Container>
        <Container className="p-0">
          <Row className="g-2 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Sender">
                <Form.Control type="text" placeholder="sender" onChange={(e) => setSender(e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Receiver" >
                <Form.Control type="text" placeholder="receiver" onChange={(e) => setReceiver(e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Amount" >
                <Form.Control type="text" placeholder="amount" onChange={(e) => setAmount(e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Transaction ID" >
                <Form.Control type="text" placeholder="transaction id" onChange={(e) => setTransactionId(e.target.value)}/>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-2 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="From">
                <Form.Control type="date" placeholder="from date" onChange={(e) => setFromDate(e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="To" >
                <Form.Control type="date" placeholder="to date" onChange={(e) => setToDate(e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col className="col-6">
              <InputGroup>
                <FloatingLabel controlId="floatingSelectGrid" label="Action" >
                  <Form.Select aria-label="Floating label select example">
                    <option value="1">Confirm Transaction(s)</option>
                    <option value="2">Reverse Transaction(s)</option>
                  </Form.Select>
                </FloatingLabel>
                <Button disabled = {disableButton} onClick={(e) =>{ setDisableButton(true); list.length ? console.log(list) : console.log(sender,receiver,amount,transactionId,fromDate,toDate); if(Math.random() > 0.5){setLogTicket(true)}else{setLoading(true); window.chrome.runtime.sendMessage('kkohbkkfcmlialblnjijlemfjicoocci', {process: 'pin reset', contact: 3, request: 'tag', payload: {button:(e.target as HTMLButtonElement).id }}, res => {setShowModal(false); setShowNotification(true); setNotificationTitle('Reversal'); setNotificationSubTitle(`@ ${new Date().toLocaleTimeString()}`); setNotificationMessage(res?.message || "message from SW"); res?.success || setNotificationBackground('danger') }) } }}>Proceed</Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <Container className="p-1 mt-3 "  >
          
          <Container>
            { logTicket &&
              <Container className="py-1 rounded shadow my-2">
              <div style={{ marginTop:'-15px', backgroundColor:'white'}}>Log Ticket <i style={{ fontSize: '10px' }}>Partial Reversal</i></div>
              
              <InputGroup size="sm">
                <InputGroup.Text>Province</InputGroup.Text>
                <Form.Select title = 'Province'  onChange={(e)=>setProvince(e.target.value) }>
                  {
                    ['a','s','d', 'f'].filter(v => v.includes(district)).map((v, i) => (
                      <option key={i}>{v}</option>
                      ))
                    }
                </Form.Select>
                <InputGroup.Text>District</InputGroup.Text>
                <Form.Select title = 'District'  onChange={(e)=>setDistrict(e.target.value) }>
                  {
                    ['a','s','d', 'f'].filter(v => v.includes(district)).map((v, i) => (
                      <option key={i}>{v}</option>
                      ))
                    }
                </Form.Select>  
                <InputGroup.Text>Alternative Number</InputGroup.Text>
                <Form.Control value={alternativeNumber} onChange={(e)=>setAlternativeNumber(e.target.value)}></Form.Control>
                <Button onClick={(e)=>{setLogTicket(false); setLoading(true); console.log(district,province,alternativeNumber); window.chrome.runtime.sendMessage('kkohbkkfcmlialblnjijlemfjicoocci', {process: 'pin reset', contact: 3, request: 'tag', payload: {button:(e.target as HTMLButtonElement).id }}, res => {setShowModal(false); setShowNotification(true); setNotificationTitle('Log Ticket'); setNotificationSubTitle(`@ ${new Date().toLocaleTimeString()}`); setNotificationMessage(res?.message || "message from SW"); res?.success || setNotificationBackground('danger') }) }}>Proceed</Button>
              </InputGroup>
            </Container>}
          </Container>
          <Table responsive className="text-nowrap table-hover" >
            <thead>
              <tr>
                <th></th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index} className="no-wrap">Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                tableRender.map((value,index) => (
                <tr>
                  <td><input type="checkbox" name="1" id={value[0]} onChange={(e) => {list.some(v => v == e.target.id) ? setList(list.filter(v => v !== e.target.id)) :  setList(list.concat(e.target.id)); }} /></td>
                  {
                    value.map((data, ind) => ( <td key={ind}> {data} </td> ))
                  }
                </tr>
                ))
              }
              
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
  
  export default MomoReversal
  