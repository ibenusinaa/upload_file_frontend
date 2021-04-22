import axios from 'axios'
import React from 'react'
import { AddDataModal } from './../Components/AddDataModal'
export default class LandingPage extends React.Component{

    state = {
        data: null,
        imageSelected: null
    }

    componentDidMount(){
        this.onGetData()
    }

    onGetData = () => {
        axios.get('http://localhost:5000/products')
        .then((res) => {
            console.log(res)

            let imageSelected = []
            res.data.data.forEach((value, index) => {
                imageSelected.push(value.images[0])
            })
            this.setState({data: res.data.data, imageSelected: imageSelected})
            console.log(imageSelected)
            
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
                            ADMIN
                        </h3>
                    </div>
                    <div className='my-2 mx-4'>
                        <AddDataModal />
                    </div>
                    <hr className='col-12'/>

                    {/* layout Card */}
                    <div className ='row'>
                        {
                            this.state.data.map((value, index) => {
                                return(
                                    <div className='col-3'>
                                        {/* Cardnya */}
                                        <div className="card" style={{width: '18rem'}}>
                                            {/* Image Card Utama */}
                                            <img className="card-img-top" src={this.state.imageSelected[index].image} alt={this.state.imageSelected[index].image} sytle={{width: 300, height:240}}/>
                                            <div className='row mt-2'>
                                                {/* Image card yang kecil kecil */}
                                                {
                                                    value.images.map((val, ind) => {
                                                        return(
                                                            <div className ='col-4'>
                                                                <img className="card-img" src={val.image} alt={val.image} 
                                                                     onClick={() => {
                                                                         let imageSelected = this.state.imageSelected
                                                                         imageSelected[index] = val
                                                                         this.setState({imageSelected: imageSelected})
                                                                     }}
                                                                     />
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                            {/* Detail Produk */}
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