import React from 'react'
import { Helmet } from 'react-helmet-async'
import PopularSection from '../../Components/HomeSections/PopularSection'
import PerfectStyle from '../../Components/HomeSections/PerfectStyleSection'
import NewArrivals from '../../Components/HomeSections/NewArrivals'
import WatchoOfChoice from '../../Components/HomeSections/WatchOfChoice'
import WatchoOfChoice2 from '../../Components/HomeSections/WatchOfChoice2'


const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
    <main>
      <PerfectStyle/>
      <NewArrivals/>
      <PopularSection/>
        <WatchoOfChoice/>
        <WatchoOfChoice2/>
    </main>
    </>
  )
}

export default Home