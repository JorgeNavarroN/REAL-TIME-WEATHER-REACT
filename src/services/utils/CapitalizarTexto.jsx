export const capitalizarTexto = (str) => {
  if (typeof str !== 'string' || str.length === 0) return
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
