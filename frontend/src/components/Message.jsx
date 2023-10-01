import { Alert } from "react-bootstrap";

import React from 'react'

const Message = ({variant, children}) => {
  return (
    <Alert varient={variant}>
        {children}

    </Alert>
      
    
  )
}

Message.defaultProps  = {
    variant: "info", 
};


export default Message
