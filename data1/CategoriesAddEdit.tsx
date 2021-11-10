import React, { Component } from 'react';
import Info from './Info';

class CategoriesAddEdit extends Info {
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
              {this.l('Edit')}

              {this.l('Create new')}
            </h4>
          </div>
          <div class="content">
            <form class="formSave" action="#" method="POST">
              <div class="text_align_right">
                <input type="submit" class="btn" value={this.l('Save')} />
              </div>

              <input type="hidden" name="catid" />
              <input type="hidden" name="type" />
              <input type="hidden" name="lang" />
              <div class="col-md-6">
                <p>
                  <label>{this.l('Title')}</label> <br />
                  <input type="text" class="form-control" name="title" />
                </p>
              </div>
              <div class="col-md-6">
                <p>
                  <label>{this.l('Parent')}</label> <br />
                  <select name="parent" class="form-control">
                    <option value="0">{this.l('Select parent')}</option>
                  </select>
                </p>
              </div>
              <div class="clear"></div>

              <div class="col-md-6">
                <p>
                  <label> {this.l('CPU')}</label> <br />
                  <input type="text" class="form-control" name="cpu" />
                </p>
              </div>

              <div class="col-md-6">
                <p>
                  <label>{this.l('External URL')}</label> <br />
                  <input type="text" class="form-control" name="url" />
                </p>
              </div>

              <div class="col-md-6">
                <p>
                  <label>{this.l('Meta description')}</label> <br />
                  <input type="text" class="form-control" name="metad" />
                </p>
              </div>
              <div class="col-md-6">
                <p>
                  <label>{this.l('Meta keyword')}</label> <br />
                  <input type="text" class="form-control" name="metak" />
                </p>
              </div>

              <div class="height20px"></div>
              <div class="col-md-12">
                <textarea
                  name="text"
                  id="editor"
                  class="form-control tinymce"
                ></textarea>
              </div>
              <div class="height10px"></div>
              <div class="text-center">
                <input type="submit" class="btn" value={this.l('Save')} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CategoriesAddEdit;
