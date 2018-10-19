import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import Header from '../components/header'
import JumbotronArea from '../components/jumbotron'
import { Container } from '../components/styledComponents.js'

const IndexPage = () => (
  <Container>
    <Header />
    <JumbotronArea />
  </Container>

)

export default IndexPage
