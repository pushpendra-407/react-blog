const Wrapper = ({children, color="green"}) => {
  return(
    <div style={{color: color, border:"2px solid green", margin:"5px", width: "400px", textAlign:"center"}}>
      {children}
    </div>
  )
}

export default Wrapper
