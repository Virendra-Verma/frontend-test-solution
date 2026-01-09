
import { useState } from 'react'

export interface TreeNode {
  id: string
  name: string
  children?: TreeNode[]
  loaded?: boolean
}

const mockLoadChildren = (): Promise<TreeNode[]> =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          { id: Math.random().toString(), name: 'Lazy Child 1' },
          { id: Math.random().toString(), name: 'Lazy Child 2' }
        ]),
      600
    )
  )

const Node = ({ node, onUpdate, onDelete }: any) => {
  const [expanded, setExpanded] = useState(false)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(node.name)

  const toggle = async () => {
    if (!node.loaded) {
      const children = await mockLoadChildren()
      onUpdate(node.id, { children, loaded: true })
    }
    setExpanded(!expanded)
  }

  return (
    <div className="tree-node">
      <span onClick={toggle}>{expanded ? '▼' : '▶'}</span>{' '}
      {editing ? (
        <input
          placeholder="Enter node name"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={() => {
            setEditing(false)
            onUpdate(node.id, { name })
          }}
        />
      ) : (
        <strong onDoubleClick={() => setEditing(true)}>{node.name}</strong>
      )}
      <button onClick={() => onDelete(node.id)}>❌</button>
      {expanded &&
        node.children?.map((c: any) => (
          <Node key={c.id} node={c} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
    </div>
  )
}

export default function TreeView() {
  const [tree, setTree] = useState<TreeNode[]>([
    { id: '1', name: 'Root', children: [], loaded: true }
  ])

  const updateNode = (id: string, data: Partial<TreeNode>) => {
    const walk = (nodes: TreeNode[]): TreeNode[] =>
      nodes.map(n =>
        n.id === id
          ? { ...n, ...data }
          : { ...n, children: n.children ? walk(n.children) : [] }
      )
    setTree(walk(tree))
  }

  const deleteNode = (id: string) => {
    if (!confirm('Delete node?')) return
    const remove = (nodes: TreeNode[]): TreeNode[] =>
      nodes.filter(n => n.id !== id).map(n => ({
        ...n,
        children: n.children ? remove(n.children) : []
      }))
    setTree(remove(tree))
  }

  return (
    <div>
      {tree.map(n => (
        <Node key={n.id} node={n} onUpdate={updateNode} onDelete={deleteNode} />
      ))}
    </div>
  )
}
