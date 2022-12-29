import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.styled';

export const Filter = props => {
  let filter;

  const handleChange = event => {
    filter = event.currentTarget.value;
    
    props.onChange(filter.toLowerCase());
  };

  return (
    <FilterBox>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input id="filter" type="text" value={filter} onChange={handleChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};