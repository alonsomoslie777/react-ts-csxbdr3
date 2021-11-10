import React, { Component } from 'react';
import Info from './Info';

class Cupon extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      rows: [],
      fields: {},
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
          <div class="header">
            <h4 class="title">{this.l('Cuppon')}</h4>
          </div>
          <div class="add_new_top">
            <form action="#" method="post">
              <input type="hidden" name="id" value="0" />
              <div class="col-md-2">
                <label>
                  {' '}
                  {this.l('Discount type')} <br />
                  <select name="type" class="form-control">
                    <option value="fix">{this.l('Fixed cart discount')}</option>
                    <option value="percent">
                      {this.l('Percentage cart discount')}
                    </option>
                  </select>
                </label>
              </div>
              <div class="col-md-2">
                <label>
                  {' '}
                  {this.l('Cupon Name')} <br />
                  <input
                    type="text"
                    name="cupon"
                    required=""
                    class="form-control"
                  />
                </label>
              </div>

              <div class="col-md-3">
                <label>
                  {' '}
                  {this.l('Coupon amount')}
                  <br />
                  <input
                    type="text"
                    name="amount"
                    required=""
                    class="form-control"
                  />
                </label>
              </div>

              <div class="col-md-1">
                <br />
                <button type="submit" class="btn btn_small">
                  {this.l('Add new one')}{' '}
                </button>
              </div>

              <div class="clear"></div>
            </form>
          </div>

          <form action="${baseurl}admin/cupon/bulk" method="post">
            <div class="col-md-2">
              <select name="action" class="form-control">
                <option value="">{this.l('Action')}</option>
                <option value="del">{this.l('Remove')} </option>
              </select>
            </div>

            <div class="col-md-1">
              <button type="submit" class="btn btn_small">
                {this.l('Apply')}
              </button>
            </div>

            <div class="clear"></div>

            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <thead>
                  <th>
                    <input
                      type="checkbox"
                      id="checkall"
                      onclick="check_all(this);"
                    />
                  </th>
                  <th>{this.l('ID')}</th>

                  <th>{this.l('Name')}</th>
                  <th>{this.l('Coupon amount')}</th>
                  <th>{this.l('Discount type')}</th>
                  <th>{this.l('Usage')}</th>
                  <th>{this.l('Date')}</th>
                  <th style={{ width: '40px' }}> </th>
                  <th style={{ width: '40px' }}> </th>
                </thead>
                <tbody>
                  {this.state.rows.map((row) => (
                    <tr
                      class="saverow${row.getId()}"
                      id="edit_this_nr${row.getId()}"
                    >
                      <td>
                        <input type="hidden" name="id" value="${row.getId()}" />
                        <input type="hidden" name="returndata" value="ok" />
                        <input
                          type="checkbox"
                          name="bulkid"
                          class="checkboxeach"
                          value="${row.getId()}"
                        />
                      </td>
                      <td>{row.id}</td>

                      <td>
                        <div class="edit_text">{row.cupon}</div>
                        <input
                          type="text"
                          class="form-control data_1_get hide_edit"
                          name="cupon"
                          value={row.cupon}
                        />
                      </td>

                      <td>
                        <div class="edit_text">${row.getAmount()!}</div>
                        <input
                          type="text"
                          class="form-control data_2_get hide_edit"
                          name="amount"
                          value={row.amount}
                        />
                      </td>
                      <td>
                        <div class="edit_text">${row.getType()!}</div>

                        <select
                          name="type"
                          class="form-control data_0_get{{$val->type}} hide_edit"
                        >
                          <option value="fix">
                            {this.l('Fixed cart discount')}
                          </option>
                          <option value="percent">
                            {' '}
                            {this.l('Percentage cart discount')}
                          </option>
                        </select>
                      </td>
                      <td> ${row.getUsed()!}</td>
                      <td> ${row.getCreated_at()!}</td>

                      <td>
                        <a
                          href="#"
                          class="fa_edit"
                          onclick="edit_row_tr('#edit_this_nr${row.getId()}');return false;"
                        >
                          {' '}
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          class="fa_delete"
                          onclick="return confirm('You are sure?') ? true : false;"
                        >
                          {' '}
                        </a>
                      </td>
                      <td class="result${row.getId()}"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cupon;
