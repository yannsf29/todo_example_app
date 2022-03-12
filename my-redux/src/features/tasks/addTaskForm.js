import React, { useState } from 'react'

export const AddTaskForm = () => {
  const [name, setName] = useState('')
  const [completion, setCompletion] = useState('')
  const [description, setDescription] = useState('')

  
  const onNameChanged = e => setName(e.target.value)
  const onCompletionChanged = e => setCompletion(e.target.value)
  const onDescriptionChanged = e => setDescription(e.target.value)

  return (
    <section>
      <h2>Add a New Task:</h2>
      <form>
        <label>Task Name:</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={name}
          onChange={onNameChanged}
        />
        <label>Complete By Date:</label>
        <textarea
          id="taskCompletion"
          name="taskCompletion"
          value={completion}
          onChange={onCompletionChanged}
        />
        <label>Description</label>
         <input
          type="text"
          id="taskTitle"
          name="taskTitle"
          value={description}
          onChange={onDescriptionChanged}
        />
        <button type="buttontasks">Add Task</button>
      </form>
    </section>
  )
}