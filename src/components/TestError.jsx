import  { useState } from "react";

function TestError() {
  const [errorText, setErrorText] = useState("");

  if (errorText == "BOOM") {
    throw new Error("Error Boundary. Checked.");
  }
  return (
    <div className="test-error">
      <button
        onClick={() => {
          setErrorText("BOOM");
        }}
      >
        Click Here!
      </button>
    </div>
  );
}
export default TestError;
