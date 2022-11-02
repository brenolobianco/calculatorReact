import { Container } from "./styles/container";
import { Content, Row } from "./styles/content";
import Input from "./components/input";

import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  function handleOnClear  ()  {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  function handleAddNumber (num) {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  function handleSumNumbers() {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const calc = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(calc));
      setOperation("");
    }
  }

  function handleMinusNumbers () {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const calc = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(calc));
      setOperation("");
    }
  };

  function handleMultiplyNumbers () {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const calc = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(calc));
      setOperation("");
    }
  };
  function handleDivideNumbers () {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const calc = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(calc));
      setOperation("");
    }
  };

  function handleEquals () {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="CE"  />
          <Button label="C" onClick={handleOnClear} />
      
         
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("5")} />
          <Button label="3" onClick={() => handleAddNumber("6")} />
          <Button label="%"  />
        </Row>
        <Row>
        <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
