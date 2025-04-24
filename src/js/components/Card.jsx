const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 py-4 g-4">
            <div className="col">
                <div class="card h-100 rounded">
                    <img src="https://picsum.photos/200/150?random=1" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Random Image 1</h5>
                        <p className="card-text text-center">This is a random picture number one and his origin is the web page lorem picsum.</p>
                    </div>
                    <hb></hb>
                    <div className="card-footer d-flex justify-content-center">
                        <a className="btn btn-primary btn-lg w-auto text-center fs-6" href="#" role="button">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 rounded">
                    <img src="https://picsum.photos/200/150?random=2" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Random Image 2</h5>
                        <p className="card-text text-center">This is a random picture number two and his origin is the web page lorem picsum.</p>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <a className="btn btn-primary btn-lg w-auto text-center fs-6" href="#" role="button">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 rounded">
                    <img src="https://picsum.photos/200/150?random=3" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Random Image 3</h5>
                        <p className="card-text text-center">This is a random picture number three and his origin is the web page lorem picsum.</p>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <a className="btn btn-primary btn-lg w-auto text-center fs-6 justify-content-center" href="#" role="button">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 rounded">
                    <img src="https://picsum.photos/200/150?random=4" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Random Image 4</h5>
                        <p className="card-text text-center">This is a random picture number four and his origin is the web page lorem picsum.</p>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <a className="btn btn-primary btn-lg w-auto text-center fs-6 justify-content-center" href="#" role="button">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;