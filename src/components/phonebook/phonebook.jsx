import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './phonebook.module.css';

export default class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hendeleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.forma} onSubmit={this.hendeleSubmit}>
        <h2 className={css.title}>Phonebook</h2>
        <label className={css.labele}>
          <h3 className={css.h3}>Name</h3>
          <input
            onChange={this.hendleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <h3 className={css.h3}>Namber</h3>
          <input
            onChange={this.hendleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
        <h2 className={css.title}>Contacts</h2>
      </form>
    );
  }
}

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
