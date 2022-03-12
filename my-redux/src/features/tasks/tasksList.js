import React from 'react'
import { useSelector } from 'react-redux'

export const TasksList = () => {
  const tasks = useSelector(state => state.tasks)

  const renderedtasks = tasks.map(task => (
    <article className="task-excerpt" key={task.id}>
      <h3>{task.name}</h3>
    
      <p className="task-content">{task.completion}</p>
      <p className="task-content">{task.description}</p>
    
    </article>
  ))

  return (
    <section className="tasks-list">
      <h2>to-do:</h2>
      {renderedtasks}
    </section>
  )
}

