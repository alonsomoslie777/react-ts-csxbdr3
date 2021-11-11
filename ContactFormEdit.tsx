import React, { Component } from 'react';
import Info from './Info';

class ContactFormEdit extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      rows: JSON.parse(
        '{"subject":"You got mail","to":"support@jcomcms.com","submit":"Send Message","message":"Thank you we will be in touch soon!","fields":{"id1600162463221":{"name":"id1600162463238","label":"Name","placeholder":"Name","type":"text","required":"yes"},"id1600162464072":{"name":"id1600162464067","label":"Email","placeholder":"Email","type":"email","required":"yes"},"id1600162464559":{"name":"id1600162464496","label":"Message","placeholder":"Message","type":"textarea"}}}'
      ),
      fields: {},
    };
  }
  componentDidMount() {
    this.setState({ fields: this.state.rows });
    //console.log('json is:', this.state.fields);
  }
  addNewField = (e) => {
    e.preventDefault();
    var fields = this.state.fields;
    fields['asdwedfsd'] = {
      name: 'id1600162463238',
      label: 'Name',
      placeholder: 'Name',
      type: 'text',
      required: 'yes',
    };
    this.setState({ fields: fields });
  };

  removeField = (e, key) => {
    e.preventDefault();
    var fields = this.state.fields;
    delete fields[key];
    this.setState({ fields: fields });
  };

  formField = (formid) => {
    return (
      <ul>
        <li>
          <label>
            {this.l('Caption')}: <br />
            <input
              class={'form-control field_' + formid + '_label'}
              type="text"
              name={'fields[' + formid + '][label]'}
            />
          </label>
        </li>
        <li>
          <label>
            {this.l('Placeholder')}: <br />
            <input
              class={'form-control field_' + formid + '_placeholder'}
              placeholder="Placeholder"
              type="text"
              name={'fields[' + formid + '][placeholder]'}
            />
          </label>
        </li>
        <li>
          <label>
            {this.l('Type')}: <br />
            <select
              class={'form-control field_' + formid + '_type'}
              name={'fields[' + formid + '][type]'}
            >
              <option value="text">{this.l('Text box')}</option>
              <option value="email"> {this.l('E-mail text box')}</option>
              <option value="textarea"> {this.l('Message text box')}</option>
            </select>
          </label>
        </li>
        <li class="checkboxLi">
          <label>
            <br />
            <input
              type="checkbox"
              class={'field_' + formid + '_required'}
              name={'fields[' + formid + '][required]'}
              value="yes"
            />{' '}
            {this.l('Required')}
          </label>
        </li>

        <li>
          <br />
          <a
            href="#"
            class="fa_delete delete_field"
            onClick={(e) => this.removeField(e, formid)}
          >
            {' '}
          </a>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">{this.l('Contact Forms')}</h4>
          </div>

          <div class="content table-responsive table-full-width">
            <form action="#" method="post">
              <input type="hidden" name="id" value="" />
              <input type="hidden" name="value" value="" />

              <div class="col-md-4">
                <label>{this.l('Add this code in to your page')}</label>
                <br />
                <input
                  class="form-control"
                  type="text"
                  value="[form id=${row.getId()!}]"
                />
              </div>
              <div class="height20px"></div>
              <div class="col-md-4">
                <label>{this.l('Emil Title')}</label>
                <br />
                <input
                  class="form-control"
                  type="text"
                  value="${form.getSubject()!}"
                  name="subject"
                />
              </div>
              <div class="height20px"></div>
              <div class="col-md-4">
                <label>{this.l('Email To')}</label>
                <br />
                <input class={'form-control field_to'} type="text" name="to" />
              </div>
              <div class="height20px"></div>
              <div class="col-md-12">
                <a
                  href="#"
                  class="newField btn btn_small"
                  onClick={this.addNewField}
                >
                  {this.l('Add new Field')}
                </a>
              </div>
              <div class="height20px"></div>
              <div class="fields_list">
                {Object.entries(this.state.fields).map(([key, value]) => (
                  <>{this.formField(key)}</>
                ))}
                
              </div>
              <div class="height20px"></div>
              <div class="col-md-4">
                <label>{this.l('Submit Button')}</label>
                <br />
                <input
                  class={'form-control field_submit'}
                  type="text"
                  name="submit"
                />
              </div>

              <div class="col-md-8">
                <label>
                  {this.l('Successfull mesage')}{' '}
                  {this.l('Example: Your message has been sent successfully!')}
                </label>
                <br />
                <input
                  class={'form-control field_message'}
                  type="text"
                  name="message"
                />
              </div>
              <div class="height20px"></div>
              <div class="col-md-12">
                <input
                  type="submit"
                  value={this.l('Save')}
                  class="btn btn_small"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFormEdit;
