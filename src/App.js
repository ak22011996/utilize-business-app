import React from 'react';
import logo from './logo.svg';
import './App.css';
import data1 from './data.json'; 
import GoogleLogin from 'react-google-login';

export default class App extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				customerOrderData : data1
			}
			
	}
	responseGoogle = (response) => {
		  console.log(response);
		  document.getElementById('loginPage').style.display='block'; 
	}
	afterLoginPage = () => {
		console.log("AKS  afterLoginPage");
		document.getElementById('loginPage').style.display='none'; 
		document.getElementById('boxId').style.display='block';
	}
	saveNewOrder = () => {
		let id = document.getElementById("orderID").value;
	    let customer_name = document.getElementById("nameId").value;
		let customer_email = document.getElementById("emailId").value;
		let product = document.getElementById("productId").value;
		let quantity = document.getElementById("quantityId").value;
		var orderDetail={
			id:id,
			customer_name: customer_name,
			customer_email: customer_email,
			product: product,
			quantity: quantity
		};
		this.state.customerOrderData.push(orderDetail);
		document.getElementById("orderIdDiv").style.display="none";
		alert("Order created successfully");
	}
	showOrderList = () => {
		this.setState({ loading: true });
		document.getElementById("orderIdDiv").style.display="none";
		document.getElementById("showOrderId").style.display="block";
	}
	createNewOrder = () => {
		document.getElementById("showOrderId").style.display="none";
		document.getElementById("orderIdDiv").style.display="block";
	}
	deleteOrder = (orderObj) => {
		let filteredArray = this.state.customerOrderData.filter(item => item !== orderObj);
		this.setState({
			customerOrderData : filteredArray
		});
		alert("Order Deleted");
	}
	editOrder = (orderObj) => {
		let filteredArray = this.state.customerOrderData.filter(item => item == orderObj);
		document.getElementById("orderID").value = filteredArray[0].id;
	    document.getElementById("nameId").value = filteredArray[0].customer_name;
		document.getElementById("emailId").value = filteredArray[0].customer_email;
		document.getElementById("productId").value = filteredArray[0].product;
		document.getElementById("quantityId").value = filteredArray[0].quantity;
		document.getElementById("showOrderId").style.display="none";
		document.getElementById("orderIdDiv").style.display="block";
	}
	render() {
		return (
			<div>
				<div id="loginPage">
					<GoogleLogin
						clientId="936298680302-bpighltd49ujn7hr3fhdud2q71dc1f6o.apps.googleusercontent.com"	
						buttonText="Login with google account"
						onSuccess={this.afterLoginPage}
						onFailure={this.responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</div>
				<div id="boxId" className='box' style={{display: 'none'}}>
					<h4>Abhimanyu Kumar</h4>
					<button id="orderId" onClick={()=> this.showOrderList()}>Orders</button><br/>
					<button id="newOrderId" onClick={()=> this.createNewOrder()}>Create New Order</button>
				</div>
				<div id="orderIdDiv" style={{display: 'none'}}>
					OrderId : <input id="orderID"></input><br/>
					Name : <input id="nameId"></input><br/>
					Email :<input id="emailId"></input><br/>
					Product :<input id="productId"></input><br/>
					Quantity :<input id="quantityId"></input><br/>
					<button onClick={()=>this.saveNewOrder()}>SAVE</button>
				</div>
				<div id="showOrderId" style={{display: 'none'}}>
					{this.state.customerOrderData.map((v)=>{
							return (
								<div id="orderList">
									<strong>OrderId </strong> : {v.id} <strong>CustomerName </strong> : {v.customer_name}
									<strong>CustomerEmail </strong> : {v.customer_email} <strong>ProductName </strong> : {v.product}  
									<strong>Quantity </strong> : {v.quantity}<br/>
									<button id='b1' className="editButton" onClick={()=>this.editOrder(v)}>Edit</button> 
									<button className="deleteButton" onClick={()=>this.deleteOrder(v)}>Delete</button>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
}