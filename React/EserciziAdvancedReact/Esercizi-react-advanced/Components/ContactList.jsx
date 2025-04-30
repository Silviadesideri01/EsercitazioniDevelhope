const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((value, index) => (
        <li key={index}>
          {value.name} - {value.phone}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
