import React, { Component } from 'react';
import Info from './Info';

class EmailConfig extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      rows: [],
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
          <div class="col-md-6">
            <h3>{this.l('Email Settings')}</h3>

            <form action="#" method="post">
              <div class="col-md-12">
                <input
                  type="submit"
                  class="btn btn_small"
                  value={this.l('Update')}
                />
              </div>
              <table class="table_admin_settings">
                <tr>
                  <th>{this.l('Global "From" Name')}</th>
                  <td>
                    <div class="col-md-12">
                      <input type="text" class="form-control" name="fromname" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{this.l('Global "From" Email')}</th>
                  <td>
                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        name="fromemail"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{this.l('SMTP Host Address')}</th>
                  <td>
                    <div class="col-md-12">
                      <input type="text" class="form-control" name="host" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{this.l('SMTP Host Port')}</th>
                  <td>
                    <div class="col-md-12">
                      <input type="text" class="form-control" name="port" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>{this.l('SMTP Server Username')}</th>
                  <td>
                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        autocomplete="off"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>{this.l('SMTP Server Password')}</th>
                  <td>
                    <div class="col-md-12">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="*********"
                        name="password"
                        autocomplete="off"
                      />
                    </div>
                  </td>
                </tr>
              </table>
              <div class="col-md-12">
                <input
                  type="submit"
                  class="btn btn_small"
                  value={this.l('Update')}
                />
              </div>
            </form>
          </div>

          <div class="col-md-6">
            <form action="#" method="post">
              <h3>Send test mail</h3>
              <br />
              <div class="col-md-12">
                {this.l('To')}
                <br />
                <input
                  type="text"
                  class="form-control"
                  placeholder="your-email@domain.com"
                  name="to"
                  value=""
                  required=""
                />
                <br />
              </div>
              <div class="col-md-12">
                {this.l('Text')}
                <br />
                <textarea
                  class="form-control"
                  placeholder="Test emil from"
                  name="body"
                  required=""
                >
                  Test emil from
                </textarea>
              </div>
              <div class="col-md-12">
                <br />
                <br />
                <input
                  type="submit"
                  class="btn btn_small"
                  value={this.l('Send')}
                />
              </div>
            </form>
            <div class="height20px"></div>
            <h4></h4>
          </div>

          <div class="height20px"></div>
        </div>
      </div>
    );
  }
}

export default EmailConfig;
