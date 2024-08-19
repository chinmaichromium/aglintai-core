import React, { useState } from "react";
import { Location } from "./Location";
import { Department } from "./Department";
function Company() {
  const [message, setMessage] = useState<string[]>(["ds"]);
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
      }}
    >
      <Department setMessage={setMessage} />
      <Location setMessage={setMessage} />
      {message?.length ? (
        <div
          style={{
            marginLeft: "20px",
            paddingLeft: "20px",
            borderLeft: "1px solid grey",
          }}
        >
          <div>
            <h5>Console</h5>
            {message.map((mes) => (
              <p>{mes}</p>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Company;
