import React, { Component } from 'react';
import Info from './Info';

class GeneralSettings extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      rows: JSON.parse(
        '{"subject":"You got mail","to":"support@jcomcms.com","submit":"Send Message","message":"Thank you we will be in touch soon!","fields":{"id1600162463221":{"name":"id1600162463238","label":"Name","placeholder":"Name","type":"text","required":"yes"},"id1600162464072":{"name":"id1600162464067","label":"Email","placeholder":"Email","type":"email","required":"yes"},"id1600162464559":{"name":"id1600162464496","label":"Message","placeholder":"Message","type":"textarea"}}}'
      ),
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

        <div class="col-md-12">
          <h3>{this.l('General Settings') }</h3>
       </div>
       
        <form action="${baseurl}admin/general-settings/store" method="POST" enctype="multipart/form-data">
             <div class="col-md-12 text_align_right">
               <input type="submit" class="btn btn_small" value={this.l('Update')}/>
             </div>
              <div class="col-md-6">  
                 <table  class="table_admin_settings">
                   <tr>
                         <th> 
                           <i class="fa fa-file-picture-o"></i> {this.l('Logo')}
                         </th>
                         <td> 
                            <div class="col-md-12">
                                   <input type="hidden" name="logo">
                                   <input type="file" class="form-control" name="logofile"  />
                                  
                                      <img src="#" style={maxHeight:"70px"}/>
                                   
                            </div>
                         </td>
                     </tr>
                     <tr>
                         <th> 
                           <i class="fa fa-file-picture-o"></i> {this.l('Favicon') }
                         </th>
                         <td> 
                            <div class="col-md-12">
                                <input type="hidden" value="${row.getFavicon()!}" name="favicon">
                               <input type="file" class="form-control" name="faviconfile"  />
                                   <img src="${baseurl}content/images/${row.getFavicon()!}" style={maxHeight:"70px"}/>
                            </div>  
                         </td>
                     </tr>
                     
                      <tr>
                         <th> 
                           <h4>{this.l('Media') }:</h4> 
                         </th>
                         <td> 
                               
                         </td>
                     </tr>
                      <tr>
                          <th> 
                           <i class="fa fa-file-picture-o"></i> {this.l('Crop image by dimension') }
                         </th>
                         <td> 
                             <div class="col-sm-12">
                             <label class="switch">
                                <input type="checkbox" class="checkbox" name="media_crop" value="yes" />
                                <span class="slider round"></span>
                              </label>
                           </div>
                         </td>
                     </tr>
                      <tr>
                          <th> <i class="fa fa-file-picture-o"></i> {this.l('Thumbnail size') } (pixel)</th>
                         <td> 
                             <div class="col-sm-6">
                                 <input type="text" class="form-control" placeholder="255" name="media_width"  />
                            </div>
                              <div class="col-sm-6">
                                 <input type="text" class="form-control" placeholder="383" name="media_height" />
                             </div>   
                         </td>
                     </tr>
                     
                </table>
              </div>
              
               <div class="col-md-6">
                   <table  class="table_admin_settings">
                       <tr>
                           <th> {this.l("Forse login on checkout page")}</th>
                           <td>
                               <div class="col-md-12">
                                   <label class="switch">
                                       <input type="checkbox" class="checkbox" name="forseCheckoutLogin" value="yes"   />
                                   <span class="slider round"></span>
                                   </label>
                               </div>
                           </td>
                       </tr>
                       <tr>
                           <th> {this.l("Website on maintenance")}</th>
                           <td>
                               <div class="col-md-12">
                                   <label class="switch">
                                       <input type="checkbox" class="checkbox" name="websiteonmaintenance" value="yes" />
                                       <span class="slider round"></span>
                                   </label>
                               </div>
                           </td>
                       </tr>
                       <tr>
                           <th> {this.l("Minify css to increase the speed of website")}</th>
                           <td>
                               <div class="col-md-12">
                                   <label class="switch">
                                       <input type="checkbox" class="checkbox" name="developmentmode" value="yes"  />
                                   <span class="slider round"></span>
                                   </label>
                               </div>
                           </td>
                       </tr>
                       <tr>
                           <th><i class="fa fa-at"></i> {this.l("Email Address")}</th>
                           <td>
                               <div class="col-md-12">
                                   <input type="text" class="form-control" name="admin_email" />
                               </div>
                           </td>
                       </tr>
                       <tr>
                           <th><i class="fa fa-link"></i> {this.l("Site Address")}(URL)</th>
                           <td>
                               <div class="col-md-12">
                                   <input type="text" class="form-control"  name="baseurl" />
                                   </div>
                           </td>
                       </tr>
                       <tr>
                           <th><i class="fa fa-file"></i> {this.l("Site Title")}</th>
                           <td>
                               <div class="col-md-12">
                                   <input type="text" class="form-control" name="site_title" />
                                   </div>
                           </td>
                       </tr>
                       <tr>
                           <th><i class="fa fa-file"></i> {this.l("Meta descriptions")}</th>
                           <td>
                               <div class="col-md-12">
                                   <input type="text" class="form-control"  name="metad" />
                                   </div>
                           </td>
                       </tr>
                       <tr>
                           <th><i class="fa fa-file"></i> {this.l("Meta keyword")}</th>
                           <td>
                               <div class="col-md-12">
                                   <input type="text" class="form-control"  name="metak" />
                                   </div>
                           </td>
                       </tr>
                       <tr><th><h4>Shop pages:</h4></th> <td></td></tr>
                       <tr>
                           <th>  {this.l("Home Page")}</th>
                           <td>
                               <div class="col-md-12">
                                   <select name="pageHome" class="form-control">
                                       <option value="0">{this.l("Select")}</option>
                                       <#if pages??>
                                          <#list pages  as value>
                                            <option value="" > >${value.getTitle()}</option>
                                          </#list>
                                       </#if>
                                   </select>
                               </div>
                           </td>
                       </tr>
                       <tr>
                           <th>  {this.l("Checkout term and condition page")}</th>
                           <td>
                               <div class="col-md-12">
                                   <select name="checkoutTermandcondition" class="form-control">
                                       <option value="0">{this.l("Select")}</option>
                                       <#if pages??>
                                          <#list pages  as value>
                                            <option value="" >${value.getTitle()}</option>
                                          </#list>
                                       </#if>
                                   </select>
                               </div>
                           </td>
                       </tr>
                       <tr>
                           <th><i class="fa fa-file"></i> {this.l("Any js like google analitycs code or chat")}</th>
                           <td>
                               <div class="col-md-12">
                                   <textarea name="_footerjs_" class="form-control">${_footerjs_!}</textarea>
                               </div>
                           </td>
                       </tr>
                       
                </table>
              </div>
             
            <div class="col-md-12 text_align_right">
               <input type="submit" class="btn btn_small" value="{this.l('Update') }"/>
           </div>  
         </form>  
         <div class="height20px"></div>
      </div>
  </div>   

     );
  }
}

export default GeneralSettings;