"use client";

import ReactJson from "react-json-view";
import Editor from "@monaco-editor/react";
import { Canvas } from "reaflow";

const nodes = [
  {
    id: "1",
    text: "1",
  },
  {
    id: "2",
    text: "2",
  },
];

const edges = [
  {
    id: "1-2",
    from: "1",
    to: "2",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="p-4 space-y-4">
        <h4>JSON Viewer</h4>
        <div>
          <ReactJson
            src={{
              name: "fmy",
              age: 18,
              sex: "male",
              friends: ["fmy1", "fmy2", "fmy3"],
            }}
            theme="ocean"
            indentWidth={4}
            npm
            run
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <h4>Monaco Editor</h4>
        <div className="border-black border-4 h-96 p-4">
          <Editor
            height="100%"
            defaultLanguage="typescript"
            defaultValue="// Default Language is TypeScript, you can change it in the top right corner."
          />
        </div>
      </div>

      <div className="p-4 border h-96">
        <Canvas nodes={nodes} edges={edges} fit={true} />
      </div>
    </div>
  );
}
