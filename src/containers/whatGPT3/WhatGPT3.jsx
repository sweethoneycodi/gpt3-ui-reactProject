import React from 'react'
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='dpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='heloo what-gpt3 is an artificial ai for your problems' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='hehehehehehehehehhehehe' />
        <Feature title='Knowledgebase' text='lorem7 is a good feature' />
        <Feature title='Education' text='helps to teach you the benefits of ai' />
      </div>
    </div>
  )
}

export default WhatGPT3