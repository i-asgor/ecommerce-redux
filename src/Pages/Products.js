import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    },[]);

    const Loading = ({ type, color }) => {
        return <>
            <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
        </>;
    }

    const filterProduct = (list) => {
        const updatedData = data.filter((a)=>a.category === list);
        setFilter(updatedData);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("child's clothing")}>Child's Clothing</button>
                    <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product)=>{
                    return(
                        <>
                        <div className="col-md-3 mb-4 lead fw-bold">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                            <div class="card-body">
                                <h5 class="card-title">{product.title.substring(0,12)}...</h5>
                                <p class="card-text">
                                    ${product.price}
                                </p>
                                <a href="#" class="btn btn-outline-dark">
                                    Buy Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </>
        );
    }

    return (
        <div>
            <div className="container my-2 py-2">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-4 fw-bolder text-center'>Latest</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading />: <ShowProducts /> }
                </div>
            </div>
        </div>
    );
};

export default Products;