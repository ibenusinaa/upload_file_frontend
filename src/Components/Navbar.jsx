import React from 'react'

export default class Navbar extends React.Component{
    render(){
        return(
            <div className='bg-primary'>
                <div className="container">
                    <div className="d-flex">
                        <div>
                            <h6 className ='text-white my-2'>
                                UploadFile_FrontEnd
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}