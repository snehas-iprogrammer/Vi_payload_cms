// lib/getNextSequenceValue.ts

import Counter from '../models/Counter'

export const getNextSequenceValue = async (sequenceName: string): Promise<number> => {
  const result = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true },
  )
  return result.sequence_value
}
