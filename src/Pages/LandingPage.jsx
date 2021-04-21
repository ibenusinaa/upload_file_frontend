import axios from 'axios'
import React from 'react'

export default class LandingPage extends React.Component{

    state = {
        data: null,
        image: null
    }

    componentDidMount(){
        this.onGetData()
    }

    onGetData = () => {
        axios.get('http://localhost:5000/products')
        .then((res) => {
            console.log(res)
            this.setState({data: res.data})
            this.setState({image: res.data.data[0].images[0].image})
        })
        .catch((err) => {
            console.log(err)
        })
    }


    render(){

        if(this.state.data === null){
            return(
                <div>
                    Loading....
                </div>
            )
        }
        return(
            <div className='container'>
                <div className="row">
                    <div className='mt-3 col-12'>
                        <h3>
                            HEADER
                        </h3>
                    </div>
                    <div className='my-2 mx-4'>
                        <button className='btn btn-success'>
                            Add Card
                        </button>
                    </div>
                    <hr className='col-12'/>
                    <div className ='row'>
                        {
                            this.state.data.data.map((value, index) => {
                                return(
                                    <div className='col-3'>
                                        <div className="card" style={{width: '18rem'}}>
                                            <img className="card-img-top" src={this.state.image} alt="Card image cap" />
                                            <div className='row'>
                                                <div className ='col-4'>
                                                    <img className="card-img-top" src={value.images[0].image} alt="Card image cap" onClick={() => this.setState({image: value.images[0].image})}/>
                                                </div>
                                                <div className ='col-4'>
                                                    <img className="card-img-top" src={value.images[1].image} alt="Card image cap" onClick={() => this.setState({image: value.images[1].image})}/>
                                                </div>
                                                <div className ='col-4'>
                                                    <img className="card-img-top" src={value.images[2].image} alt="Card image cap" onClick={() => this.setState({image: value.images[2].image})}/>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className="card-title">{value.brand}</h5>
                                                    <h5 className="card-title">Rp{value.price}</h5>
                                                </div>
                                                <h6 className="card-title mt-n2">{value.name}</h6>
                                                <p className="card-title" style={{fontSize: 14}}>{value.stock} Stok Tersedia</p>
                                                

                                                
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}