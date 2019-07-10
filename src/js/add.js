function add(...rest) {
  const isAllNumber = arr => arr.every(i => typeof i === 'number')

  if (!isAllNumber(rest)) {
    return 0
  }
  return rest.reduce((acc, curr) => acc + curr)
}

export default add
