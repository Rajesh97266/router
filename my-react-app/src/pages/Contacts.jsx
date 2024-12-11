import { useNavigate } from "react-router-dom";



const Contacts = () => {

  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Contacts</h1>
      <button onClick={() => navigate("info") }>Information</button>
      <button onClick={() => navigate("form") }>Form</button>
    </div>
  );
}

export default Contacts