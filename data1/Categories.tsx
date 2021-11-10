import React, { Component } from 'react';
import Info from './Info';

class Categories extends Info {
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
            <h4 class="title">{this.l('Categories')}</h4>
            <p>
              <a
                class="btn"
                href="${baseurl}admin/categories/add-edit/${type}?id=0"
              >
                {this.l('Add new one')}
              </a>
            </p>
          </div>

          <form action="${baseurl}admin/categories/update-bulk" method="post">
            <div class="col-md-2">
              <select name="action" class="form-control">
                <option value="">{this.l('Action')}</option>
                <option value="del">{this.l('Delete')}</option>
              </select>
            </div>
            <div class="col-md-1">
              <button type="submit" class="btn btn_small">
                {this.l('Apply')}
              </button>
            </div>
            <div class="clearfix"></div>

            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <thead>
                  <th style={{ width: '40px' }}>
                    <input
                      type="checkbox"
                      id="checkall"
                      onclick="check_all(this);"
                    />
                  </th>
                  <th>{this.l('ID')}</th>
                  <th>{this.l('Title')}</th>
                  <th>{this.l('CPU')}</th>
                  <th style={{ width: '100px' }}> </th>
                  <th style={{ width: '40px' }}> </th>
                </thead>
                <tbody> </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Categories;
