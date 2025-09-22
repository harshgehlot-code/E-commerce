import React from 'react'
import PageHeader from '../components/PageHeader'

import CheckoutSection from '../components/CheckoutSection'
import ShopFeatures from '../components/ShopFeature'

const Checkout = () => {
  return (
    <>
     <PageHeader
            title="Checkout"
            breadcrumb={[{ label: "Home", path: "/" }, { label: "Checkout" }]}
            backgroundImage="/src/images/shop.jpg"
            showLogo={true}
            logoSrc="/src/images/logo.png"
          />
          <CheckoutSection/>
        <ShopFeatures/>
        </>
  )
}

export default Checkout