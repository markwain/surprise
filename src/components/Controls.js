import React, { Component } from 'react'
import { actions, selectors, useDispatch, useSelector } from '../store'

const Controls = () => {
  const dispatch = useDispatch()
  const { name, id } = useSelector(selectors.getActiveTask) || {}
  return (
    <div style={{ padding: '1rem', background: '#D6F3FF' }}>
      <h1>Controls</h1>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <input
          value={name}
          readOnly
          placeholder="Selected task name"
          style={{ fontSize: '1rem' }}
          data-testid="selected-task-field"
        />
        <button style={{ marginLeft: '1rem' }} disabled data-testid="move-back-btn">
          Move back
        </button>
        <button
          style={{ marginLeft: '1rem' }}
          data-testid="move-forward-btn"
          onClick={() => dispatch(actions.moveForward({ id }))}
          disabled={!name}
        >
          Move forward
        </button>
      </div>
    </div>
  )
}
export default Controls
