import 'modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Menu from '../template/menu'
import PageHeader from '../template/pageHeader'
import Router from './router'

export default props => (
    <div className='container'>
        <Menu/>
        <Router/>        
    </div>
)