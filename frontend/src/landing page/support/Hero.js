import React from 'react';

function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>

            <div className='row px-5'>
                <div className='col-6 p-3' id='supportContent'>
                    <p className='fs-5 mb-4'>Search for an answer or browse help topics to create a ticket</p>
                    
                    <div className="search-input">
                        <input placeholder='Eg: how do I activate F&O, why is my order getting rejected....' />
                    </div>

                    <div className="quick-links mt-4">
                        <a href=''>Track account opening</a>     
                        <a href=''>Track segment activation</a> 
                        <a href=''>Intraday margins</a>
                        <a href=''>Kite user manual</a>
                    </div>
                </div>

                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol className='featured-links'>
                        <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                        <li><a href=''>Rights Entitlements listing in April 2025</a></li>
                    </ol>
                </div>
            </div>
       </section>
     );
}

export default Hero;
