import { getNextSequenceValue } from './getNextSequence'

interface SqlIDParams {
  data: { numericId?: number; sql_id?: number }
  operation: string
  sequence: string
}

export const sqlID = async ({ data, operation, sequence }: SqlIDParams) => {
  if (operation === 'create' && !data.numericId) {
    data.sql_id = await getNextSequenceValue(sequence)
  }
  return data
}
