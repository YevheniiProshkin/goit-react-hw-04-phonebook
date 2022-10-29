import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        placeholder="Enter contact"
        value={value}
        onChange={onChange}
      />
    </LabelFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
