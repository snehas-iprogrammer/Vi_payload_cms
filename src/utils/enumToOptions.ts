export function enumToOptions<T extends Record<string, any>>(enumObj: T) {
  const obj = Object.entries(enumObj)
    .filter(([key, value]) => typeof value === 'string') // forward entries only
    .map(([key, value]) => ({
      label: key,
      value: value, // Ensure value is a string to match Option type
    }))
  return obj
}
