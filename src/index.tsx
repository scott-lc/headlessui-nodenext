import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { Listbox } from "@headlessui/react";

const App = (): ReactElement => (
  <div>
    <Listbox />
  </div>
);

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
