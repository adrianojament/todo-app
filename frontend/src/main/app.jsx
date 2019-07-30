import 'modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/svg-with-js.min.css'
import React from 'react'
import Menu from '../template/menu'
import Router from './router'

export default props => (
    <div className='container'>
        <Menu/>
        <Router/>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
    </div>
)