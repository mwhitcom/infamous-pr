// Name, Client Type
// Image, Press Kit
// Bio, 
// Facebook, Twitter, 
// Insta, Youtube, 
// Soundcloud, Website,

import React, { Component } from 'react';
import { Paper, MenuItem, RaisedButton } from 'material-ui';
import { reduxForm, Field } from 'redux-form';
import { SelectField, TextField } from 'redux-form-material-ui';

import './ClientEdit.css';

const types = ['Artist', 'Label', 'Festival', 'Event', 'Brand', 'Tech'];
const typesList = types.map(type => <MenuItem value={type} primaryText={type} />);
const styles = {
  bioInput: {
    width: '100%',
    float: 'left'
  },
  leftInput: {
    width: '49%',
    float: 'left',
    margin: '0 1% 0 0'
  },
  rightInput: {
    width: '49%',
    margin: '0 0 0 1%',
    float: 'left'
  },
  specialInput: {
    width: '49%',
    float: 'left',
    margin: '24px 0 0 1%'
  }
};

class ClientEdit extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <Paper styleName={'box'} zDepth={3}>
          <form styleName={'form-box'}>
            <Field name="clientName" style={styles.leftInput} component={TextField} floatingLabelText="Client Name" />
            <Field name="artistType" style={styles.specialInput} component={SelectField} hintText="Client Type">
              {typesList}
            </Field>
            <Field name="image" style={styles.leftInput} component={TextField} floatingLabelText="Image" />
            <Field name="pressKit" style={styles.rightInput} component={TextField} floatingLabelText="Press Kit" />
            <Field name="bio" style={styles.bioInput} component={TextField} floatingLabelText="Bio" />
            <Field name="facebookURL" style={styles.leftInput} component={TextField} floatingLabelText="Facebook URL" />
            <Field name="twitterURL" style={styles.rightInput} component={TextField} floatingLabelText="Twitter URL" />
            <Field name="instaURL" style={styles.leftInput} component={TextField} floatingLabelText="Instagram URL" />
            <Field name="youtubeURL" style={styles.rightInput} component={TextField} floatingLabelText="Youtube URL" />
            <Field name="soundcloudURL" style={styles.leftInput} component={TextField} floatingLabelText="Soundcloud URL" />
            <Field name="websiteURL" style={styles.rightInput} component={TextField} floatingLabelText="Website URL" />
            <div styleName={'button-container'}>
              <RaisedButton type="submit" styleName={'button'} label="Save" primary={true} />
              <RaisedButton styleName={'button'} label="Cancel" secondary={true} />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

ClientEdit = reduxForm({
  form: 'myForm'
})(ClientEdit);

export default ClientEdit;
