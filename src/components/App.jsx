import React from 'react';
import Phonebook from './phonebook/phonebook';
import Filter from './filter/filter';
import ContactList from './ContactList/ContactList';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onAddContact = contacts => {
    const isInContacts = this.state.contacts.some(
      contact => contact.name.toLowerCase() === contacts.name.toLowerCase()
    );

    if (isInContacts) {
      Notify.warning(`${contacts.name} is already in contant`);
    } else {
      const finalContact = {
        ...contacts,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, finalContact],
      }));
    }
  };

  handleOnChange = e => {
    this.setState({ filter: e.target.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseFilter)
    );
  };

  render() {
    const visibleContact = this.getContacts();
    return (
      <div>
        <Phonebook onAddContact={this.onAddContact} />
        <Filter handleOnChange={this.handleOnChange} />
        <ContactList
          contacts={visibleContact}
          onRemoveContact={this.onRemoveContact}
        />
      </div>
    );
  }
}
