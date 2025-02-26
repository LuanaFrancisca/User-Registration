import { useEffect } from "react";
import "./style.css";
import Trash from "../../assets/lixo.svg";
import api from "../../services/api";

function Home() {
  let users = [];

  async function getUsers() {
    const usersFromApi = await api.get("/users");

    users = usersFromApi.data;
    console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>User Registration</h1>
        <input placeholder="Name" name="nome" type="text" />
        <input placeholder="Age" name="age" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Resgistration</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Name: <span>{user.name}</span>
            </p>
            <p>
              Age: <span>{user.age}</span>
            </p>
            <p>
              Email:<span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} alt="icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
