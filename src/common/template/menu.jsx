import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Conectar' icon='fire' />
        <MenuItem path='/connections' label='Astro Conexões' icon='list' />
        <MenuTree label='Cadastro' icon='drivers-license-o'>
            <MenuItem path='/edit'
                label='Editar Informações' icon='edit' />
            <MenuItem path='config'
                label='Configurações' icon='cog' />
        </MenuTree>
    </ul>
)