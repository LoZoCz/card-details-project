import "../dist/style.css";
import { Cards } from "./Cards";
import { Form } from "./Form";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMonth, setUserMonth] = useState("");
  const [userYear, setUserYear] = useState("");
  const [userCvc, setUserCvc] = useState("");

  return (
    <main className="main-cont">
      <Cards
        cardNumber={userNumber}
        cardName={userName}
        cardMonth={userMonth}
        cardYear={userYear}
        cardCvc={userCvc}
      />

      <Form
        setUserName={setUserName}
        setUserNumber={setUserNumber}
        setUserMonth={setUserMonth}
        setUserYear={setUserYear}
        setUserCvc={setUserCvc}
        cardNumber={userNumber}
        cardName={userName}
        cardMonth={userMonth}
        cardYear={userYear}
        cardCvc={userCvc}
      />
    </main>
  );
}

export default App;
