import { createRoot } from 'react-dom/client';
import { App } from './App';

function renderInBrowser() {
  const containerEl = document.querySelector("#root");
  if (!containerEl) {
    throw new Error("el is undefined")
  }
  createRoot(containerEl).render(<App />)
}

renderInBrowser();