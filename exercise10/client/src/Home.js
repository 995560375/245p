// Components

import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function Home() {
  return (
    <>
      <Main content={MAIN_DATA[4].content} />
    </>
  );
}

export default Home;