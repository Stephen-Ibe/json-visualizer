"use client";

import dynamic from "next/dynamic";
import Editor from "@monaco-editor/react";
import { Canvas } from "reaflow";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";

// Dynamically import ReactJson with SSR disabled
const ReactJson = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

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
  const notify = () => toast("Wow so easy !");

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

      <Button onClick={notify}>Notify !</Button>
    </div>
  );
}
