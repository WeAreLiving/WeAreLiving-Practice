import { Component } from "react";

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
               <p>THIS IS THE HEADER</p>
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
         <div className="col">
            <div><SideMenuOption/></div>
            <div><SideMenuOption/></div>
            <div><SideMenuOption/></div>
            <div><SideMenuOption/></div>
            <div><SideMenuOption/></div>
            <div><SideMenuOption/></div>
         </div>
      );
   }
}
class Middle extends Component {
   render() {
      return(
         <div className="col">
            <div className = "row">
            <MiddleHeadline/>
            </div>
            <p>Middle</p>
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
         <div className="row">
            <p>Option</p>
         </div>

      );
   }
}
class MiddleHeadline extends Component{
   render(){
      return(
         <div>
            <p>News: Nish releases his new album, armed with a Mercedes, takes Wall Street by storm</p>
         </div>
      )
   }
}
export default MainPage;