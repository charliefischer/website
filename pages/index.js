import React from "react";
import Head from 'next/head'
import $ from 'jquery'; 

import IllustrationFeed from '../components/illustrationFeed'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import WebDevFeed from '../components/webdevFeed'


export default class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  // componentDidMount() {
  //   $(window).scroll(function(){
  //     console.log($(this))
  //     $('#right').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
  //   }).scroll();
  // }
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2500); 
  }

  
render(){
  if (this.state.loading){
    return (
      <Layout>
        <Head>
          <title>Charlie Fischer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{marginTop: '50%'}}>
          Loading...
        </div>
      </Layout>
    )
  } else {
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
}
