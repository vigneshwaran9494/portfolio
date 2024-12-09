(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),s=(t(13),t(1)),o=t(2),c=t(4),m=t(3),d=t(5),p=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),u=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profile_pic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:wcvignesh@gmail.com",target:"_top"},e.website)))))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("table",{className:"skills",style:{borderCollapse:"collapse",width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Category"),l.a.createElement("th",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Skills"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Languages"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Java, Kotlin, Swift, Dart (Flutter)")),l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Mobile Technologies"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Android, React Native, iOS, Flutter")),l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Client-Side Scripting"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"JavaScript, TypeScript, HTML, AngularJS, React")),l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Databases"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"SQLite, Realm, MySQL, MongoDB, PostgreSQL")),l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Operating Systems"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"macOS, Linux")),l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Frameworks"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Ionic, Cordova")),l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"IDEs"),l.a.createElement("td",{style:{border:"1px solid #ddd",padding:"8px",textAlign:"left"}},"Android Studio, Xcode, Visual Studio Code")))))))}}]),a}(n.Component),h=(n.Component,function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to reach out to me for any work opportunities or suggestions using the contact information below."))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email :",l.a.createElement("a",{href:"mailto:wcvignesh@gmail.com",target:"_top"}," ",e.website))))))}}]),a}(n.Component)),E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={imagebaseurl:"https://rbhatia46.github.io/",name:"Vignesh Waran",role:"Lead Frontend Engineer",linkedinId:"vigneshwaran9494",skypeid:"wcvignesh",roleDescription:"With 9 years of experience in IT services, I specialize in mobile app development using both native and hybrid technologies. My expertise includes React Native, Kotlin, and scalable cross-platform solutions.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/vigneshwaran1/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/vigneshwaran9494",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/ucnvignesh",className:"fa fa-twitter"}],aboutme:"I am currently working as a Lead Frontend Engineer, focusing on React Native and mobile app development. With 9 years of experience in the field, I have worked on a variety of applications using technologies like Kotlin, Java, React Native, and Flutter. I am skilled in designing, developing, and scaling innovative solutions.",address:"India",website:"wcvignesh@gmail.com",education:[{UniversityName:"Anna University",specialization:"Bachelor Of Engineering (Computer Science and Engineering)",MonthOfPassing:"June",YearOfPassing:"2015",Achievements:"Graduated with a strong foundation in computer science principles."}],work:[{CompanyName:"Elysium Technologies Pvt Ltd",specialization:"Android Developer",MonthOfLeaving:"July 2015 - July 2016",YearOfLeaving:"",Achievements:"Designed and developed Android applications with core functionalities and REST APIs."},{CompanyName:"Optisol Business Solutions Pvt Ltd",specialization:"Software Engineer",MonthOfLeaving:"July 2016 - July 2018",YearOfLeaving:"",Achievements:"Conceptualized, developed, and tested native Android applications, including UI, core functionality, and third-party SDKs. Architected Android applications with MVP pattern and dependency injection using Dagger."},{CompanyName:"Optisol Business Solutions Pvt Ltd",specialization:"Lead Engineer",MonthOfLeaving:"July 2018 - April 2019",YearOfLeaving:"",Achievements:"Built over 10 applications using Android native and cross-platform technologies like React Native."},{CompanyName:"Optisol Business Solutions Pvt Ltd",specialization:"Senior Lead Engineer",MonthOfLeaving:"April 2019 - March 2022",YearOfLeaving:"",Achievements:"Created and maintained React Native applications using cutting-edge technologies. Led a React Native team of 4 members."},{CompanyName:"Knocksense Media Pvt Ltd",specialization:"Senior Frontend Developer",MonthOfLeaving:"March 2022 - Present",YearOfLeaving:"",Achievements:"Developed and managed complete products, including event booking, media, and news-sharing apps. Focused on React Native and web app development using React."}],skillsDescription:"Technical Skills",skills:[{skillname:"Java"},{skillname:"Kotlin"},{skillname:"Swift"},{skillname:"Dart (Flutter)"},{skillname:"React Native"},{skillname:"AngularJS"},{skillname:"HTML/TypeScript"},{skillname:"PostgreSQL/MongoDB"}],portfolio:[{name:"Beacon Emergency Dispatch",description:"React Native",imgurl:"images/portfolio/origami.jpg"},{name:"Palmetto Solar",description:"React Native",imgurl:"images/portfolio/origami.jpg"},{name:"Musation",description:"Android",imgurl:"images/portfolio/origami.jpg"},{name:"Knocksense News App",description:"React Native",imgurl:"images/portfolio/origami.jpg"},{name:"Short Video Maker App",description:"Android/React Native",imgurl:"images/portfolio/origami.jpg"}],testimonials:[{description:"An exceptional developer with outstanding skills in mobile app development.",name:"John Doe, Senior Manager"},{description:"Highly recommended for innovative and scalable mobile solutions.",name:"Jane Smith, Project Lead"}]},f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:v}),l.a.createElement(u,{resumeData:v}),l.a.createElement(g,{resumeData:v}),l.a.createElement(h,{resumeData:v}),l.a.createElement(E,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.666b711f.chunk.js.map