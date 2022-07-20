import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import {useParams} from 'react-router-dom';

const Product = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[id]);

    const Loading = ({ type, color }) => {
        return <>
            <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
        </>;
    }

    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
               <p className='d-flex'>
               <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
                <NavLink to="/cart" className='btn btn-dark text-light ms-2 px-3 py-2'>Go to Cart</NavLink>
               </p>
                
            </div>
            </>
        )
    }

    return (
        <div>
           <div className="container">
            <div className="row">
                {loading? <Loading/>: <ShowProduct />}
            </div>
           </div>
        </div>
    );
};

export default Product;