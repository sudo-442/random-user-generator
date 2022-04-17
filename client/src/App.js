import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: {
				first: "John",
				last: "Doe"
			},
			email: "johndoe@example.com",
			phone: "+1 (123) 456-7890",
			picture: "https://randomuser.me/api/portraits/men/88.jpg"
		};
		this.getData = this.getData.bind(this)
	}
	render() {
		return (
			<>
				<div style = {{
					margin: 50
				}}>
					<img
						alt = "Random Profile"
						src = {this.state.picture}
						style = {{
							clipPath: "circle()",
							border: "3px solid #5f3dc4",
							borderRadius: "50%"
						}}
					/>
					<h1>{this.state.name.first} {this.state.name.last}</h1>
					<h3>{this.state.email}&emsp;&#124;&emsp;{this.state.phone}</h3>
					<button
						style={{
							backgroundColor: "#5f3dc4",
							fontSize: "1.15em",
							cursor: "pointer",
							border: "none",
							borderRadius: "15px",
							margin: "20px",
							color: "white",
							width: "100px",
							height: "50px"
						}}
						onClick={this.getData}
					>
						Next
					</button>
				</div>
			</>
		)
	}
	async getData() {
		const res = await fetch("https://randomuser.me/api")
		const { results } = await res.json()
		
		const data = results[0];
		this.setState({
			name: {
				first: data.name.first,
				last: data.name.last
			},
			email: data.email,
			phone: data.phone,
			picture: data.picture.large
		})
	}
}

export default App
