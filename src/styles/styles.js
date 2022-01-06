export const colors = {
  black: '#21201F',
  offWhite: '#FDFCFA',
  beige: '#F5F0E1',
  darkGrey: '#605D59',
  lavender: '#E9E7F2',
  salmon: '#FCEBDF',
}

export const fonts = {
  helveticaNeue: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  playfairDisplay: '"Playfair Display", Georgia, "Times New Roman", serif',
}

export const fontSizes = {
  sm: 14,
  md: 20,
  lg: 32,
  mobileSm: 14,
  mobileMd: 18,
  mobileLg: 28,
}

export const spacingBaseValue = 8

const { black, darkGrey } = colors
const { helveticaNeue } = fonts

export const linkStyles = {
  fontFamily: helveticaNeue,
  color: black,
  textDecoration: 'none',
  borderBottom: '1px solid' + black,
  ':hover, :focus': {
    color: darkGrey,
    borderColor: darkGrey,
    outline: 'none',
  },
}
