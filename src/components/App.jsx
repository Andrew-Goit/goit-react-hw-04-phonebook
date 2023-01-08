
import { useState, useEffect } from 'react';
import {Form} from './Form/Form';
import {Filter} from './Filter/Filter';
import {Contacts} from './Contacts/Contacts';
import { AppBox } from './App.styled';


export const App = () => {
  const [contacts, setContacts] = useState(
    ()=> JSON.parse(window.localStorage.getItem('contactsKey')) ?? []
    // contacts = [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ]
  );
  const [filter, setFilter] = useState('');

  useEffect(()=> {
    window.localStorage.setItem('contactsKey', JSON.stringify(contacts));
  }, [contacts]);
  
  // componentDidMount() {
  //   const parsedData = JSON.parse(localStorage.getItem('contactsKey'));
  //   if (!parsedData)
  //   return;
  //   this.setState({contacts: parsedData});
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('contactsKey', JSON.stringify(this.state.contacts));
  // }

  const formHandlerSubmit = data => {
    contacts.map(element => {
      if (element.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts.`);
      }
      return element.name;
    });
    setContacts([...contacts, data]);
  };

  // const handleChangeFilter = data => {
  //   setFilter({ filter: data });
  // };

  const handleClickDelete = id => {
    setContacts(contacts.filter(element => element.id !== id))
  };

  return (
    <AppBox>
      <h2>Phonebook</h2>
      <Form onSubmit={formHandlerSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={setFilter} />
      <Contacts
        onDelete={handleClickDelete}
        data={contacts}
        filter={filter}
      />
    </AppBox>
  );
}
