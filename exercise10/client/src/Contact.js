// Components

import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function Contact() {
  return (
    <>
      <Main content={MAIN_DATA[2].content} />
    </>
  );
}

export default Contact;