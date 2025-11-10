import React from "react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="p-10 space-x-4">
      <Button>Default Button</Button>

      <Button variant="destructive">
        Delete
      </Button>

      <Button variant="outline">
        Outline
      </Button>
    </div>
  );
}

export default App;
