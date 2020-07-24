import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import Intro from '../components/intro'
import Foods from '../components/foods'
import Sayso from '../components/sayso'
// import FoodList from '../components/food'

const Index = () => {
  return (
    <Layout>
      <Metadata title='Home' description='This is my home page' />
      <Intro />
      <Foods />
      <Sayso />
      {/* <FoodList /> */}
    </Layout>
  )
}

export default Index
