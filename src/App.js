import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);
  //   const [test, setTest] = useState('Carefully');
  function handlePrevious() {
    if (step > 1) setStep((s) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => step + 1);
    // setTest('around the world');
  }
  return (
    <div>
      <button className="close" onClick={() => setIsopen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              👈PREVIOUS
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              NEXT👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      <p>{children}</p>
    </div>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
