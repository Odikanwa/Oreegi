import React from 'react'
import { client } from '../lib/client';
import {HeroBanner, Product, FooterBanner} from '../components'; 

const Home = ({products, bannerData}) => (

    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2> Best Selling Products</h2>
        <p>Cars of any specification</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => product.name)}
      </div>

      <FooterBanner/>

    </div>
  );

export const getServerSideProps = async () => 
{
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }

}

export default Home
