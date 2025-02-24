import "./style.css";
import Trash from "../../assets/lixo.svg";

function Home() {
  const users = [
    {
      id: "2342asshsu",
      name: "Maria",
      age: "35",
      email: "maria@email.com",
    },
    {
      id: "7542aklshu",
      name: "Luana",
      age: "36",
      email: "luana@email.com",
    },
  ];
  return (
    <div className="container">
      <form>
        <h1>User Registration</h1>
        <input name="nome" type="text" />
        <input name="age" type="number" />
        <input name="email" type="email" />
        <button type="button">Resgistration</button>
      </form>

      <div>
        <div>
          <p>Name:</p>
          <p>Age:</p>
          <p>Email:</p>
          <button>
            <img src={Trash} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
