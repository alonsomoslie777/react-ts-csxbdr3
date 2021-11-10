import React, { Component } from 'react';
import Info from './Info';

class Attributes extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
    };
  }

  render() {
  

    return (
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">
              {' '}
              {/*title */} {this.l('Example: Color, Size') + ', ...'}
            </h4>
          </div>

          <div class="add_new_top">
            <form action="" method="POST">
              <input type="hidden" name="type[newk]" />
              <input type="hidden" name="key[newk]" />

              <div class="col-md-2">
                <p>
                  <label>{this.l('Title') + '-' + this.state.lang} </label>{' '}
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    required=""
                    name={'title[newk][' + this.state.lang + ']'}
                  />
                </p>
              </div>

              <div class="col-md-3">
                <p>
                  <label>{this.l('Box type')} </label> <br />
                  <select name="box[newk]" class="form-control">
                    <option value="textbox">{this.l('Textbox')}</option>
                    <option value="select">{this.l('Select')}</option>
                    <option value="checkbox">{this.l('Checkbox')}</option>
                  </select>
                </p>
              </div>

              <div class="col-md-2">
                <label>
                  <br />{' '}
                </label>{' '}
                <br />
                <input
                  type="submit"
                  class="btn btn_small"
                  value={this.l('Add new one')}
                />
              </div>
            </form>

            <div class="clear"></div>
          </div>
          <div class="clear"></div>

          <div class="content table-responsive table-full-width">
            <form action="#" method="POST">
              <input type="hidden" name="attr" />
              <input type="hidden" name="key" />

              <table class="table table-hover table-striped">
                <thead>
                  <th style={{ width: '100px' }}>ID</th>
                  <th>{this.l('Title')} </th>
                  <th> {this.l('Type')}</th>
                  <th>{this.l('ShortCode')} </th>
                  <th style={{ width: '45px' }}></th>
                  <th style={{ width: '110px' }}>{this.l('Sugestion')} </th>
                  <th style={{ width: '110px' }}></th>
                  <th style={{ width: '45px' }}></th>
                </thead>
                <tbody>
                  <tr id="aaaaaa">
                    <td>
                      <input type="hidden" name={'type[key]'} />
                      <input type="hidden" name={'key[key]'} />
                      <span></span>
                    </td>
                    <td>
                      <div class="edit_text">
                        {' '}
                        --value.getName().get(view.currentLang()!)!{' '}
                      </div>
                      <div class="hide_edit blockMultilang">
                        <span class="inputLang">{this.state.lang}</span>
                        <input
                          type="text"
                          class="form-control"
                          required=""
                          name={'title[key][' + this.state.lang + ']'}
                        />
                      </div>
                    </td>

                    <td>
                      {this.l('Type')}
                      <div class="edit_text">{'value.getBox()'}</div>
                      <select name="box[$key]" class="form-control hide_edit">
                        <option value="textbox">{this.l('Textbox')}</option>
                        <option value="select">{this.l('Select')}</option>
                        <option value="checkbox">{this.l('Checkbox')}</option>
                      </select>
                    </td>

                    <td>[attributes id={'key'}] </td>
                    <td>
                      <a href="#" class="fa_edit">
                        {' '}
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#load_ajax_modal"
                        class="btn btn_small"
                      >
                        {this.l('Add Sugestion')}
                      </a>
                    </td>
                    <td>
                      <input
                        type="submit"
                        class="btn btn_small"
                        value={this.l('Save')}
                      />
                    </td>
                    <td>
                      <a href="#" title="{this.l('Delete')}" class="fa_delete">
                        {' '}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    );
  }
}

export default Attributes;