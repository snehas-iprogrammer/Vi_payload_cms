// models/Counter.ts
import { Schema, model, models } from 'mongoose'

const counterSchema = new Schema({
  _id: String,
  sequence_value: { type: Number, default: 0 },
})

const Counter = models.Counter || model('Counter', counterSchema)

export default Counter
