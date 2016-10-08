import React from 'react';
import { Component } from 'react';
import {TextField, RaisedButton}from 'material-ui';

export default class JsonForm extends Component {

  createMaterialField(property) {
   let field;
   switch(property.type) {
    case "string":
      field = <TextField
                hintText=""
                floatingLabelText={property.title}
                type={property.secure ? "password" : ""}
                errorText={property.touched ? "ss" : ''}
               
            />
      break;
   }
   return field;
  }


  render() {
    let jsonForm = this.props.jsonForm;
    var fields = [];
    for (let key of Object.keys(jsonForm.schema.properties)) {
      fields.push(this.createMaterialField(jsonForm.schema.properties[key]))
    }
    return (
      <div className="content">
        <h2>{jsonForm.schema.title}</h2>
        <form >
          {fields}
        </form>
      </div>
    );
  }
}
