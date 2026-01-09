
import { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

interface Card {
  id: string
  title: string
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Record<string, Card[]>>({
    Todo: [{ id: '1', title: 'Task 1' }],
    'In Progress': [],
    Done: []
  })

  const addCard = (col: string) => {
    const title = prompt('Card title')
    if (!title) return
    setColumns({
      ...columns,
      [col]: [...columns[col], { id: Math.random().toString(), title }]
    })
  }

  const deleteCard = (col: string, id: string) => {
    setColumns({
      ...columns,
      [col]: columns[col].filter(c => c.id !== id)
    })
  }

  return (
    <div className="kanban">
      {Object.entries(columns).map(([col, cards]) => (
        <div key={col} className="column">
          <h4>{col}</h4>
          <button onClick={() => addCard(col)}>+ Add</button>
          <DndContext collisionDetection={closestCenter}>
            <SortableContext items={cards.map(c => c.id)} strategy={verticalListSortingStrategy}>
              {cards.map(c => (
                <div key={c.id} className="card-item">
                  {c.title}
                  <button onClick={() => deleteCard(col, c.id)}>❌</button>
                </div>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      ))}
    </div>
  )
}
