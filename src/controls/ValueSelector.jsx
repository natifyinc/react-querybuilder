import uniqueId from 'uuid/v4';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ValueSelector = (props) => {
  const {value, options, className, handleOnChange, title} = props;

  if(title !== 'Addons') {
    return (
      <select className={className}
              value={value}
              title={title}
              onChange={e=>handleOnChange(e.target.value)}>
        {
          options.map(option=> {
            return (
              <option
                key={option.value || option.id || option.name}
                value={option.value || option.name}
              >
                {option.label}
              </option>
            );
          })
        }
      </select>
    );
  }
  else {
    const xValue = options.find(i => i.value.toString() === value);
    const defaultValue = options.find(i => i.value.toString() === '');
    return (<Select
      name="addon-selector"
      className={className}
      defaultValue={defaultValue}
      value={xValue}
      onChange={e=>handleOnChange(e.value)}
      options={options}
      clearable={true}
    />);
  }
}

ValueSelector.displayName = 'ValueSelector';

ValueSelector.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  handleOnChange: PropTypes.func,
  title: PropTypes.string,
};

export default ValueSelector;
