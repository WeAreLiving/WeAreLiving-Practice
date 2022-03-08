import { Component } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class MainPage extends Component {
   render() {
      return(
         <div style={{backgroundColor:"lavender"}}>
            <Header/>
            <Media/>
         </div>
      );
   }
}

class Header extends Component {
   render() {
      return(
         <div className="container">
            <div className="row">
               <div className="col d-flex justify-content-center">
                  <img src={require('../res/banner.png')}  width='500px' className="img-fluid" alt="banner" />
               </div>
            </div>
         </div>
      );
   }
}

class Media extends Component{
   render(){
      return(
         <div className="row">
            <Sidebar/>
            <Middle/>
            <Ads/>
         </div>
      );
   }
}

class Sidebar extends Component {
   render() {
      return(
         
         <div className="col-3" >
            <div style={{  padding: '3rem'}}>
               <SideMenuOption></SideMenuOption>
               <SideMenuOption></SideMenuOption>
               <SideMenuOption></SideMenuOption>
               <SideMenuOption></SideMenuOption>
            </div>
         </div>
      );
   }
}
class Middle extends Component {
   render() {
      return(
         <div className="col-6">
            <div className = "row">
               <div style = {{marginTop: '2rem'}}>
                  <MiddleHeadline/>
               </div>
                  <img src={require('../res/nish.jpg')} height='500px' width='500px' alt = "nish"/>
               </div>
         </div>
      );
   }
}
class Ads extends Component {
   render() {
      return(
         <div className="col">
            <div style = {{fontFamily : '"Copperplate"', fontSize:"1.4rem", marginTop:"3rem", marginLeft:"5rem"}}>
               <p>Featured Sponsors</p>
            </div>
            
         </div>
      );
   }
}
class SideMenuOption extends Component{
   render(){
      return(
         <div className="row-1">
            <div style={ {borderStyle: ' none none groove none', width:'90%', textAlign: 'center'} }>
               <Breadcrumb>
                  <Breadcrumb.Item href="#" active>
                     <div style={{color: 'black',  fontFamily: ' "Georgia", "Courier New", monospace'}}>
                        menu option 
                     </div>  
                  </Breadcrumb.Item>
               </Breadcrumb> 
            </div>
   
         </div>

      );
   }
}
class MiddleHeadline extends Component{
   render(){
      return(
         <div>
            <div >
               <img src={require('../res/news.png')} height='60px' width='100px' alt = "news" style={{}}/>
               <div style={{ fontFamily:"impact"}}>
                 Nish releases his new album, armed with a Mercedes, takes Wall Street by storm
               </div>
                
            </div>
         </div>
      )
   }
}
export default MainPage;