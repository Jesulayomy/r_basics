import Navbar from './Navbar';
import User from './User';


function App() {
  let lName = "Aina";
  let fName = "Layo";
  let name = "Aina Layo";
  let age = 1000;
  let background = "bg-warning";
  let theme = {
    background: "bg-black",
    text: "text-secondary",
  };
  let user1 = {
    name: name,
    age: 105,
    skills: ['tennis', 'football'],
    isAdmin: true,
  };
  let user2 = {
    name: "Micahel",
    age: 21,
    skills: ['tennis', 'football'],
    isAdmin: true,
  };
  let user3 = {
    name: "Tobiloba",
    age: 15,
    skills: ['tennis', 'football'],
    isAdmin: false,
  };
  let users = [user1, user2, user3];


  return (
    <div className="container">
      <Navbar title="Hey" />
      <header className="m-2 p-2">
        <h2>Hello World</h2>
      </header>
      <div className={theme.background + " " + theme.text}>
        {lName + " " + fName}
        <p> Your age is {age}</p>
        <p className={background + " text-black"}>You are old</p>
      </div>
      <div className='m-1 p-3'>
        <div className='row'>
          {users.map((user) => (
            <User user={user} />
          ))}
          {/* <User user={user}/>
          <User user={user2}/>
          <User user={user3}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
