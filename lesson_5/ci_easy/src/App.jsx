import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="bg-violet-200 h-screen flex justify-center relative">
      <UserForm/>
      <div className="flex gap-4 absolute bottom-0 z-0">
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
          <div className="w-[60px] h-screen bg-violet-300/30"></div>
      </div>
    </div>
  );
}

export default App;
