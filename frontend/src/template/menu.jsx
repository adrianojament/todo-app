import React from 'react'
import '@fortawesome/fontawesome-free/css/svg-with-js.min.css'

export default props => (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>                    
                    <i className="fad fa-calendar-check">TodoApp</i>                   
                </a>
            </div> 
                        
            <div id='navbar' className='collapse navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <a className='nav-link' href="#/todos">Todos</a>
                    </li>
                    <li className='nav-item active'>
                        <a className='nav-link' href="#/about">Sobre</a>
                    </li>
                </ul>                
            </div>  
            
        </div>
    </nav>
)
