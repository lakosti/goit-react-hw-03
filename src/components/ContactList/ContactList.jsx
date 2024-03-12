import Contact from "../Contact/Contact";

const ContactList = ({ onSearch, onDelete }) => {
  return (
    <ul>
      {onSearch.map((item) => (
        <li key={item.id}>
          <Contact {...item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
