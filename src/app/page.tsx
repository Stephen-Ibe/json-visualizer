"use client";

import ReactJson from "react-json-view";

export default function Home() {
  return (
    <div className="h-screen">
      <ReactJson
        src={{
          name: "fmy",
          age: 18,
          sex: "male",
          friends: ["fmy1", "fmy2", "fmy3"],
        }}
        theme="ocean"
        indentWidth={4}
      />
    </div>
  );
}
