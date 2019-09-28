import React from 'react'


export default props => {
    return (
        <div className="box box-widget widget-user">
            <div className={`widget-user-header bg-${props.hellOrHeaven}`}>
                <h3 className="widget-user-username">{props.name}</h3>
                <h5 className="widget-user-desc">{props.age} anos</h5>
            </div>
            <div className="widget-user-image">
                <img className="img-circle" src="http://lorempixel.com/160/160/abstract" alt="User Avatar" />
            </div>
            <div className="box-footer">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="description-block">
                            <a className="btn btn-app" onClick={props.dislike} >
                                <i className="fa fa-thumbs-down"></i> Não
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 border-right">
                        <div className="description-block">
                            <h5 className="description-header">Signo</h5>
                            <span className="description-text">{props.sign}</span>
                        </div>
                    </div>
                    <div className="col-sm-4 border-right">
                        <div className="description-block">
                            <a className="btn btn-app" onClick={props.like}>
                                <i className="fa fa-thumbs-up"></i> Sim
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}