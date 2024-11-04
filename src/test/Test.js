import { Button } from "@mui/material";
import React from "react";

const Test = () => {
  return (
    <>
      <div className="text-4xl font-extralight m-2 p-3 bg-green-500">
        <h1>안녕하세요!</h1>
        <br></br>
        <div>
          <h2>daisyui 버튼</h2>
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>

          <br />
          <br />
          <h2>MUI 버튼</h2>
          <div>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Link
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
