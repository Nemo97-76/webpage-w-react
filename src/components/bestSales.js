import React from "react"
import "bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/style-sheet.css"
import sale1 from "../images/1.jpg"
import sale2 from "../images/2.jpg"
import sale3 from "../images/3.jpg"
import sale4 from "../images/4.jpg"
import sale5 from "../images/5.jpg"
import sale6 from "../images/6.jpg"
import ModalImage from "react-modal-image"
const BestSales = () => {
    return (
        <>
            <h2 className="heading" >Best Sales</h2>
            <div className="container-fluid">
                <div className=" row  mx-auto mt-5">

                    <div className="row mt-5" style={{ justifyContent: "space-evenly", width: "80%", margin: "auto" }}>
                        <div className="card mt-2" style={{ width: "18rem" }}>
                            <ModalImage small={sale1} className="card-img-top pt-5" medium={sale1} hideDownload={true} hideZoom={true} />
                            <div className="card-body">
                                <h5 className="card-title">decoration</h5>
                                <p className="card-text">decorate your place</p>
                                <i className="fas fa-star d-inline text-warning"></i><i className="fas fa-star d-inline text-warning"></i><i
                                    className="fas fa-star d-inline text-warning"></i><i className="fas fa-star-half-alt d-inline text-warning"></i><i
                                        className="far fa-star d-inline text-warning"></i>
                                <span className="btn btn-primary d-block">Buy Now</span>
                            </div>
                        </div>

                        <div className="card mt-2" style={{ width: "18rem" }}>
                            <ModalImage small={sale2} className="card-img-top pt-5" medium={sale2} hideDownload={true} hideZoom={true} />
                            <div className="card-body">
                                <h5 className="card-title">embroidered shirt</h5>
                                <p className="card-text">grey shirt</p>
                                <i className="fas fa-star d-inline text-warning"></i><i className="fas fa-star d-inline text-warning"></i><i
                                    className="fas fa-star d-inline text-warning"></i><i className="fas fa-star-half-alt d-inline text-warning"></i><i
                                        className="far fa-star d-inline text-warning"></i>
                                <span className="btn btn-primary d-block">Buy Now</span>
                            </div>
                        </div>

                        <div className="card mt-2" style={{ width: "18rem" }}>
                            <ModalImage small={sale3} className="card-img-top pt-5" medium={sale3} hideDownload={true} hideZoom={true} />
                            <div className="card-body">
                                <h5 className="card-title">embroidered shoes</h5>
                                <p className="card-text">stylish shose</p>
                                <i className="fas fa-star d-inline text-warning"></i><i className="fas fa-star d-inline text-warning"></i><i
                                    className="fas fa-star d-inline text-warning"></i><i className="fas fa-star-half-alt d-inline text-warning"></i><i
                                        className="far fa-star d-inline text-warning"></i>
                                <span className="btn btn-primary d-block">Buy Now</span>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 mb-5" style={{ justifyContent: "space-evenly", width: "80%", margin: "auto" }}>
                        <div className="card mt-2 " style={{ width: "18rem" }}>
                            <ModalImage small={sale4} className="card-img-top pt-5" medium={sale4} hideDownload={true} hideZoom={true} />
                            <div className="card-body">
                                <h5 className="card-title">special gift</h5>
                                <p className="card-text">embroidered necklace</p>
                                <i className="fas fa-star d-inline text-warning"></i><i className="fas fa-star d-inline text-warning"></i><i
                                    className="fas fa-star d-inline text-warning"></i><i className="fas fa-star-half-alt d-inline text-warning"></i><i
                                        className="far fa-star d-inline text-warning"></i>
                                <span className="btn btn-primary d-block">Buy Now</span>
                            </div>
                        </div>

                        <div className="card mt-2" style={{ width: "18rem" }}>
                            <ModalImage small={sale5} className="card-img-top pt-5" medium={sale5} hideDownload={true} hideZoom={true} />
                            <div className="card-body">
                                <h5 className="card-title">embroidered Name</h5>
                                <p className="card-text">embroider your name</p>
                                <i className="fas fa-star d-inline text-warning"></i><i className="fas fa-star d-inline text-warning"></i><i
                                    className="fas fa-star d-inline text-warning"></i><i className="fas fa-star-half-alt d-inline text-warning"></i><i
                                        className="far fa-star d-inline text-warning"></i>
                                <span className="btn btn-primary d-block">Buy Now</span>
                            </div>
                        </div>

                        <div className="card mt-2" style={{ width: "18rem" }}>
                            <ModalImage small={sale6} className="card-img-top pt-5" medium={sale6} hideDownload={true} hideZoom={true} />
                            <div className="card-body">
                                <h5 className="card-title">embroidered shirt</h5>
                                <p className="card-text">stylish shose</p>
                                <i className="fas fa-star d-inline text-warning"></i><i className="fas fa-star d-inline text-warning"></i><i
                                    className="fas fa-star d-inline text-warning"></i><i className="fas fa-star-half-alt d-inline text-warning"></i><i
                                        className="far fa-star d-inline text-warning"></i>
                                <span className="btn btn-primary d-block">Buy Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blank2 mt-5 bg-danger"></div>
        </>
    )
}
export default BestSales