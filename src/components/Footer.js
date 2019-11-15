import React from 'react';
import '../App.css';
class Footer extends React.Component {
    render() {
        return (
           
          <div className=" footer container-fluid fixed-bottom text-right" style={{backgroundColor:'grey'}} >
            <p className="text-center" style={{color:'white'}}>&copy; Infosys Ltd.</p>
          </div>
       
        );
    }
}
export default Footer;