import React from 'react';
import './App.css';

class CreateOrder extends React.Component{
	saveNewOrder = () => {
		let orderId = document.getElementById("orderID").value;
	    let nameId = document.getElementById("nameId").value;
		let emailId = document.getElementById("emailId").value;
		let productId = document.getElementById("productId").value;
		let quantityId = document.getElementById("quantityId").value;
		var orderDetail={
			orderId:orderId,
			nameId: nameId,
			emailId: emailId,
			productId: productId,
			quantityId: quantityId
		};
		
	}
	render(){
		return(
		<div>
			<form>
				OrderId : <input id="orderID" placeholder="Order ID"></input><br/>
				Name : <input id="nameId" placeholder="Cust Name"></input><br/>
				Email :<input id="emailId" placeholder="Cust Email"></input><br/>
				Product :<input id="productId" placeholder="Product"></input><br/>
				Quantity :<input id="quantityId" placeholder="Quantity"></input><br/>
				<button onClick={()=>this.saveNewOrder()}>SAVE</button>
			</form>
		</div>
		);
	}
}

export default CreateOrder;
