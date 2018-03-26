import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ValueEditor = (props) => {
  const {
    field, operator, value, handleOnChange, title, inputType, valuesList,
    className, classNameValueList,
  } = props;

  if (operator === 'null' || operator === 'notNull') {
    return null;
  }

  if(inputType === 'select') {
    const xValue = valuesList.find(i => i.value.toString() === value);

    return (<Select
      defaultValue={xValue}
      Value={xValue}
      className={classNameValueList}
      onChange={e=>handleOnChange(e.value)}
      options={valuesList}
      clearable={true}
    />);
  }

  return (
    <input className={className}
           type={inputType}
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
