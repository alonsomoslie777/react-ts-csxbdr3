import React, { Component } from 'react';
import Info from './Info';

class Currencies extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      rows: [],
      currencies: {
        AED: {
          enable: '',
          name: 'AED',
          code: '&#1583;.&#1573;',
          default: '',
          type: ['left', 'right', 'left with space', 'right with space'],
          rate: '1',
        },
        AFN: {
          enable: '',
          name: 'AFN',
          code: '&#65;&#102;',
          default: '',
          type: ['left', 'right', 'left with space', 'right with space'],
          rate: '1',
        },
      },
    };
  }
  componentDidMount() {
    //this.setState({ fields: this.state.rows });
    //console.log('json is:', this.state.fields);
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <form class="formSave" action="#" method="POST">
            <input type="hidden" name="fieldsType" value="fieldsType" />
            <div class="col-md-6">
              <h3> title</h3>
            </div>
            <div class="col-md-6 text_align_right">
              <input
                type="submit"
                class="btn btn_small"
                value={this.l('Update')}
              />
            </div>
            <div class="col-md-12 text_align_right">
              <a href="#" class="btn btn_small btn_active">
                {' '}
                {this.l('Active currencies')}{' '}
              </a>{' '}
              |
              <a href="#" class="btn btn_small">
                {' '}
                {this.l('All currencies')}{' '}
              </a>
            </div>

            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <tbody>
                  {Object.entries(this.state.currencies).map(([key, value]) => (
                    <tr id="edit_${key}" class="options_each enabled_option">
                      <td style={{ verticalAlign: 'middle' }}>
                        <label class="switch show_edit">
                          <input
                            type="checkbox"
                            class="checkbox show_edit"
                            name={key + '[enable]'}
                            value="yes"
                          />
                          <span class="slider round"></span>
                        </label>
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>{key}</td>

                      <td style={{ verticalAlign: 'middle' }}>
                        <div
                          class="edit_text"
                          style={{ display: 'inline-table' }}
                        >
                          {' '}
                        </div>
                        <label class="hide_edit blockMultilang">
                          <input
                            type="text"
                            class="form-control show_edit"
                            name={key + '[code]'}
                          />
                        </label>
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <label class="show_edit">
                          {this.l('Main Currency')}
                        </label>
                        <br />
                        <label class="switch show_edit">
                          <input
                            type="checkbox"
                            class="checkbox show_edit"
                            name={key + '[main]'}
                            value="yes"
                          />
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td style={{ verticalAlign: 'middle' }}>
                        <div class="edit_text"> {this.l('Field width')} </div>
                        <label class="hide_edit hide_edit">
                          {this.l('Field width')} <br />
                          <select
                            name={key + '[type]'}
                            class="form-control show_edit"
                          >
                            <option value="left">{this.l('Left')}</option>
                            <option value="right"> {this.l('Right')}</option>
                            <option value="left with space">
                              {this.l('Left with space')}
                            </option>
                            <option value="right with space">
                              {this.l('Right with space')}
                            </option>
                          </select>
                        </label>
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <div
                          class="edit_text"
                          style={{ display: 'inline-table' }}
                        >
                          {' '}
                          {this.l('Rate(to main currency)')} : 1{' '}
                        </div>
                        <label class="hide_edit blockMultilang">
                          <input
                            type="text"
                            class="form-control show_edit"
                            name={key + '[rate]'}
                          />
                        </label>
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <a href="#" class="fa_edit">
                          {' '}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="col-md-12 text_align_right">
              <input
                type="submit"
                class="btn btn_small"
                value={this.l('Update')}
              />
            </div>
            <div class="height15px"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Currencies;
