import Header from "../header/Header"
import './styles/ProductsPage.css';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

interface ShadeDto {
    name: string,
    hexcode: string,
    imageUrl: string
}

interface RetailerDto {
    name: string,
    price: number,
    shippingPrice: number
}

interface MakeupProductDto {
    name: string,
    type: string, 
    brand: string,
    price: number,
    priceRange: string, 
    country: string,
    shades: ShadeDto[],
    retailers: RetailerDto[],
    mainImageUrl: string
}

const ProductsPage: React.FC = () => {

    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState<MakeupProductDto[]>([]);
    const navigate = useNavigate();

    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const handleClickProduct = (product: MakeupProductDto) => {
       navigate(`/products/${product.name}`, {state: {product}})
    }

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

    return (
        <div>
            {/* <pre style={{background: "#eee", padding: "1rem", borderRadius: "5px"}}>
                {JSON.stringify(products, null, 2)}
            </pre> */}
            <div className="product-list">
                {products.map((product) => (
                    <div key={`${product.name}-${product.country}`}>
                        <div className="product-container" key={product.name} onClick={() => handleClickProduct(product)}>
                            <img src={product.mainImageUrl} className="images"/>
                            <div className="product-name">
                                {product.brand} - {product.name}
                            </div> 
                            <div className="price">
                                CAD ${product.price}
                            </div>
                        </div>  
                    </div>
                ))}
            </div>
            <Header></Header>
        </div>

    )
}

export default ProductsPage;