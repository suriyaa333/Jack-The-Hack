import react, { Component } from "react";
import Reactdom from "react-dom";
import {  Container, Row, Col, Button, Figure, Card,Dropdown} from "react-bootstrap";

import "./style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Dish from "./Dish"
import Products from "./Products";

import React from 'react';


var a=[];
const responsive = {
    superLargeDesktop: {
    
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class Dutyfree extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            style1:"null",
            style2:"null",
            style3:"null",
            style4:"null",
            selectedcatogary:"cosmetics",
            products:Products,
            cart:a,
            canpurchase:0

        };
    }
    render(){
        var res=0;
        var f=()=>{
            if(this.state.canpurchase===1)
            return(
            <Container>
                <div class="page payment-page">
                <div class="payment-form dark">
                  <div class="container">
                    <div class="block-heading">
                      <h2>Payment</h2>
                      <p>Thank you for shopping with our duty free service, your items will meet you at gate 6 in Terminal 2 to be collected before departure.</p>
                    </div>
                    <form>
                  <div class="products">
                    <h3 class="title">Checkout</h3>
               { this.state.cart.map((d)=>{
                   res+=d.price;
                    return (
                <div class="item">
                            <span class="price">Rs {d.price}</span>
                            <p class="item-name">{d.name}</p>
                            <p class="item-description">{d.desc}</p>
                            </div>
                    );
                })}
                 <div class="total">Total<span class="price">{res}</span></div>

                 <div class="card-details">
            <h3 class="title">Credit Card Details</h3>
            <div class="row">
              <div class="form-group col-sm-7">
                <label for="card-holder">Card Holder</label>
                <input id="card-holder" type="text" class="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div class="form-group col-sm-5">
                <label for="">Expiration Date</label>
                <div class="input-group expiration-date">
                  <input type="text" class="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                  <span class="date-separator">/</span>
                  <input type="text" class="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div class="form-group col-sm-8">
                <label for="card-number">Card Number</label>
                <input id="card-number" type="text" class="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div class="form-group col-sm-4">
                <label for="cvc">CVC</label>
                <input id="cvc" type="text" class="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div class="form-group col-sm-12">
                <button type="button" class="btn btn-primary btn-block">Proceed</button>
              </div>
            </div>

                </div>
                
          </div>
          </form>
          </div>

                </div>
                </div>

                </Container>
               
            );
            else
            return <div></div>
       }
        return(
            <>
             <Container fluid className="Dinecontainer">
                 <Row>
                     <Col md={6} style={{backgroundColor:"#345B63"}}>
                        <h1 className="dutytext" style={{marginTop:"20%"}}>Shop with ease,have products delivered to your gate</h1>
                         </Col>
            <Col md={6} style={{overflow:"hidden",marginLeft:"-15px"}}>
            <img src="https://i.pinimg.com/564x/73/47/93/73479367aa03dab1144cd2f1d1940ffb.jpg" className="Dineimg2"/>
            </Col>
            </Row>
            </Container>
            <Container fluid style={{backgroundColor:"#D4ECDD",padding:"50px"}}>
            
                <Row>
                    <Col style={{textAlign:"center"}} md={3}>
                    <i style={{marginBottom:"20px"}} className="fas fa-3x fa-utensils"></i>
                    <p>BEST CUISINE</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.ullamcorper diam nec augue semper, in dignissim.</p>
                    </Col>
                    <Col style={{textAlign:"center"}} md={3}>
                    <i style={{marginBottom:"20px"}} className="fas fa-3x fa-glass-martini"></i>
                    <p>SPECIAL OFFERS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.ullamcorper diam nec augue semper, in dignissim.</p>
                   
                    </Col>
                    <Col style={{textAlign:"center"}} md={3}>
                    <i style={{marginBottom:"20px"}} className="fas fa-3x fa-wine-bottle"></i>
                    <p>GOOD REST</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.ullamcorper diam nec augue semper, in dignissim.</p>
                   
                    </Col>
                    <Col style={{textAlign:"center"}} md={3}>
                    <i style={{marginBottom:"20px"}} className="fas fa-3x fa-coffee"></i>
                    <p>TIMINGS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.ullamcorper diam nec augue semper, in dignissim.</p>
                   
                    </Col>
                    
                </Row>
            </Container>
            <Container className="dutytext" style={{padding:"20px"}}>
                <h1 style={{fontSize:"2rem"}}>Choose Your Category</h1>
            </Container>
            <Container >
              <Carousel responsive={responsive}>
                    <div className="carouselsmalldiv">
                    <Card style={{ width: '15rem' },{height:"16rem"},{border:"none"}}>
                    <Card.Img className={this.state.style1} variant="top" src=" https://wallpapercave.com/wp/wp1879435.jpg" 
                    onClick={async ()=> {
                        await this.setState({style1:"changecolor"})
                        await this.setState({style2:"null"})
                        await this.setState({style3:"null"})
                        await this.setState({style4:"null"})
                        await this.setState({selectedcatogary:"perfume"})
                    
                    }}/>
                    </Card></div>
                    <div className="carouselsmalldiv">
                    <Card style={{ width: '15rem' },{height:"16rem"},{border:"none"}}>
                    <Card.Img className={this.state.style2} variant="top" src="https://c4.wallpaperflare.com/wallpaper/537/248/912/glass-bottle-4k-red-wine-wallpaper-preview.jpg" 
                    onClick={async ()=> {
                        await this.setState({style1:"null"})
                        await this.setState({style2:"changecolor"})
                        await this.setState({style3:"null"})
                        await this.setState({style4:"null"})
                        await this.setState({selectedcatogary:"liquor"})
                    
                    }}/>
                    </Card></div>
                  
                    <div className="carouselsmalldiv">
                    <Card style={{ width: '15rem' },{height:"16rem"},{border:"none"}}>
                    <Card.Img className={this.state.style3} variant="top" src="https://wallpaperaccess.com/full/1190372.jpg" 
                    onClick={async ()=> {
                        await this.setState({style1:"null"})
                        await this.setState({style2:"null"})
                        await this.setState({style3:"changecolor"})
                        await this.setState({style4:"null"})
                        await this.setState({selectedcatogary:"cosmetics"})
                    
                    }}/>

                    </Card></div> 
                   
                    <div className="carouselsmalldiv">
                    <Card style={{ width: '15rem' },{height:"16rem"},{border:"none"}}>
                    <Card.Img className={this.state.style4} variant="top" src="https://i.pinimg.com/originals/41/76/f3/4176f363d9522d08867d5877e908e867.jpg" 
                    onClick={async ()=> {
                        await this.setState({style1:"null"})
                        await this.setState({style2:"null"})
                        await this.setState({style3:"null"})
                        await this.setState({style4:"changecolor"})
                        await this.setState({selectedcatogary:"confectionary"})
                    
                    }}/>
                    </Card></div>
                    
                </Carousel>
                </Container>
                
                <Container className="mt-5" >
                <div >
                    <h1 className="dishstyle mr-5" style={{textAlign:"left", display:"inline"}}>Showing Top Result of {this.state.selectedcatogary[0].toUpperCase() + this.state.selectedcatogary.slice(1)} Products</h1>
                   
                    
                    <i className="fas fa-2x fa-shopping-cart" style={{position:"absolute",right:"80px"}}></i>
                    <span class='badge badge-warning' style={{position:"absolute",right:"80px"}} id='lblCartCount'>{this.state.cart.length}</span>
                </div>
                    <Row> 
                       {this.state.products.filter((d)=>d.category===this.state.selectedcatogary).map((d)=>{
                           return <Col md={4} style={{marginTop:"30px"}}> <Dish  dish={d}  clickk={async (n)=>{
                               var c=this.state.cart;
                               c.push(d);
                              await this.setState({cart:c});
    
                           }} /></Col>
                       })}
                    </Row>
                    <div style={{textAlign:"center"}}>
                    <Button href="#bill" onClick={async ()=>{
                     await  this.setState({canpurchase:1})
                    }}>Checkout</Button>
                    </div>
                </Container>
               <Container style={{marginTop:"100px"}} id="bill">
                   {f()}
               </Container>

            </>
        );
    }
}
export default  Dutyfree;