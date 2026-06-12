import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { Experience } from "./components/Experience";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div className="min-h-screen bg-term-bg font-mono text-[14.5px] leading-[1.7] text-term-ink antialiased selection:bg-term-green selection:text-term-bg">
      <div className="mx-auto max-w-[780px] px-6 pb-10 pt-8">
        <Intro />
        <Projects />
        <Experience />
        <Technologies />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
