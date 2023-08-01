import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4 bg-dark mt-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase fw-blod text-white">Our Sponsors</h5>
                <p className='text-white'>Our foods are aprreciated worldwide.Hope you enjoy it.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase fw-bold text-white">Contact Us</h5>
                <ul className="list-unstyled">
                    <li className='text-white'>Facebbok</li>
                    <li className='text-white'>Instagram</li>
                    <li className='text-white'>Twitter</li>
                    <li className='text-white'>Whatsapp</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase fw-bold text-white">Order By</h5>
                <ul className="list-unstyled">
                <li className='text-white'>Call</li>
                    <li className='text-white'>Email</li>
                    <li className='text-white'>Message</li>
                  
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">© 2023 Copyright: of my website.

    </div>

</footer>

              
        </div>
    );
};

export default Footer;