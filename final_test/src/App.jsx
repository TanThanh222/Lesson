import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";
import deleteIcon from "./assets/deleteicon.svg";

const API_KEY = "69401a35d814d2c97d9ff131";
const BASE = "https://mindx-mockup-server.vercel.app/api/resources/tasks";

export default function App() {
  const [tab, setTab] = useState("all");
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const getUrl = () => `${BASE}?apiKey=${API_KEY}`;
  const itemUrl = (id) => `${BASE}/${id}?apiKey=${API_KEY}`;
  const extractTasks = (node, acc = []) => {
    if (!node) return acc;
    if (Array.isArray(node)) {
      node.forEach((x) => extractTasks(x, acc));
      return acc;
    }
    if (typeof node === "object") {
      if (typeof node.title === "string" && typeof node.active === "boolean") {
        acc.push(node);
        return acc;
      }
      Object.values(node).forEach((v) => extractTasks(v, acc));
    }
    return acc;
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(getUrl());
      const list = extractTasks(res.data);

      const normalized = list.map((t, idx) => ({
        ...t,
        __localId: t._id ?? t.id ?? `${Date.now()}_${idx}`,
      }));

      setTasks(normalized);
    } catch (e) {
      console.log("Fetch tasks error:", e);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const visibleTasks = useMemo(() => {
    const arr = Array.isArray(tasks) ? tasks : [];
    if (tab === "active") return arr.filter((t) => t.active === true);
    if (tab === "completed") return arr.filter((t) => t.active === false);
    return arr;
  }, [tab, tasks]);

  const canAdd = tab === "all" || tab === "active";
  const canDelete = tab === "completed";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canAdd) return;

    const title = input.trim();
    if (!title) return;

    try {
      await axios.post(getUrl(), { title, active: true });
      setInput("");
      fetchTasks();
    } catch (e) {
      console.log("Add error:", e);
    }
  };

  const toggleTask = async (task) => {
    const nextActive = !task.active;

    setTasks((prev) =>
      prev.map((t) =>
        t.__localId === task.__localId ? { ...t, active: nextActive } : t
      )
    );

    const serverId = task._id ?? task.id;
    if (!serverId) return;

    const { __localId, ...payload } = task;

    try {
      await axios.put(itemUrl(serverId), { ...payload, active: nextActive });
    } catch (e) {
      console.log("Toggle error:", e);
      fetchTasks();
    }
  };

  const deleteOneCompleted = async (task) => {
    if (!canDelete) return;

    setTasks((prev) => prev.filter((t) => t.__localId !== task.__localId));

    const serverId = task._id ?? task.id;
    if (!serverId) return;

    try {
      await axios.delete(itemUrl(serverId));
    } catch (e) {
      console.log("Delete error:", e);
      fetchTasks();
    }
  };

  const deleteAllCompleted = async () => {
    if (!canDelete) return;

    const completed = visibleTasks;
    setTasks((prev) => prev.filter((t) => t.active === true));

    try {
      await Promise.all(
        completed
          .map((t) => t._id ?? t.id)
          .filter(Boolean)
          .map((id) => axios.delete(itemUrl(id)))
      );
    } catch (e) {
      console.log("Delete all error:", e);
      fetchTasks();
    }
  };

  return (
    <div className="page">
      <h1 className="title">#todo</h1>

      <div className="tabs">
        <button
          className={`tab ${tab === "all" ? "active" : ""}`}
          onClick={() => setTab("all")}
        >
          All
        </button>
        <button
          className={`tab ${tab === "active" ? "active" : ""}`}
          onClick={() => setTab("active")}
        >
          Active
        </button>
        <button
          className={`tab ${tab === "completed" ? "active" : ""}`}
          onClick={() => setTab("completed")}
        >
          Completed
        </button>
      </div>

      {canAdd && (
        <form className="addRow" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="add details"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="addBtn" type="submit">
            Add
          </button>
        </form>
      )}

      <ul className="list">
        {visibleTasks.map((t) => (
          <li className="item" key={t.__localId}>
            <label className="left">
              <input
                type="checkbox"
                checked={!t.active}
                onChange={() => toggleTask(t)}
              />
              <span className={`text ${t.active ? "" : "done"}`}>
                {t.title}
              </span>
            </label>

            {canDelete && (
              <button
                type="button"
                className="deleteOne"
                onClick={() => deleteOneCompleted(t)}
                title="Delete"
              >
                <img src={deleteIcon} alt="delete" className="icon" />
              </button>
            )}
          </li>
        ))}
        {visibleTasks.length === 0 && <p className="empty">No tasks</p>}
      </ul>

      {canDelete && (
        <div className="bottom">
          <button
            type="button"
            className="deleteAll"
            onClick={deleteAllCompleted}
          >
            <img src={deleteIcon} alt="delete all" className="icon" />
            <span>delete all</span>
          </button>
        </div>
      )}
    </div>
  );
}
