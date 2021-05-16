import MuiTypography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'


const Typography = ({nonresp, weight, className, children, ...props}) => {
  const classes = useStyles()

  return (
    <MuiTypography
      className={`
				${className ? className : ''}
				${weight ? weight : ''}
				${nonresp ? 'nonresp' : ''}
			`}
      classes={{
        root: classes.root,
        gutterBottom: classes.gutterBottom,
        h2: classes.h2,
        h3: classes.h3,
        h4: classes.h4,
        body1: classes.body1
      }}
      {...props}
    >
      {children}
    </MuiTypography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    '&.semibold': {fontWeight: 600},
    '&.bold': {fontWeight: 700}
  },
  gutterBottom: {
    marginBottom: '0.3em'
  },
  h2: {
    '&.nonresp': {fontSize: '2rem'}
  },
  h3: {
    '&.nonresp': {fontSize: '1.5rem'}
  },
  h4: {
    '&.nonresp': {fontSize: '1.125rem'}
  },
  body1: {
    '&.nonresp': {fontSize: '1rem'}
  }
}))


export default Typography
