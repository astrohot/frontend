import React from 'react'


export default props => {
    return (
        <div className="box box-primary box-solid">
            <div className="box-header with-border">
                <h3 className="box-title">Horóscopo do Dia</h3>

                <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <i className="fa fa-minus"></i>
                    </button>
            </div>
            </div>
            <div className="box-body">
                {props.description}
            </div>
        </div>
    )
}