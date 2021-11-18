import React, { Component } from 'react';
import Info from './Info';

class MenuList extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      rows: [],
      fields: {},
    };
  }
  componentDidMount() {
    this.setState({ fields: this.state.rows });
    //console.log('json is:', this.state.fields);
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">{this.l('Menu')}</h4>
          </div>
          <div class="add_new_top">
            <form action={'baseurl'} method="post">
              <input type="hidden" name="lang" value={this.state.lang} />

              <div class="col-md-2">
                <label> {this.l('Menu Name')} </label> <br />
                <input
                  type="text"
                  name="title"
                  required=""
                  class="form-control"
                />
              </div>
              <div class="col-md-3">
                <label> {this.l('Menu Name')} </label>
                <br />
                <select name="position" class="form-control">
                  <option>Select Position</option>
                  <option value="topMenuLogin">
                    Top menu when user is login
                  </option>
                  <option value="topMenuNOTLogin">
                    Top menu when user is NOT login
                  </option>
                  <option value="main">Main menu</option>
                  <option value="footer">Footer Menu</option>
                </select>
              </div>

              <div class="col-md-2">
                <br />
                <button type="submit" class="btn btn_small">
                  {this.l('Add New')}{' '}
                </button>
              </div>

              <div class="clear"></div>
            </form>
          </div>

          <div class="content table-responsive table-full-width">
            <table class="table table-hover table-striped">
              <thead>
                <th>ID</th>
                <th>{this.l('Menu Name')}</th>
                <th>{this.l('Position')}</th>
                <th>{this.l('Use menu in code')} </th>
                <th>{this.l('Short code')}</th>
                <th style={{ width: '40px' }}> </th>
                <th style={{ width: '40px' }}> </th>
              </thead>
              <tbody>
                {this.state.rows.map((row) => (
                  <tr id="edit_this_nr">
                    <td>{row.id}</td>
                    <td>{row.value}</td>
                    <td>{row.value2}</td>
                    <td>[menu id={row.id}] </td>
                    <td>[menu id={row.id} class=your_class]</td>
                    <td>
                      <a href={row.id} class="fa_edit small">
                        {' '}
                      </a>
                    </td>
                    <td>
                      <a
                        href={row.id}
                        class="fa_delete"
                        onclick="return confirm('You are sure?') ? true : false;"
                      >
                        {' '}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuList;
