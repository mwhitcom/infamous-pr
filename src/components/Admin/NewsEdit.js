import React, { Component } from 'react';
import { Paper, MenuItem, RaisedButton } from 'material-ui';
import { reduxForm, Field } from 'redux-form';
import { SelectField, TextField, DatePicker } from 'redux-form-material-ui';

import './NewsEdit.css';
import Data from '../../utils/FillerData';
import SingleStory from '../Landing_News/SingleStory';

class NewsEdit extends Component {
  render() {
    const artists = Data.clients.map(client => <MenuItem value={client.name} primaryText={client.name} />);
    const styles = {
      input: {
        width: '100%',
        float: 'left'
      },
      halfInput: {
        width: '49%',
        float: 'left',
        margin: '20px 1% 0 0'
      },
      specialInput: {
        width: '49%',
        margin: '20px 0 0 1%',
        float: 'left'
      }
    };
    return (
      <div styleName={'container'}>
        <Paper styleName={'box'} zDepth={3}>
          <form styleName={'form-box'}>
            <Field name="artistName" style={styles.halfInput} component={SelectField} hintText="Select Client">
              {artists}
            </Field>
            <Field name="newsDate" textFieldStyle={styles.specialInput} component={DatePicker} format={null} hintText="Publish Date" />
            <Field name="outlet" style={styles.input} component={TextField} floatingLabelText="Outlet" />
            <Field name="newsURL" style={styles.input} component={TextField} floatingLabelText="News URL" />
            <Field name="newsTitle" style={styles.input} component={TextField} floatingLabelText="Title" />
            <Field name="newsDek" style={styles.input} component={TextField} floatingLabelText="Dek" />
            <Field name="imageURL" style={styles.input} component={TextField} floatingLabelText="News Image URL" />
            <div styleName={'button-container'}>
              <RaisedButton type="submit" styleName={'button'} label="Save" primary={true} />
              <RaisedButton styleName={'button'} label="Cancel" secondary={true} />
            </div>
          </form>
          <div styleName={'story-box'}>
            <SingleStory story={Data.stories[0]} />
          </div>
        </Paper>
      </div>
    );
  }
}

NewsEdit = reduxForm({
  form: 'myForm'
})(NewsEdit);

export default NewsEdit;
