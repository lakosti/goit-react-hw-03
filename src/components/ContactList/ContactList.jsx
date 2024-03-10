import Contact from "../Contact/Contact";

const ContactList = ({ data, onDelete }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Contact {...item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
