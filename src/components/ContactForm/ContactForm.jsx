import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.container} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={this.state.name}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.onInputChange}
        />

        <label htmlFor="number">Number</label>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          value={this.state.number}
          onChange={this.onInputChange}
        />

        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
