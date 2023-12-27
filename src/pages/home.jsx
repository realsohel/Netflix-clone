import React from 'react'
import Main from '../components/main'
import Row from '../components/row'
import requests from '../request'


const Home = () => {
    return (
        <div className=''>
            <Main/>
            <Row rowID='1' title='Trending' fetchUrl={requests.requestTrending}/>
            <Row rowID='2' title='UpComing' fetchUrl={requests.requestUpcoming}/>
            <Row rowID='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
            <Row rowID='4' title='Popular' fetchUrl={requests.requestPopular}/>
            <Row rowID='5' title='Horror' fetchUrl={requests.requestHorror}/>
        </div>
    )
}

export default Home
