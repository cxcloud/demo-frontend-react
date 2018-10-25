import React from 'react';
import Cover from './../components/Cover';
import CategoriesList from '../components/CategoriesList';
import FindPlan from '../components/FindPlan';
import Util from '../common/Util';
import Layout from '../components/Layout';
import Header from '../components/Header'
import Features from '../components/Features'
import _ from 'lodash';

export default class extends React.Component {
  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const commerceProducts = await Util.fetchProducts(productId);

    const categoryId = _.get(query);
    const categories = await Util.fetchCategories(categoryId);

    return { commerceProducts, categories };
  }
  render() {
    const { commerceProducts, categories } = this.props;
    return (
      <Layout className="Homepage">
        <Cover className="cover" />
        <CategoriesList categories={categories} />
        <Features />
        <FindPlan />
      </Layout>
    );
  }
}
