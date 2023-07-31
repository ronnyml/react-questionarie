import "./styles/App.css";

import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <div className="left-column"></div>
      <div className="right-column">
        <div className="wizard">
          <div className="step">
            <div className="circle active">1</div>
            <span className="line"></span>
            <div className="step-name step-active">Personal info</div>
          </div>
          <div className="step">
            <div className="circle">2</div>
            <span className="line"></span>
            <div className="step-name">Provider info</div>
          </div>
          <div className="step">
            <div className="circle">3</div>
            <div className="step-name">Contact info</div>
          </div>
        </div>

        <h1 className="title">Personal Information</h1>
        <h1 className="subtitle">Tell us about yourself.</h1>

        <Form />
      </div>
    </div>
  );
}

export default App;
