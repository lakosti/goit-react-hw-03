import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";

const Contact = ({ number, id, name, onDelete }) => {
  return (
    <div>
      <p>
        <MdPerson />
        {name}
      </p>
      <p>
        <BsFillTelephoneFill /> {number}
      </p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
