import React from "react";
// import "../styles/Home.css";

function DataHome() {

    return (
    <section class="tp-banner">
        <h2><img src="tp-icon.png" style="height: 110px; width: 150px;" />TP-Express</h2>
        <h7 class="brand-slogan">We can find you your TP!</h7>
        <form class="form-inline my-2 my-lg-0">
            <a>
            <input class="form-control mr-sm-2" type="search" placeholder="Search brand" aria-label="Search"/>
            </a>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>  
    </section>
    <span class="brand-cards">
        <div class="card" style="width: 18rem;">
                   <a>
                   <img class="card-img-top" src="tp-icon.png" alt="Card image cap" aria-placeholder="Brand image here"/>
                   </a>
            <div class="card-body">
                           <h5 class="card-title">Toilet Paper product title</h5>
                           <p class="card-text">Company Title of toilet paper brand</p>
            </div>
                       <ul class="list-group list-group-flush">
                           <li class="list-group-item">Price From Walmart</li>
                           <li class="list-group-item">Price From Target</li>
                           <li class="list-group-item">Price From Amazon</li>
                       </ul>
            <div class="card-body">
                           <a href="#" class="card-link">Show in map</a>
                           <a href="#" class="card-link">Add to wishlist</a>
            </div>
        </div>
    </span>
            <span class="brand-cards">
            <div class="card" style="width: 18rem;">
                <a>
                    <img class="card-img-top" src="tp-icon.png" alt="Card image cap" aria-placeholder="Brand image here"/>
                </a>
                    <div class="card-body">
                            <h5 class="card-title">Toilet Paper product title</h5>
                            <p class="card-text">Company Title of toilet paper brand</p>
                </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price From Walmart</li>
                            <li class="list-group-item">Price From Target</li>
                            <li class="list-group-item">Price From Amazon</li>
                        </ul>
                <div class="card-body">
                            <a href="#" class="card-link">Show in map</a>
                            <a href="#" class="card-link">Add to wishlist</a>
                </div>
            </div>
        </span>
        <span class="brand-cards">
            <div class="card" style="width: 18rem;">
                <a>
                                <img class="card-img-top" src="tp-icon.png" alt="Card image cap" aria-placeholder="Brand image here"/>
                </a>
                <div class="card-body">
                                        <h5 class="card-title">Toilet Paper product title</h5>
                                        <p class="card-text">Company Title of toilet paper brand</p>
                </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Price From Walmart</li>
                                        <li class="list-group-item">Price From Target</li>
                                        <li class="list-group-item">Price From Amazon</li>
                                    </ul>
                <div class="card-body">
                                        <a href="#" class="card-link">Show in map</a>
                                        <a href="#" class="card-link">Add to wishlist</a>
                </div>
             </div>
        </span>

  );
}
export default DataHome;


/***********************************88
 * 
 * 
 * 
 
 


 * 
 * 
 */