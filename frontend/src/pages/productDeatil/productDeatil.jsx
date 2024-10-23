import React, { useContext, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import rateIcon from './rating.png'
import './productDeatil.css'
import { assets } from "../../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { food_list, url,addToCart } = useContext(StoreContext);
  
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description,setDescription] = useState("")
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchProductData = async () => {
    const foundItem = food_list.find((item) => item._id === productId);
    if (foundItem) {
      setProductData(foundItem);
      setImage(foundItem.image);
      setPrice(foundItem.price);
      setName(foundItem.name);
      setDescription(foundItem.description);
    } // Handle case where product not found
  };

  const filterItemsByCategory = () => {
    if (productData) {
      const filteredList = food_list.filter(
        (item) => item.category === productData.category
      );
      setFilteredItems(filteredList);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId,food_list]);

  useEffect(() => {
    filterItemsByCategory();
  }, [productData,food_list]);
  

  return productData ? (

    <div className="container">
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
          <img src={`${url}/images/` + image} style={{height:400, width:"100%"}} alt="" />
          <div className="small-img-row">

            <div className="small-img-col">
              
              <img src={`${url}/images/` + productData.image}  alt="" />
            </div>
            <div className="small-img-col">
              <img src={`${url}/images/` + productData.image}  alt="" />
            </div>
            <div className="small-img-col">
              <img src={`${url}/images/` + productData.image}  alt="" />
            </div>
            <div className="small-img-col">
              <img src={`${url}/images/` + productData.image}  alt="" />
            </div>
          </div>
          </div>
          <div className="col-2">
            <p>Home / {name}</p>
            <h1>{productData.name}</h1>
            <h4>Price: {price} Birr</h4>
            <select >
              <option value="">Select Gram</option>
              <option value="">100kg</option>
              <option value="">500g</option>
              <option value="">100g</option>
            </select>
            <input type="number" min={1} defaultValue={1}/>
            <a href="#" className="btn">Add TO Cart</a>
            <h3>Product Details</h3>
            <br/>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="small-container">
            <div className="row row-2">
            <h3>Related Items <span >({filteredItems.length})</span></h3>
            <Link to="/products"><p>Veiw More</p></Link>
            </div>
          </div>
    {filteredItems.length > 0 ? (
      <div className="small-container">
        
        <div className="row">
        {filteredItems.map((item, index) => (
              <div className="col-4" key={index}>
                <Link to={`/product/${item._id}`}>
                  <img
                    src={`${url}/images/` + item.image}
                    style={{ height: 300, width: '100%' }}
                    alt=""
                  />
                  <div className="food-item-name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
                  <p>{item.price} Birr</p>
                </Link>
              </div>
            ))}
        </div>
      </div> 
      ): (
        <p>No related items found in this category.</p>
      )}

    </div>

    /* footer */
    
  ) : (
    <div></div>
  );
};

export default Product;
