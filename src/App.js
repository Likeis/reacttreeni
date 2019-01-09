import React, { Component } from 'react'
import './App.scss'
import { Hero } from './Hero'
import { GridParent } from './GridParent'
import { GridElement } from './GridElement'
import { ContentElement } from './ContentElement'
import { PostPreview } from './PostPreview'
import { BlogElement } from './BlogElement'

class App extends Component {
  onGithubButtonClick() {
    window.open('https://github.com', '_blank')
  }
  render() {
    return (
      <div className="App" style={{ color: `white` }}>
        <Hero
          title="<SoftDev/>"
          logo={{
            height: '30px',
            width: '123px'
          }}
        />
        <GridParent>
          <GridElement gridAreaId="post-preview-small-1">
            <PostPreview
              backgroundImage="http://placekitten.com/200/300"
              size="small"
              style="light"
            />
          </GridElement>
          <GridElement gridAreaId="post-preview-small-2">
            <PostPreview title="AI/VR Projects" size="small" style="dark" />
          </GridElement>
          <GridElement gridAreaId="post-preview-wide-1">
            <PostPreview
              title="Project EPOT for World Peace"
              size="wide"
              style="light"
            />
          </GridElement>
          <GridElement gridAreaId="info">
            <ContentElement
              title="Holy Friggin’ Moly! We do Software Like Crazy"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has. The point of using Lorem Ipsum is that it has."
            />
          </GridElement>
          <GridElement gridAreaId="misc">
            <div class="readmore-wrapper">
              <span className="readmore">Read More -></span>
            </div>
          </GridElement>
        </GridParent>
        <BlogElement title="We &#10084;" content="Check Out Our Repos  ->" />
      </div>
    )
  }
}

export default App
