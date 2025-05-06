import Header from "../header/Header"
import "./styles/ProductDetailsPage.css";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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

const ProductDetailsPage: React.FC = () => {
    const location = useLocation();
    const [displayShades, setDisplayShades] = useState(false);
    const [displayRetailers, setDisplayRetailers] = useState(false);

    const product = location.state?.product;
    
    const handleToggleShades = () => {
        setDisplayShades(!displayShades);
    }

    const handleToggleRetailers = () => {
        setDisplayRetailers(!displayRetailers);
    }

    return (
        <>
            <div className="product-information">
                <div className="images-container">
                    <img src={product.mainImageUrl} className="image"/>
                </div>
                <div className="shade-retailer-container">
                    <div className="product-heading">
                        {product.brand} - {product.name}
                    </div>
                    <div className="product-price">
                        ${product.price} CAD
                    </div>
                    <div className="shades">
                        <details onToggle={handleToggleShades}>
                            <summary className="shade-text">Shades</summary>
                        </details>
                    </div>
                    <div className="retailers">
                        <details onToggle={handleToggleRetailers}>
                            <summary className="retailer-text">Retailers</summary>
                        </details>
                    </div>
                    <div className="list-container">
                        <div style={{ visibility: displayShades ? 'visible' : 'hidden' }}>
                            {displayShades && (
                                <div className="shade-list"> 
                                    {product.shades.map((shade: ShadeDto) => (
                                        <div key={shade.hexcode} className="shade-item">
                                            ❀  {shade.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {displayRetailers && (
                            <div className="retailer-list">
                                {product.retailers.map((retailer: RetailerDto) => (
                                    <div key={`${retailer.name}-${retailer.price}`} className="retailer-item">
                                        ❀ {retailer.name} ${retailer.price} | Shipping: ${retailer.shippingPrice}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>    
                </div>
            </div>
            <Header></Header>
        </>
    )
} 

export default ProductDetailsPage;