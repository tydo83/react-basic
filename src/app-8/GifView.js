import React from 'react'

export default function GifView(props) {
    return (
        <div>
            {props.isLoading ?
                (<div>...isLoading</div>)
                :
                <div className="container">
                    <div className="row">
                        {
                            props.giphyArray.map((item) => {
                                return <div className="col-sm-6" key={item.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div>
                                                <img src={item.images.fixed_width_still.url} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                    </div>
                </div>
            }
        </div>
    )
}

