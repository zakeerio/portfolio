import React from 'react'

export function Button({ children, asChild = false, className = '', ...props }) {
  const classes = className || ''

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [children.props.className || '', classes].filter(Boolean).join(' '),
      ...props,
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
