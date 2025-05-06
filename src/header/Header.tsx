import './Header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () =>  {
    const [query, setQuery] = useState("");
    const [productList, setProductList]  = useState(false);
    const [priceList, setPriceList] = useState(false);
    const [countryList, setCountryList] = useState(false);

    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate("/");
    }

    const handleSearch = (category: string, search: string, event: { key: string; }) => {
        if (event.key === 'Enter') {
            navigate(`/products?category=${category}&search=${search}`)
        }
    }

    const handleClickCategory = (category: string, search: string) => {
        navigate(`/products?category=${category}&search=${search}`);
    }

    const handleToggleProductList = () => {
        setProductList(!productList);
    } 

    const handleTogglePriceList = () => {
        setPriceList(!priceList);
    }

    const handleToggleCountryList = () => {
        setCountryList(!countryList);
    }

    return (
    <>
    <div className="header">
        <button className="title" onClick={handleClickLogo}>
            My Makeup Database 💕
        </button>
        <div >
            <input 
                className="search-box" 
                placeholder="Search"
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => handleSearch("search", query, event)}
            />
        </div>
        <button className="heading-1">
            My Collection
        </button>
        <button className="heading-2">
            Find by Shade
        </button>
        
    </div>

    <div className="sub-header">
        <div className="categories">
            <details onToggle={handleToggleProductList}>
                <summary>Product Type</summary>
            </details>
            <details onToggle={handleTogglePriceList}>
                <summary>Brand Price Range</summary>
            </details>
            <details onToggle={handleToggleCountryList}>
                <summary>Country of Brand</summary>
            </details>      
        </div>
    </div>

     {/* Product List */}
    {productList && (
        <div className="list">
            <div className="list-container-face">
                <button className="list-heading">Face</button>
                <hr></hr>
                <div className="column-1">
                    <button onClick={() => handleClickCategory("type", "foundation")}>❀ Foundation</button>
                    <button onClick={() => handleClickCategory("type", "concealer")}>❀ Concealer</button>
                    <button onClick={() => handleClickCategory("type", "powder")}>❀ Powder</button>
                    <button onClick={() => handleClickCategory("type", "blush")}>❀ Blush</button>
                    <button onClick={() => handleClickCategory("type", "highlighter")}>❀ Highlighter</button>
                </div>
                <div className="column-2">
                    <button onClick={() => handleClickCategory("type", "contour")}>❀ Contour</button>
                    <button onClick={() => handleClickCategory("type", "bronzer")}>❀ Bronzer</button>
                </div>  
            </div>
            <div className="list-container-lip">  
                <button className="list-heading">Lip</button>
                <hr></hr>
                <button onClick={() => handleClickCategory("type", "liptint")}>❀ Lip Tint</button>
                <button onClick={() => handleClickCategory("type", "lipstick")}>❀ Lipstick</button>
                <button onClick={() => handleClickCategory("type", "lipliner")}>❀ Lip Liner</button>
            </div>
            <div className="list-container-eye">
                <button className="list-heading">Eye</button>
                <hr></hr>
                <button onClick={() => handleClickCategory("type", "eyeshadow")}>❀ Eyeshadow</button>
                <button onClick={() => handleClickCategory("type", "eyebrow")}>❀ Eyebrow</button>
                <button onClick={() => handleClickCategory("type", "eyeliner")}>❀ Eyeliner</button>
                <button onClick={() => handleClickCategory("type", "mascara")}>❀ Mascara</button>
            </div>
        </div>
    )}

    {/* Price List */}
    {priceList && (
        <div className="list">
            <div className="list-container-drugstore">
                <button className="list-heading">Drugstore</button>
                <hr></hr>
                <div className="column-1">
                    <button onClick={() => handleClickCategory("brand", "nyx")}>❀ NYX</button>
                    <button onClick={() => handleClickCategory("brand", "elf")}>❀ E.L.F Cosmetics </button>
                    <button onClick={() => handleClickCategory("brand", "maybelline")}>❀ Maybelline</button>
                    <button onClick={() => handleClickCategory("brand", "l'oreal paris")}>❀ L'Oréal Paris</button>
                    <button onClick={() => handleClickCategory("brand", "revlon")}>❀ Revlon</button>
                    <button onClick={() => handleClickCategory("brand", "covergirl")}>❀ Covergirl</button>
                </div>
                <div className="column-2">
                    <button onClick={() => handleClickCategory("brand", "milani")}>❀ Milani</button>
                    <button onClick={() => handleClickCategory("brand", "rimmel london")}>❀ Rimmel London</button>
                    <button onClick={() => handleClickCategory("brand", "essence")}>❀ Essence</button>
                </div>  
            </div>
            <div className="list-container-highend"> 
                <button className="list-heading">High-end</button>
                <hr></hr>
                <div className="column-1">
                    <button onClick={() => handleClickCategory("brand", "charlotte tilbury")}>❀ Charlotte Tilbury</button>
                    <button onClick={() => handleClickCategory("brand", "fenty beauty")}>❀ Fenty Beauty</button>
                    <button onClick={() => handleClickCategory("brand", "lancome")}>❀ Lancôme</button>
                    <button onClick={() => handleClickCategory("brand", "tarte cosmetics")}>❀ Tarte Cosmetics </button>
                    <button onClick={() => handleClickCategory("brand", "rare beauty")}>❀ Rare Beauty</button>
                    <button onClick={() => handleClickCategory("brand", "haus lab")}>❀ Haus Lab</button>
                </div>
                <div className="column-2">
                    <button onClick={() => handleClickCategory("brand", "dior")}>❀ Dior</button>
                    <button onClick={() => handleClickCategory("brand", "chanel")}>❀ Chanel</button>
                    <button onClick={() => handleClickCategory("brand", "huda beauty")}>❀ Huda Beauty</button>
                    <button onClick={() => handleClickCategory("brand", "nars")}>❀ NARS</button>
                    <button onClick={() => handleClickCategory("brand", "glossier")}>❀ Glossier</button>
                    <button onClick={() => handleClickCategory("brand", "kosas")}>❀ Kosas</button>
                </div>  
            </div>
        </div>
    )}

    {/* Country List */}
    {countryList && (
        <div className="list">
            <div className="list-container-americas">
                <button className="list-heading">Americas</button>
                <hr></hr>
                <div className="column-1">
                    <button onClick={() => handleClickCategory("country", "united states")}>❀ United States</button>
                    <button onClick={() => handleClickCategory("country", "canada")}>❀ Canada</button>
                </div>
            </div>
            <div className="list-container-europe">
                <button className="list-heading">Europe</button>
                <hr></hr>
                <div className="column-1">
                    <button onClick={() => handleClickCategory("country", "france")}>❀ France</button>
                    <button onClick={() => handleClickCategory("country", "united kingdom")}>❀ United Kingdom</button>
                    <button onClick={() => handleClickCategory("country", "switzerland")}>❀ Switzerland</button>
                    <button onClick={() => handleClickCategory("country", "germany")}>❀ Germany </button>
                    <button onClick={() => handleClickCategory("country", "spain")}>❀ Spain</button>
                </div>
            </div>
            <div className="list-container-asia">
                <button className="list-heading">Asia</button>
                <hr></hr>
                <div className="column-1">
                    <button onClick={() => handleClickCategory("country", "south korea")}>❀ South Korea</button>
                    <button onClick={() => handleClickCategory("country", "china")}>❀ China</button>
                    <button onClick={() => handleClickCategory("country", "japan")}>❀ Japan</button>
                </div>  
            </div>
        </div>
    )}

    </>

    );
    
}

export default Header;