// import React, { Component } from 'react';
// import Background from './../shared/Background/Background'
// import Chart1 from './../shared/Chart1';
// import Chart2 from './../shared/Chart2';
// import AddPurchase from './../shared/AddPurchase';
// import DisplayPurchases from './../shared/DisplayPurchases';
// import Loading from './../shared/Loading/Loading';
// import Nav from './../shared/Nav';
// import './Budget.css';
// import { connect } from 'react-redux'
// import { requestUserData } from '../../ducks/userReducer'
// import { requestBudgetData, addPurchase, removePurchase } from '../../ducks/budgetReducer'


// class Budget extends Component {

//   componentDidMount(){
//     this.props.requestUserData()
//     this.props.requestBudgetData()
//   }

//   render() {
//     const { loading, purchases, budgetLimit } = this.props.budget
//     const { firstName, lastName } = this.props.user
//     return (
//       <Background>
//         {loading ? <Loading/> : null}
//         <div className='budget-container'>
//           <Nav firstName={firstName} lastName={lastName}/>
//           <div className='content-container'>
//             <div className="purchases-container">
//               <AddPurchase addPurchase={this.props.addPurchase}/>
//               <DisplayPurchases removePurchase={this.props.removePurchase} purchases={purchases}/>
//             </div>
//             <div className='chart-container'>
//               <Chart1 purchases={purchases} budgetLimit={budgetLimit}/>
//               <Chart2 purchases={purchases}/>
//             </div>
//           </div>
//         </div>
//       </Background>
//     )
//   }
// }

// function mapStateToProps(reduxState) {
//   return {
//     budget: reduxState.budget,
//     user: reduxState.user
//   }
// }

// export default connect(mapStateToProps, { requestUserData, requestBudgetData, addPurchase, removePurchase })(Budget);


import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import { connect } from 'react-redux'
import { requestUserData } from './../../ducks/userReducer'
//IMPORT THE addPurchase AND removePurchase ACTION CREATORS
import { requestBudgetData, addPurchase, removePurchase } from './../../ducks/budgetReducer'


class Budget extends Component {
  componentDidMount() {
    this.props.requestUserData();
    this.props.requestBudgetData();
  }

  render() {
    const { loading, purchases, budgetLimit } = this.props.budget;
    const { firstName, lastName } = this.props.user;
    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
	    {/* // USE PROPS TO PASS DOWN addPurchase AND removePurchase FUNCTIONS */}
              <AddPurchase addPurchase={this.props.addPurchase} />
              <DisplayPurchases purchases={purchases} removePurchase={this.props.removePurchase} />
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit} />
              <Chart2 purchases={purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    user: state.user
  }
}

	
// ADD addPurchase AND removePurchase TO THE 2ND OBJ ARG IN THE CONNECT METHOD
export default connect(mapStateToProps, { requestUserData, requestBudgetData, addPurchase, removePurchase })(Budget);
