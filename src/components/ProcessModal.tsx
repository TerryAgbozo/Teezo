// import 'bootstrap/dist/css/bootstrap.min.css'
// import PinReset from '../processes/PinReset';
// import MomoReversal from '../processes/MomoReversal';
// import LostCall from '../processes/LostCall';
// interface Props{
//     modalHeader:string
// }

// function ProcessModal({modalHeader}:Props) {
//     function renderSwitch(param:string) {
//         switch(param) {
//           case 'PIN Reset':
//             return <PinReset/>;
//           case 'Momo Reversal':
//             return <MomoReversal/>;
//           case 'Lost Call':
//             return <LostCall/>;
//           case 'PIN ':
//             return <PinReset/>;
//           default:
//             return <div className="container"></div>;
//         }
//       }

//   return (
//     <>
//         <div className="modal modal-xl fade" id="processModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}>
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                     <h5 className="modal-title" id="staticBackdropLabel">{modalHeader}</h5>
//                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body">
//                     { renderSwitch(modalHeader)}
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   );
// }

// export default ProcessModal;