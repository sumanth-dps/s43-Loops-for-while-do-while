import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          let engMarks = 93;
          if (engMarks >= 35) {
            console.log("Student Passed in English");
          }
        }}
      >
        If
      </button>
      <button
        onClick={() => {
          let engMarks = 93;
          while (engMarks >= 35) {
            console.log(`while ${engMarks}`);
            engMarks--;
          }
        }}
      >
        While
      </button>
      <button
        onClick={() => {
          let telMarks = 90;
          do {
            console.log(`do while ${telMarks}`);
            telMarks--;
          } while (telMarks >= 35);
        }}
      >
        do While
      </button>
      <button
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            console.log(`number is ${i}`);
          }
        }}
      >
        For
      </button>
      <button
        onClick={() => {
          for (let i = 1; i < 100; i++) {
            for (let j = 1; j <= 10; j++) {
              console.log(`${i}*${j}=${i * j}`);
            }
          }
        }}
      >
        Nested Loops
      </button>
      <button
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            console.log(`number is ${i}`);
            if (i == 900) {
              break;
            }
          }
        }}
      >
        Break
      </button>
      <button
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            if (i > 800 && i < 900) {
              continue;
            }
            console.log(`number is ${i}`);
          }
        }}
      >
        Continue
      </button>
      <button
        onClick={() => {
          for (let i = 1; i < 100; i++) {
            if (
              i == 5 ||
              i == 6 ||
              i == 7 ||
              i == 8 ||
              i == 9 ||
              i == 15 ||
              i == 25 ||
              i == 34 ||
              i == 46 ||
              i == 57 ||
              i == 68 ||
              i == 79 ||
              i == 93 ||
              i == 97
            ) {
              continue;
            }
            for (let j = 1; j <= 100; j++) {
              if (
                j == 11 ||
                j == 12 ||
                j == 15 ||
                j == 19 ||
                j == 23 ||
                j == 27 ||
                j == 46 ||
                j == 54 ||
                j == 73
              ) {
                continue;
              }

              console.log(`${i}*${j}=${i * j}`);
            }
          }
        }}
      >
        Tables
      </button>
    </div>
  );
}

export default App;
