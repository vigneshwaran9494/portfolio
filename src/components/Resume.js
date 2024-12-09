import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

             
   				<table className="skills" style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Category</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Languages</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Java, Kotlin, Swift, Dart (Flutter)</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Mobile Technologies</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Android, React Native, iOS, Flutter</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Client-Side Scripting</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>JavaScript, TypeScript, HTML, AngularJS, React</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Databases</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>SQLite, Realm, MySQL, MongoDB, PostgreSQL</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Operating Systems</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>macOS, Linux</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Frameworks</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Ionic, Cordova</td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>IDEs</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Android Studio, Xcode, Visual Studio Code</td>
                    </tr>
                  </tbody>
                </table>

   				 

   		

   			</div>

         </div>

      </section>
    );
  }
}