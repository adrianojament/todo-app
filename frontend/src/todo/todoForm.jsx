import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props =>(
    <div>
         <table className='table'>
            <thead>
                <tr>
                    <th>
                        <Grid cols='12 9 10'>
                            <input id='description' 
                             className='form-control'
                             placeholder='Adicione uma tarefa'
                             onChange={props.handleChange}
                             value={props.description}/>                
                        </Grid>
                    </th>
                    <th>
                        <Grid cols='13 3 2'>        
                            <IconButton style='primary' icon='plus'
                                onClick={props.handleAdd}/>
                        </Grid>
                    </th>
                </tr>
            </thead>
            
        </table>
        
        
    </div>    
)