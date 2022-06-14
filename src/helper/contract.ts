export function shortContract(str: string, r: number, l: number) {
  if (str?.length <= 6) {
    return str
  }
  const length = str?.length
  return str?.slice(0, r) + '..' + str?.slice(length - l, length)
}
