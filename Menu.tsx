import React, { Component } from 'react';
import Info from './Info';

class Menu extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      row: {},
      fields: {},
      json: '{"autoload":null,"param":"website_menu","value":"Footer menu","value1": {"en":"<li><a href=\\"#\\" class=\\"simple_link\\">Categories</a><ul><li style=\\"opacity: 1;\\" class=\\"\\"><a href=\\"/cat/clothing\\" class=\\"simple_link\\">Clothing</a></li><li style=\\"opacity: 1;\\" class=\\"\\"><a href=\\"/cat/handbags\\" class=\\"simple_link\\">Handbags</a></li><li style=\\"opacity: 1;\\" class=\\"\\"><a href=\\"/cat/electronics\\" class=\\"simple_link\\">Electronics</a></li><li style=\\"opacity: 1;\\" class=\\"\\"><a href=\\"/cat/software\\" class=\\"simple_link\\">Software</a></li></ul></li><li class=\\"\\"><a href=\\"#\\" class=\\"simple_link\\">Quick Links</a><ul><li style=\\"opacity: 1;\\" class=\\"\\"><a href=\\"/orders-list\\" class=\\"simple_link\\">My orders</a></li><li><a href=\\"/cart/get\\" class=\\"simple_link\\">Cart</a></li><li><a href=\\"/checkout/step1\\" class=\\"simple_link\\">Checkout</a></li><li style=\\"opacity: 1;\\" class=\\"\\"><a href=\\"/wishlist\\" class=\\"simple_link\\">Wishlist</a></li><li><a href=\\"/signup/my-account\\" class=\\"simple_link\\">My Account</a></li></ul></li><li style=\\"opacity: 1;\\" class=\\"activeIn\\"><a href=\\"#\\" class=\\"simple_link\\">Policies</a><ul><li><a href=\\"/page/privacy-policy\\" class=\\"simple_link\\">Privacy Policy</a></li><li><a href=\\"/page/terms--conditions\\" class=\\"simple_link\\">Terms &amp; Conditions</a></li><li><a href=\\"/page/returns-policy\\" class=\\"simple_link\\">Returns Policy</a></li><li><a href=\\"/page/size-guide\\" class=\\"simple_link\\">Size Guide</a></li></ul></li>"},"value2":"footer"}',
    };
  }
  componentDidMount() {
    //alert(this.state.json);
    this.setState({ row: JSON.parse(this.state.json) });
    //console.log('json is:', this.state.fields);
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="col-md-12">
          <h3>{this.state.row.value}</h3>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="block">
              <h3 class="header_block menu_open">{this.l('Custom Link')}</h3>
              <div class="paddinginside block_inside active">
                <label class="col-md-4">{this.l('Select Icon')}</label>
                <div class="col-md-8">
                  <button
                    type="button"
                    class="icon_link"
                    onclick="icon_setup('.link_text',this)"
                    data-toggle="modal"
                    data-target="#load_icons_modal"
                  >
                    Select icon
                  </button>
                </div>
                <div class="height10px"></div>

                <label class="col-md-4">{this.l('Select URL')}</label>
                <div class="col-md-8">
                  <select
                    name=""
                    class="form-control"
                    onchange="select_url_fromlist(this,'.link_text_href','.link_text')"
                  >
                    <option value="">{this.l('Select')}</option>
                    <option value={'key'}>aaaaaa </option>
                  </select>
                </div>
                <div class="height10px"></div>
                <label class="col-md-4">{this.l('Or enter manually')}</label>

                <div class="col-md-8">
                  <input
                    type="text"
                    value=""
                    placeholder="#"
                    name="link"
                    class="form-control link_text_href"
                  />
                </div>

                <div class="height10px"></div>
                <label class="col-md-4">{this.l('Menu name')}</label>
                <div class="col-md-8">
                  <input
                    type="text"
                    value=""
                    placeholder="Home"
                    name="link"
                    class="form-control col-md-8 link_text"
                    data-icons=""
                  />
                </div>

                <div class="height10px"></div>
                <p class="col-md-12 text_align_right">
                  <a
                    href="#"
                    class="btn btn_small"
                    onclick="return simple_link('.link_text','text');"
                  >
                    {this.l('Add ittem')}
                  </a>
                </p>
                <div class="clear"></div>
              </div>
            </div>

            <div class="block">
              <h3 class="header_block menu_open">{this.l('Pages')}</h3>
              <div class="paddinginside block_inside">
                <label class="col-md-4">{this.l('Select Icon')}</label>
                <div class="col-md-8">
                  <button
                    type="button"
                    class="icon_pages"
                    onclick="icon_setup('.link_page',this)"
                    data-toggle="modal"
                    data-target="#load_icons_modal"
                  >
                    {this.l('Select icon')}
                  </button>
                </div>

                <div class="height10px"></div>

                <label class="col-md-4">{this.l('Page')}</label>
                <div class="col-md-8">
                  <select class="form-control link_page" data-icons="">
                    <option
                      value={'/page/value.cpu'}
                      data-info={'page_value.pageid'}
                    >
                      {'value.title'}
                    </option>
                  </select>
                </div>
                <div class="height10px"></div>
                <p class="col-md-12 text_align_right">
                  <a
                    href="#"
                    class="btn btn_small"
                    onclick="return simple_link('.link_page', '.page_icon');"
                  >
                    {this.l('Add ittem')}
                  </a>
                </p>
                <div class="clear"></div>
              </div>
            </div>

            <div class="block">
              <h3 class="header_block menu_open">{this.l('cat name')}</h3>
              <div class="paddinginside block_inside">
                <label class="col-md-4">{this.l('Select Icon')}</label>
                <div class="col-md-8">
                  <button
                    type="button"
                    class="{class1}"
                    onclick="icon_setup('.{class2}',this)"
                    data-toggle="modal"
                    data-target="#load_icons_modal"
                  >
                    {this.l('Select icon')}
                  </button>
                </div>

                <div class="height10px"></div>

                <label class="col-md-4">{this.l('Select')}</label>
                <div class="col-md-8">
                  <select class="form-control {class2}" data-icons="">
                    <option
                      data-info={'page_{key2}'}
                      value={
                        '(key=="product" || key=="brand"  ? "/cat/": "categories")+value2.Cpufull()'
                      }
                    >
                      {'{value.title}'}
                    </option>
                  </select>
                </div>
                <div class="height10px"></div>
                <p class="col-md-12 text_align_right">
                  <a href="#" class="btn btn_small">
                    {this.l('Add all')}
                  </a>
                  <a href="#" class="btn btn_small">
                    {this.l('Add ittem')}
                  </a>
                </p>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        {/****************************** */}
        <div class="col-sm-8">
          <form action="#" method="post" enctype="multipart/form-data">
            <div class="card">
              <div class="header_block">
                <div class="col-md-10 header_menue">
                  <em>{this.l('Menu name')}:</em>
                  <input
                    type="text"
                    name="title"
                    value={this.state.row.value}
                    class="form-control small_input"
                  />
                  <em>{this.l('Position')}:</em>
                  <select name="position" class="form-control small_input">
                    <option>{this.l('Select Position')}</option>
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
                <div class="col-md-2 text_align_right">
                  <input
                    type="submit"
                    class="btn btn_small submit_form"
                    value={this.l('Update')}
                  />
                </div>
                <div class="clear"></div>
              </div>
              <div class="paddinginside">
                <input type="hidden" name="id" value={'key'} />
                <input type="hidden" name="lang" value={this.state.lang} />
                <textarea
                  name="munuIttem"
                  id="response"
                  style={{ display: 'none' }}
                ></textarea>

                <div class="col-md-12">
                  <div class="col-md-3" style={{ float: 'right' }}>
                    <select
                      onchange="if (this.value) window.location.href=this.value"
                      class="form-control"
                    >
                      <option value="">Dublicate from:</option>
                      <option value="">Dublicate from {'lang'}</option>
                    </select>
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="clear"></div>

                <div class="menu-box">
                  <ul class="menu-list sortable"></ul>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="height20px"></div>
      </div>
    );
  }
}

export default Menu;
