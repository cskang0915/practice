import React, { Component } from 'react';
import OverviewRoutes from '../Config/OverviewRoutes';
import moment from 'moment';

class OverviewContainer extends Component {
	state = {
		dataDay: [],
		dataWeek: [],
		dataMonth: []
	}

	componentDidMount() {
		this.getByDay();
		this.getByWeek();
		this.getByMonth();
		console.log("here")
		console.log(this.state.dataDay)
		// below is going to be displayed for the user
		// console.log(moment().startOf("week").week(week))
		// console.log(moment().endOf("week").week(week))
	}

	// getAll = () => {
	// 	let day = moment().format('D')
	// 	let week = moment()

	// 	// write a get all and sort in one function
	// }

	// create function for get by day
	getByDay = () => {
		let day = moment().format('D')
		let month = moment().format('M')
		let year = moment().format('Y')
		fetch(`http://localhost:4000/api/budgetEntry/get/day/${month}/${day}/${year}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				console.log('get by day')
				console.log(data)
				this.setState({
					dataDay: data
				})
			})
			.then(() => {
				console.log(this.state)
			})
			.catch(error => console.log(error))
		}
	// create function for get by week
	getByWeek = () => {
		let year = moment().format('Y')
		let week = moment().format('W')
		fetch(`http://localhost:4000/api/budgetEntry/get/week/${week}/${year}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				console.log('get by week')
				console.log(data)
				this.setState({
					dataWeek: data
				})
			})
			.then(() => {
				console.log(this.state)
			})
			.catch(error => console.log(error))
		}
		
	// create function for get by month
	getByMonth = () => {
		let month = moment().format('M')
		let year = moment().format('Y')
		fetch(`http://localhost:4000/api/budgetEntry/get/month/${month}/${year}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				console.log('get by month')
				console.log(data)
				this.setState({
					dataMonth: data
				})
			})
			.then(() => {
				console.log(this.state)
			})
			.catch(error => console.log(error))
		}

	render(){
		return(
			<div>
				<OverviewRoutes dataDay = {this.state.dataDay} dataWeek = {this.state.dataWeek} dataMonth = {this.state.dataMonth}/>
			</div>
		)
	}
}

export default OverviewContainer;