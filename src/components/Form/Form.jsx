import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { FormBox, Label, Input, SubmitBtn } from './Form.styled';

export const Form = props => {
  const [id, setId] = useState(nanoid()); 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setId(nanoid());
    props.onSubmit({id: id, name: name, number: number});
    resetForm();
  }

  const resetForm = () => {
    setName(''); 
    setNumber('');
  }

  
  return (
    <FormBox action="" onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <Label htmlFor="tel">Number</Label>
      <Input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
       />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormBox>
  );
}


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};