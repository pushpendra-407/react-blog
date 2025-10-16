import Props from "./Props";

function Header() {
  let userObject = [
    {
      name: "Pushpendra",
      age: 25,
      email: "pushpendra@test.com",
      // student: () => {
      //   return "Pushp"
      // }
    },
    {
      name: "Parth",
      age: 24,
      email: "parth@test.com",
      student: () => {
        return "Parth"
      }
    },
    {
      name: "Urvish",
      age: 25,
      email: "urvish@test.com",
      // student: () => {
      //   return "Urvish"
      // }
  }
  ];

  return (
    <div>
      <h1>Get Input Field Value in React</h1>
      <Props user={userObject} />
    </div>
  );
}

export default Header;
