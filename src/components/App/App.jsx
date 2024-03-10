import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import "./App.module.css";

const data = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function App() {
  const [items, setItem] = useState(() => {
    const stringifiedContact = localStorage.getItem("contact");
    if (!stringifiedContact) return data;

    const parsedContact = JSON.parse(stringifiedContact);
    return parsedContact;
  });

  const handleDelete = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList onDelete={handleDelete} data={items} />
    </div>
  );
}

export default App;
