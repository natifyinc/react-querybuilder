import React from 'react';
import PropTypes from 'prop-types';

const ValueEditor = (props) => {
  const {field, operator, value, values, handleOnChange, title, inputType} = props;

  if (operator === 'null' || operator === 'notNull') {
    return null;
  }

  return (
    <input type={inputType}
           value={value}
           title={title}
           onChange={e=>handleOnChange(e.target.value)} />
  );
};

ValueEditor.displayName = 'ValueEditor';

ValueEditor.propTypes = {
  field: PropTypes.string,
  operator: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  title: PropTypes.string,
};

export default ValueEditor;
