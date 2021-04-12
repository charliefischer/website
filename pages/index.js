import React from "react";
import Head from 'next/head'
import $ from 'jquery'; 

import IllustrationFeed from '../components/illustrationFeed'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import WebDevFeed from '../components/webdevFeed'


export default class Home extends React.Component {
  componentDidMount() {
    $(window).scroll(function(){
      console.log($(this))
      $('#right').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
    }).scroll();
  }

  
render(){
  return (
    <Layout>
        <Head>
          <title>Charlie Fischer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <IllustrationFeed />
          <WebDevFeed />
    </Layout>
  )
}
}
