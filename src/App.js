import React from "react";
import Sidebar from "./components/navigation/Sidebar";
import Topbar from "./components/navigation/Topbar";
import ElectionList from "./components/election_functional/ElectionList";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div>
      <Topbar name={`Roma Nazaruk`} role={`Admin`} />
      <Sidebar />
      <div className="story">
        <h2 className="story-head">Election</h2>
        <h4 className="story-about">All available elections:</h4>
        <Modal />
      </div>
      <ElectionList />
    </div>
  );
}

export default App;
