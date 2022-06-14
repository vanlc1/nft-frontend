export const getStorage = (key: string) => {
  const data = localStorage.getItem(key)

  if (data) {
    return JSON.parse(data)
  }

  return null
}

export const setStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const removeStorage = (key: string) => {
  localStorage.removeItem(key)
}

export const clearStorage = () => {
  localStorage.clear()
}
