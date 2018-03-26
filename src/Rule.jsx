import React from 'react';

export default class Rule extends React.Component {
    static get defaultProps() {
        return {
            id: null,
            parentId: null,
            field: null,
            operator: null,
            value: null,
            schema: null
        };
    }

    render() {
        const {field, operator, value, addon, translations, schema:
            {fields, controls, getOperators, getAddons, showAddons, getInputType, getValuesList, getLevel, classNames}
        } = this.props;
        var level = getLevel(this.props.id);

        return (
            <div className={`rule ${classNames.rule}`}>
                {
                    React.createElement(controls.fieldSelector,
                        {
                            options: fields,
                            title: translations.fields.title,
                            value: field,
                            className: `rule-fields ${classNames.fields}`,
                            handleOnChange: this.onFieldChanged,
                            level: level
                        }
                    )
                }
                { showAddons(field) &&
                    React.createElement(controls.addonSelector,
                        {
                            field: field,
                            title: translations.addons.title,
                            options: getAddons(field),
                            value: addon || getAddons(field)[0].name,
                            className: `rule-addon ${classNames.addons}`,
                            handleOnChange: this.onAddonChanged,
                            level: level
                        }
                    )
                }
                {
                    React.createElement(controls.operatorSelector,
                        {
                            field: field,
                            title: translations.operators.title,
                            options: getOperators(field),
                            value: operator || getOperators(field)[0].name,
                            className: `rule-operators ${classNames.operators}`,
                            handleOnChange: this.onOperatorChanged,
                            level: level
                        }
                    )
                }
                {
                    React.createElement(controls.valueEditor,
                        {
                            field: field,
                            title: translations.value.title,
                            operator: operator,
                            value: value,
                            className: `rule-value ${classNames.value}`,
                            classNameValueList: `rule-value ${classNames.valueList}`,
                            handleOnChange: this.onValueChanged,
                            level: level,
                            inputType: getInputType(field, operator || getOperators(field)[0].name),
                            valuesList: getValuesList(field),
                        }
                    )
                }
                {
                    React.createElement(controls.removeRuleAction,
                    {
                        label: translations.removeRule.label,
                        title: translations.removeRule.title,
                        className: `rule-remove ${classNames.removeRule}`,
                        handleOnClick: this.removeRule,
                        level: level
                    })
                }
            </div>
        );
    }

    onFieldChanged = (value) => {
        this.onElementChanged('field', value);
    }

    onOperatorChanged = (value) => {
        this.onElementChanged('operator', value);
    }

    onValueChanged = (value) => {
        this.onElementChanged('value', value);
    }

    onAddonChanged = (value) => {
        this.onElementChanged('addon', value);
    }

    onElementChanged = (property, value) => {
        const {id, schema: {onPropChange}} = this.props;

        onPropChange(property, value, id);
    }

    removeRule = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.schema.onRuleRemove(this.props.id, this.props.parentId);
    }


}
