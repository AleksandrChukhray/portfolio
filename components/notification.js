import React from 'react'
import { ToastContainer } from 'react-toastify'

function Notification() {
  return (
    <ToastContainer
      autoClose={5000}
      closeOnClick
      draggable
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position="top-right"
      rtl={false}
    />)
}

export default Notification
