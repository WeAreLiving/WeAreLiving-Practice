import { Component } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class MainPage extends Component {
   render() {
      return(
         <div>
            <Header/>
            <Media/>
         </div>
      );
   }
}

class Header extends Component {
   render() {
      return(
         <div className="row">
            <div className="col">
               <img src={require('../res/banner.png')} height='100px' width='500px' alt = "banner"/>
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
            <p className="ml-5"></p>
            <SideMenuOption></SideMenuOption>
            <SideMenuOption></SideMenuOption>
            <SideMenuOption></SideMenuOption>
            <SideMenuOption></SideMenuOption>
         </div>
      );
   }
}
class Middle extends Component {
   render() {
      return(
         <div className="col-6">
            <div className = "row">
            <MiddleHeadline/>
            </div>
            <img src={require('../res/nish.jpg')} height='500px' width='500px' alt = "nish"/>
         </div>
      );
   }
}
class Ads extends Component {
   render() {
      return(
         <div className="col">
            <p>Ads</p>
         </div>
      );
   }
}
class SideMenuOption extends Component{
   render(){
      return(
         <div className="row-1">
            <Breadcrumb>
               <Breadcrumb.Item href="#" divider>
                  option
               </Breadcrumb.Item>
            </Breadcrumb>    
         </div>

      );
   }
}
class MiddleHeadline extends Component{
   render(){
      return(
         <div>
            <p>
               <img src={require('../res/news.jpg')} height='60px' width='100px' alt = "news"/>
                Nish releases his new album, armed with a Mercedes, takes Wall Street by storm
            </p>
         </div>
      )
   }
}
export default MainPage;