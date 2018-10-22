import React, { Component } from 'react'
import Layout from '../components/Layout'
import CoverAllPages from '../common/CoverAllPages'
import ProductDetails from '../components/ProductDetails'
import FindPlan from '../components/FindPlan'
import Util from '../common/Util'
import Category from '../components/Category'
import _ from 'lodash'
import './index'
import styled from 'styled-components'

export default class extends Component {
  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const product = await Util.fetchProductById(productId);

    return { product }
  }
  render() {
    const { product } = this.props;
    const priceInEuro = (product.masterVariant.prices[0].value.centAmount / 100).toFixed(2);

    return(
      <Layout>
          <CoverAllPages className="CoverAllPages" />
          <ProductDetails
            id={product.id}
            name={product.name.en}
            color={product.masterVariant.attributes[9].value.label.en}
            size={product.masterVariant.attributes[8].value}
            image={product.masterVariant.images[0].url}
            description={product.slug.en}
            sku={product.masterVariant.sku}
            priceInEuro={priceInEuro}
            currency={product.masterVariant.prices[0].value.currencyCode} />
          <FindPlan />
    </Layout>
    );
  }
}
// const Wrapper = styled.div`
//   margin: 0 auto;
// `
