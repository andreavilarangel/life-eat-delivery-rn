export const formatCurrency = value => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const unformatCurrency = value => {
  if (typeof value === 'string') {
    const unformat = value.replace(/[R$._]/g, '')
    return Number(unformat.replace(/,/g, '.'))
  }
  return value
}
