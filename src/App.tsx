import { BellRing, CheckCircle, Info, Shield, Sun, Zap } from 'lucide-react';
import Alert from './componets/UI/Alert';
import './App.css';


function App() {
  return (
    <>
      <Alert
        type="alert-danger"
        icon={<BellRing />}
        title="Warning"
        description="This is a warning alert. Please take the necessary precautions to avoid potential issues."
      />
      <Alert
        type="alert-success"
        icon={<CheckCircle />}
        title="Success"
        description="This is a success alert. Your operation was completed successfully without any issues."
      />
      <Alert
        type="alert-info"
        icon={<Info />}
        title="Information"
        description="This is an informational alert. Here are some important details you should be aware of."
      />
      <Alert
        type="alert-security"
        icon={<Shield />}
        title="Security Warning"
        description="This is a security warning. Please ensure that your systems are up to date and secure."
      />
      <Alert
        type="alert-light"
        icon={<Sun />}
        title="Light Alert"
        description="This is a light-themed alert. Use it for subtle notifications or information."
      />
      <Alert
        type="alert-primary"
        icon={<Zap />}
        title="Primary Alert"
        description="This is a primary alert. It is used for key information that requires attention."
      />
    </>
  );
}

export default App;
