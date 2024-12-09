import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to reach out to me for any work opportunities or suggestions using the contact information below.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email : 
                  <a href="mailto:wcvignesh@gmail.com" target="_top"> {resumeData.website}</a>
                </h4>
                
              </div>
            </aside>
          </div>
        </section>
        );
  }
}