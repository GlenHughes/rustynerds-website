import React from "react"
import ReactLoading from "react-loading"

const Loading = ({ type="bars", color="#000000", width="20%", height="20%", }) => (
  <ReactLoading type={type} color={color} width={width} height={height} />
)

export default Loading