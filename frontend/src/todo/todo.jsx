import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

class Todo extends React.Component{
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
}

export default Todo