import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function CustomerDetails() {
    // var name:string,main_balance:string,id:string,business_type:string,dob:string
    const [data,setData] = useState<{[index:string]:string}>({})
    const contact = '244707947' // get contact from session storage
    useEffect(() => {
        data.complete || window.chrome.runtime.sendMessage('kkohbkkfcmlialblnjijlemfjicoocci', {request: 'customer details', contact}, res => { setData(res) })
    }, [])
    console.log(data);
    
    return (
        <>
            {
                data.complete &&
                <Container className='container-fluid shadow-lg mb-5 d-flex flex-column align-items-center' style={{ border: " solid red 1px" ,borderRadius:'10px'}}> 
                    <div className=" d-flex flex-column align-items-center"  >
                        <div className = "container " style={{ backgroundColor:'blue', width:'180px', margin: "-12px 0px 0px 0px", borderRadius:'10px', color: 'white' }}>
                            <strong>{contact}</strong>  
                        </div>
                        <div className="container-fluid d-flex">
                            
                            <form className="form-floating">
                                <input type="text" className="form-control m-1" id="customer_name"  value={data.name}/>
                                <label htmlFor="customer_name">Name</label>
                            </form>
                            
                            <form className="form-floating">
                                <input type="text" className="form-control m-1" id="customer_name"  value={data.main_balance}/>
                                <label htmlFor="customer_name">Main Balance</label>
                            </form>
                            
                            <form className="form-floating">
                                <input type="text" className="form-control m-1" id="customer_name"  value={data.id}/>
                                <label htmlFor="customer_name">ID</label>
                            </form>
                            
                            <form className="form-floating">
                                <input type="text" className="form-control m-1" id="customer_name"  value={data.business_type}/>
                                <label htmlFor="customer_name">Business Type</label>
                            </form>
                            
                            <form className="form-floating">
                                <input type="text" className="form-control m-1" id="customer_name"  value={data.dob}/>
                                <label htmlFor="customer_name">Date of Birth</label>
                            </form>
                            
                        </div>
                    </div>
                </Container>  
            }      
        </>
    );
  }
  
  export default CustomerDetails
  