import Userdata from "./Userdata";

function Loop() {
  const userName = ["Push", "Urvish", "Parth", "Dhruvi"];
  const userData = [
    {
      id: 1,
      name: "Push",
      age: 25,
      email: "push@test.com",
    },
    {
      id: 2,
      name: "Urvish",
      age: 26,
      email: "urvish@test.com",
    },
    {
      id: 3,
      name: "Parth",
      age: 24,
      email: "parth@test.com",
    },
    {
      id: 4,
      name: "Dhruvi",
      age: 23,
      email: "dhruvi@test.com",
    },
  ];
  return (
    <div>
      <h1>Reuse Componenet in Loop</h1>
      {/* <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "20px 0",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
        }}
      >
        <thead style={{ backgroundColor: "#f4f4f4" }}>
          <tr>
            <th
              style={{
                padding: "5px 10px",
                border: "1px solid #ddd",
                textAlign: "left",
                backgroundColor: "#7f3799ff",
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: "5px 10px",
                border: "1px solid #ddd",
                textAlign: "left",
                backgroundColor: "#34792fff",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "5px 10px",
                border: "1px solid #ddd",
                textAlign: "left",
                backgroundColor: "#7f3799ff",
              }}
            >
              Age
            </th>
            <th
              style={{
                padding: "5px 10px",
                border: "1px solid #ddd",
                textAlign: "left",
                backgroundColor: "#34792fff",
              }}
            >
              Email
            </th>
          </tr>
        </thead>

        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                  backgroundColor: "#535353ff",
                }}
              >
                {item.id}
              </td>
              <td
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                  backgroundColor: "#535353ff",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                  backgroundColor: "#535353ff",
                }}
              >
                {item.age}
              </td>
              <td
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                  backgroundColor: "#535353ff",
                }}
              >
                {item.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {
        userData.map((user) => (
          <div key={user.id}>
            <Userdata data={user}/>
          </div>
        ))
      }

    </div>
  );
}

export default Loop;
