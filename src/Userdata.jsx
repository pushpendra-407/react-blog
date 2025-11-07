const Userdata = ({data}) => {
  return(
    <div style={{ display: "flex", border: "1px solid green", borderRadius: "10px", margin: "10px", padding: "10px"}}>
      <h3>Name: <span style={{color: "green", padding: "10px"}}> {data.name}</span></h3>
      <h3>Age: <span style={{color: "orange", padding: "10px"}}> {data.age}</span></h3>
      <h3>Email: <span style={{color: "chocolate", padding: "10px"}}> {data.email}</span></h3>
    </div>
  )
}

export default Userdata;
