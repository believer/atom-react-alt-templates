import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Layout.css'
import classNames from 'classnames'

const Row = ({ bold, center, children, className, textCenter }) => {
  const classes = classNames(
    'row',
    styles.row,
    className
  )

  const styleNames = classNames(
    { bold: bold },
    { center: center },
    { textCenter: textCenter }
  )

  return (
    <div className={classes} styleName={styleNames}>
      {children}
    </div>
  )
}

Row.displayName = 'Row'

Row.propTypes = {
  bold: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  textCenter: PropTypes.bool
}

export default CSSModules(Row, styles)
