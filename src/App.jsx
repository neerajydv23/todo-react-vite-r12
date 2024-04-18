import { useState } from "react";
import Header from "./components/Header";
<<<<<<< HEAD
import Createtask from "./components/Createtask";
import Showtasks from "./components/Showtasks";

const App = () => {
  const [tasks, settasks] = useState([]);

  return (
    <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
      <Header tasks={tasks} />
      <Createtask tasks={tasks} settasks={settasks} />
      <Showtasks tasks={tasks} settasks={settasks}></Showtasks>
    </div>
  );
=======
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [tasks, settasks] = useState([]);

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header tasks={tasks} />
            <Create tasks={tasks} settasks={settasks} />
            <Show tasks={tasks} settasks={settasks} />
        </div>
    );
>>>>>>> 3385a243e74400e02cc087565356403cbe3d6d20
};

export default App;
