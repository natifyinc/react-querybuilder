import React from 'react';
import PropTypes from 'prop-types';

const ValueEditor = (props) => {
  const {
    field, operator, value, handleOnChange, title, inputType, valuesList,
    className, classNameValueList,
  } = props;

  if (operator === 'null' || operator === 'notNull') {
    return null;
  }

  if(inputType === 'select') {
    return (<select className={classNameValueList} onChange={e=>handleOnChange(e.target.value)}>
      {valuesList.map((value, index) => {
        return (<option key={index} value={value.value}>{value.text}</option>);
      })}
    </select>);
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
