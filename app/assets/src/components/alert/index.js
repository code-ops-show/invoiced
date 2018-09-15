import React from 'react'
import css from 'classnames'
import styles from './index.sass'

class Alert extends React.PureComponent {
  dismiss = (e) => {
    e.preventDefault()
    const { onDismiss } = this.props

    if (onDismiss) onDismiss()
  }

  render() {
    const { message } = this.props

    if (!message) return null

    return (
      <div className={css('animated slideInDown', styles.alert, styles[message.type])}>
        <a href='#' onClick={this.dismiss}>
          {message.body}
        </a>
      </div>
    )
  }
}

export default Alert
