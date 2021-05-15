import "./App.css";
import React from "react";
import LineChart from "./component/LineChart";
import BarChart from "./component/BarChart";
import DoughnutChart from "./component/DoughnutChart";

//*************Datepicker****************************/
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

//*************Credit Cards**********************/
// import React, { useState } from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";

//**************Color Picker*************************/
// import React, { useState } from "react";
// import { ChromePicker } from "react-color";

//**************Idle Timer*********************/
//import IdleTimerContainer from "./component/IdleTimerContainer";

//*************CountUp**************************************/
//import CountUp, { useCountUp } from "react-countup";

// //****************Tooltip**********************/
// import React, { forwardRef } from "react";
// import "tippy.js/dist/tippy.css";
// import Tippy from "@tippyjs/react";

//***********Modal in React****************** */
// import React, { useState } from "react";
// import Modal from "react-modal";

//*************for icons****************
// import { IconContext } from "react-icons";
// import { FaReact } from "react-icons/fa";
// import { MdAlarm } from "react-icons/md";

//**************Notification*******************/
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// ******************** react icons demo ******************
// function App() {
//   return (
//     <IconContext.Provider value = {{ color: 'blue', size: '5rem'}}>
//     <div className="App">
//     <FaReact color='purple' size='10rem'/>
//     <MdAlarm color='purple' size='10rem'/>
//     </div>
//     </IconContext.Provider>
//   );
// }
// export default App;

//**************Notification*******************/

// const CustomToast = ({cloaseToast}) => {
//   return(
//     <div>
//       Something went wrong!
//       <button onClick={cloaseToast}>Close</button>
//     </div>
//   )
// }
// toast.configure();
// function App() {
//   const notify = () => {
//     toast("Basic Notification!", {position: toast.POSITION.TOP_LEFT});
//     toast.success("Success Notification!", {position: toast.POSITION.TOP_CENTER, autoClose: 8000});
//     toast.info("Info Notification!", {position: toast.POSITION.TOP_RIGHT, autoClose: false});
//     toast.warn(<CustomToast />, {position: toast.POSITION.BOTTOM_LEFT});
//     toast.error("Error Notification!", {position: toast.POSITION.BOTTOM_CENTER});
//     toast("Basic Notification!", {position: toast.POSITION.BOTTOM_RIGHT});
//   };
//   return (
//     <div className="App">
//       <button onClick={notify}>Notify!</button>
//     </div>
//   );
// }
// export default App;

//***********Modal in React****************** */

// Modal.setAppElement('#root')
// function App() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   return (
//     <div className="App">
//       <button onClick={() => setModalIsOpen(true)}>Open modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         shouldCloseOnOverlayClick={false}
//         onRequestClose={() => setModalIsOpen(false)}
//         style={
//           {
//             overlay: {
//               backgroundColor: 'grey'
//             },
//             content: {
//               color: 'orange'
//             }
//           }
//         }
//       >
//         <h2>Modal title</h2>
//         <p>Modal body</p>
//         <div>
//           <button onClick={() => setModalIsOpen(false)}>Close</button>
//         </div>
//       </Modal>
//     </div>
//   );
// }
// export default App;

//****************Tooltip**********************/

// const ColoredTooltip = () => {
//   return <span style={{ color: "yellow" }}>Colored componenet</span>;
// };
// const CustomChild = forwardRef((props, ref) => {
//   return (
//     <div ref={ref}>
//       <div>First line</div>
//       <div>Second line</div>
//     </div>
//   );
// });

// function App() {
//   return (
//     <div className="App">
//       <div style={{ paddingBottom: "20px" }}>
//         <Tippy
//           placement="right"
//           arrow={false}
//           delay={1000}
//           content="Basic Tooltip"
//         >
//           <button>Hover</button>
//         </Tippy>
//       </div>

//       <div style={{ paddingBottom: "20px" }}>
//         <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
//           <button>Hover</button>
//         </Tippy>
//       </div>

//       <div style={{ paddingBottom: "20px" }}>
//         <Tippy content={<ColoredTooltip></ColoredTooltip>}>
//           <button>Hover</button>
//         </Tippy>
//       </div>

//       <div style={{ paddingInline: "20px" }}>
//         <Tippy content={<ColoredTooltip></ColoredTooltip>}>
//           <CustomChild></CustomChild>
//         </Tippy>
//       </div>
//     </div>
//   );
// }
// export default App;

//*************CountUp**************************************/
// function App() {
//   const { countUp, start, pauseResume, reset, update } = useCountUp({
//     duration: 5,
//     end: 10000,
//     startOnMount: false,
//   });
//   return (
//     <div className="App">
//       <div>
//         <h1>{countUp}</h1>
//         <button onClick={start}>Start</button>
//         <button onClick={reset}>Reset</button>
//         <button onClick={pauseResume}>Pause/ Resume</button>
//         <button onClick={() => update(2000)}>Update to 2000</button>
//       </div>

//       <h1>
//         <CountUp end={200} />
//       </h1>
//       <h1>
//         <CountUp end={200} duration={5} />
//       </h1>
//       <h1>
//         <CountUp start={500} end={1000} duration={5} />
//       </h1>
//       <h1>
//         <CountUp end={1000} duration={5} prefix="$" decimals={2} />
//       </h1>
//       <h1>
//         <CountUp end={1000} duration={5} suffix="USD" decimals={2} />
//       </h1>
//     </div>
//   );
// }
// export default App;

//**************Idle Timer*********************/
// function App() {
//   return (
//     <div className="App">
//     <IdleTimerContainer />
//     </div>
//   );
// }
// export default App;

//**************Color Picker*************************/
// function App() {
//   const [color, setColor] = useState("#fff");
//   const [showColorPicker, setShowColorPicker] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() =>
//           setShowColorPicker((showColorPicker) => !showColorPicker)
//         }
//       >
//         {showColorPicker ? "Close color picker" : "Pick a color"}
//       </button>
//       {showColorPicker && (
//         <ChromePicker
//           color={color}
//           onChange={(updatedColor) => setColor(updatedColor.hex)}
//         />
//       )}

//       <h2>You picked {color}</h2>
//     </div>
//   );
// }
// export default App;

//*************Credit Cards**********************/
// function App() {
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [focus, setFocus] = useState("");
//   return (
//     <div className="App">
//     <Cards
//       number={number}
//       name={name}
//       expiry={expiry}
//       cvc={cvc}
//       focused={focus}
//     />
//       <form>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Card Number"
//           maxLength='16'
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="text"
//           name="expiry"
//           placeholder="MM/YY Expiry"
//           value={expiry}
//           onChange={(e) => setExpiry(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="tel"
//           name="cvc"
//           placeholder="CVC"
//           value={cvc}
//           onChange={(e) => setCvc(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//       </form>
//     </div>
//   );
// }
// export default App;

//*************Datepicker****************************/
// function App() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   return (
//     <div className="App">
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         dateFormat='dd/MM/yyyy'
//         filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
//         isClearable
//         showYearDropdown
//         scrollableMonthYearDropdown
//         // minDate={new Date()}
//         // maxDate={new Date()}
//       />
//     </div>
//   );
// }
// export default App;

function App() {
  return (
    <div className="App">
      <div className="chart">
        {/* <LineChart /> */}
        {/* <BarChart /> */}
        <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
