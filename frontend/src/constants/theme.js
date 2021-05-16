import {createMuiTheme} from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C2E1ED'
    },
    secondary:{
      main:'#DCDCDC'
    },
    text: {
      primary: '#444444',
      secondary: '#ADADAD'
    },

  },
  typography: {
    fontFamily: '"Josefin Sans",sans-serif',
    h1: {
      fontSize: 'clamp(2.25rem,5vw,3rem)',
      fontWeight: 600,
      lineHeight: 1.2
    },
    h2: {
      fontSize: 'clamp(1.5rem,4vw,2rem)',
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: 'clamp(1.125rem,3vw,1.5rem)',
      fontWeight: 600,
      lineHeight: 1.2
    },
    h4: {
      fontSize: 'clamp(0.85rem,3vw,1.125rem)',
      lineHeight: 1.2
    },
    body1: {
      fontSize: 'clamp(0.8rem,2vw,1rem)',
      lineHeight: 2
    },
    		button: {
			fontSize: 'clamp(0.8rem,2vw,1rem)',
			fontWeight: 600,
			lineHeight: 1,
			textTransform: 'none'
		}
  },
})


export default theme
