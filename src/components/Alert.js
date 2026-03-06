
import PropTypes from 'prop-types'
import React from 'react'

export default function Alert(props) {
  return (
    props.aleart&& 
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <p><i>{props.aleart.type}</i> : <strong>{props.aleart.text}</strong></p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

Alert.defaultProps = {
    alertMessage: "Some Undefined_Uncoded Aleart Happening !",
}

