import Header from "../header/Header"
import './styles/ProductsPage.css';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface MakeupProductDto {
    name: string,
    type: string, 
    brand: string,
    price: number,
    priceRange: string, 
    country: string
}

const ProductsPage: React.FC = () => {

    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState<MakeupProductDto[]>([]);

    const category = searchParams.get("category");
    const search = searchParams.get("search");

    useEffect(() => {

        console.log("Category: " + category);
        console.log("Search word: " + search);

        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/${category}?${category}=${search}`)
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Fetch error");
            }
        };

        fetchProducts();
    }, [category, search]);

    // const productContainers = [];
    // const numOfProducts = products.length;
    
    // for (let i = 0; i < numOfProducts; i++) {
    //     productContainers.push(
    //         <div className="product-container">
    //             <img src="public\judydoll-highlighter-contour.webp"/>
    //                 <div className="text-container">
    //                     {products[1]?.brand} - {products[1]?.name}
    //                     <div className="price">
    //                         CAD ${products[1]?.price}
    //                     </div>
    //                 </div>   
    //         </div>
    //     )
    // }

    return (
        <div>
            {/* <pre style={{background: "#eee", padding: "1rem", borderRadius: "5px"}}>
                {JSON.stringify(products, null, 2)}
            </pre> */}
            <div className="product-list">
                {products.map((product) => (
                    <div key={`${product.name}-${product.country}`} className="product-container">
                        <img src="public\judydoll-highlighter-contour.webp"/>
                        <div className="product-name">
                            {product.brand} - {product.name}
                        </div>   
                        <div className="price">
                            CAD ${product.price}
                        </div>
                </div>
                ))}
            </div>
            <Header></Header>
        </div>

    )
}

export default ProductsPage;