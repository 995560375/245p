import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function App() {
  const LoginForm = ({ onSubmit }) => {
    // content of the LoginForm that we wrote above
    //refs
  const usernameRef = useRef();
  const passwordRef = useRef();

  //states
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
    const formData = {
      username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
      password: passwordRef.current.value,
    };
    // console.log(formData);
    onSubmit(formData); // upon submission we are calling the onSubmit function
  };

  const handleUsernameChange = (event) => {
      setUsernameValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
      setPasswordValue(event.target.value);
  };

  return (
    <div className="root">
    <form onSubmit={handleSubmit}>
      <table>
        <tr>username: <input ref={usernameRef} label="username" id="username" type="text" value={usernameValue} onChange={handleUsernameChange} /></tr>
        <tr>password: <input ref={passwordRef} label="password" id="password-input" type="password" value={passwordValue} onChange={handlePasswordChange} /></tr>
        <tr>
          <button
              id="login-button"
              type="submit"
            >
              submit
          </button>
      </tr>
      </table>
    </form>
    </div>
  );
  };

  // we are calling the LoginForm component in the actual render of the App

  // we are also writing a handleSubmit function that will be the output of our form and
  // that could be the interface to a connected backend service
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted thru the form
  };

  // render method
  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
