import React from 'react';

function Universe() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaseLogo.png"></img>
                <p className='text-muted text-small'>Thematic investing platform</p>
                </div>

                <div className='col-4 p-3 mt-5'><img src="media/streakLogo.png" style={{width:"40%"}}></img>
                <p className='text-muted text-small'>Algo & strategy platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                <img src="media/sensibullLogo.svg" style={{width:"40%"}}></img>
                <p className='text-muted text-small'>Options trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/zerodhaFundhouse.png" style={{width:"40%"}}></img>
                <p className='text-muted text-small'>Asset management</p>
                </div>

                <div className='col-4 p-3 mt-5'><img src="media/goldenpiLogo.png"></img>
                <p className='text-muted text-small'>Bonds trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                <img src="media/dittoLogo.png" style={{width:"35%"}}></img>
                <p className='text-muted text-small'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Universe;