import React, { useState } from "react";
import "./Fonts.css"
import Load from "../src/components/Load/Load";
import Modal from "../src/components/Modal/Modal";
require('dotenv').config()

function App() {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Load setModal={setModal}/>
      <Modal
        state={modal}
        setState={setModal}

      />
    </div>
  );
}

export default App;
