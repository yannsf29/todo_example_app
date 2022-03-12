import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Dishes', completion: '03/22/22', description: 'Do the dishes', status: 'completed'},
  { id: '2', name: 'Chop Wood', completion: '04/22/22', description: 'Chopping of Wood', status: 'pending'},
  { id: '3', name: 'Laundry', completion: '05/22/22', description: 'Do Laundry', status: 'not yet started'}
]



const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {}
})

export default tasksSlice.reducer