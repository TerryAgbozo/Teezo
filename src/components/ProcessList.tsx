import { Button, Col, Container, Row } from 'react-bootstrap';
import CustomerDetails from './CustomerDetails';
interface Props{
    setModalHeader:React.Dispatch<React.SetStateAction<string>>
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}


function ProcessList({setModalHeader, setShowModal}:Props) {
    const processes = [
        [{name:'PIN Reset', disabled:false},       {name:'Momo Reversal', disabled:false},  {name:'Lost Call',disabled:false},        {name:'Account Suspension', disabled:false}],
        [{name:'Network Issues', disabled:false},  {name:'Loan Query', disabled:false},    {name:'Me2U Suspension',disabled:false},  {name:'Credit Dispute', disabled:false}],
        [{name:'Network Issues', disabled:true},   {name:'Loan Query', disabled:true},    {name:'Me2U Suspension',disabled:true},  {name:'Credit Dispute', disabled:true}],
        [{name:'Network Issues', disabled:true},   {name:'Loan Query', disabled:true},    {name:'Me2U Suspension',disabled:true},  {name:'Credit Dispute', disabled:true}],
        [{name:'Network Issues', disabled:true},   {name:'Loan Query', disabled:true},    {name:'Me2U Suspension',disabled:true}]
    ]

    return (
        <>
            <Container className='shadow-lg mt-5 py-2 text-center'> 
                <h1>Automated Processes</h1>
                <hr />
                <Container className='py-3 responsive' style={{ backgroundColor: 'ButtonShadow', borderRadius: '10px', overflowWrap: 'normal' }}>
                    <CustomerDetails/>
                    {
                        processes.map((list,index) => (
                            <Row key={index} className='mt-3 mx-5' >
                                {list.map((process, ind) => (
                                    <Col>
                                        <Button key={ind} disabled={process.disabled} variant='outline-secondary' className='btn-lg' style={{ width: '100%' }} data-bs-toggle="modal" onClick={()=> {setModalHeader(process.name); setShowModal(true); }}> {process.name} </Button>            
                                    </Col>
                                ))}
                            </Row>
                        ))
                    }
                </Container> 
            </Container>       
        </>
    );
}

export default ProcessList;