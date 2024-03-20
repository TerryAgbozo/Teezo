import { Spinner } from "react-bootstrap"

function Spinners(){
    return (
            <div>
                <Spinner className="spinner-grow spinner-grow-sm text-danger me-1"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-warning me-1"></Spinner>
                <Spinner className="spinner-grow spinner-grow-sm text-success me-1"></Spinner>
                <Spinner className="spinner-border spinner-border-sm text-success me-2"></Spinner>
            </div>
    )
}

export default Spinners