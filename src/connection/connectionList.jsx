import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ConnectionList extends Component {

    componentWillMount() { }

    renderRows() {
        const list = this.props.list || []
        return list.map(connection => (
            <tr key={connection._id}>
                <td>{connection.name}</td>
                <td>{connection.sign}</td>
                <td>{connection.age}</td>
                <td>
                    <button className='btn btn-danger' /*onClick={() => this.props.showDelete(likes)}*/>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Signo</th>
                            <th>Idade</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.connection.list})
//const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps)(ConnectionList)