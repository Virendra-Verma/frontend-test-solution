
import TreeView from './components/TreeView'
import KanbanBoard from './components/KanbanBoard'

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h2>Tree View Component</h2>
        <TreeView />
      </div>

      <div className="card">
        <h2>Kanban Board</h2>
        <KanbanBoard />
      </div>
    </div>
  )
}
