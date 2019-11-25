import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Agile extends React.Component{
    render(){
        return(
        <React.Fragment>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-8 offset-1'>
                       <form>
                           <div className='form-group'>
                               <p>Everyone required to go from requirements to finished system is on the team.</p>
                               <label className='radio-inline'>
                                   <input className='form-control' type='radio' name='opt1' />True
                               </label>
                               <label className='radio-inline'>
                                   <input className='form-control' type='radio' name='opt1' />More True than False
                               </label>
                               <label className='radio-inline'>
                                   <input className='form-control' type='radio' name='opt1' />Neither False nor True
                               </label>
                               <label className='radio-inline'>
                                   <input className='form-control' type='radio' name='opt1' />More False than True
                               </label>
                               <label className='radio-inline'>
                                   <input className='form-control' type='radio' name='opt1' />False
                               </label>
                              
                           </div>
                       </form>
                   </div>

               </div>

           </div>
        </React.Fragment>
        );
    }
}
export default Agile;