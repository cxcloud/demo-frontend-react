import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'

export default class extends Component {
  state = {
    categories: [],
    productsList: []
  };
  async componentDidMount() {
    await Util.fetchCategories().then(result => {
      this.setState({ categories: result });
    });

    await Util.fetchProducts().then(result => {
      this.setState({ productsList: result });
    });
  }
  render() {
    return (
      <div className="CategoriesList">
        <h2 className="currServ-title title">
          subcategories
        </h2>
        <div className="selected_category">
          {this.state.categories.map((item, i) => (
            <p key={i}>
              <a href={'/Subcategory?id='}>{item.name.en}</a>
            </p>
          ))}
        </div>
        <style jsx>
          {`
            .CategoriesList {
              margin-left: auto;
              margin-right: auto;
            }
            .selected_category {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            }
          `}
        </style>
      </div>
    );
  }
}





















// export default ({

// }) => {
//     return (
//         <div className="Category">
//             <div className="container">
//                 <div>
//                   <div>
//                       <p>
//                           <a href={'/Product?id=' + productId}>Manage subscription</a>
//                       </p>
//                   </div>
//                 </div>
//             </div>
//             <style jsx>
//                 {`
//                 .Category {
//                     margin: 0 auto;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: space-between;
//                     background: #f7f7f7;
//                     padding: 10px;
//                 }
//                 .Category:nth-child(odd) {
//                     background-color: #f4f2f2;
//                 }
//                 .container {
//                     align-items: flex-end;
//                     display: inline-flex;
//                 }
//                 .home-icon {
//                     width: 100px;
//                     height: 100px;
//                     margin-bottom: 16px;
//                     margin-left: 30px;
//                 }
//                 .details {
//                     margin-left: 25px;
//                 }
//                 @media only screen and (max-width: 880px) {
//                     .Category {
//                         max-width: 28em;
//                         max-height: 28em;
//                     }
//                 }
//                 @media only screen and (max-width: 480px) {
//                     .container {
//                         display: block;
//                     }
//                 }
//             `}
//             </style>
//         </div>
//     );
// }