import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import HeaderTop from './HeaderTop';
import Nav from './Nav'
import Footer from './Footer'
//import GithubCorner from './GithubCorner'
import '../css/bootstrap.min.css';
import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
          settings: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "settings" } } }
            sort: { order: ASC, fields: [frontmatter___title] }
          ) {
            edges {
              node {
                frontmatter {
                    section1
                    section2
                    title
                    subtitle
                    phone
                    email
                    address
                }
              }
            }
        }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <HeaderTop data = {data.settings.edges[0].node.frontmatter} />
            
            <Nav subNav={subNav} />

            <Fragment>{children}</Fragment>

            <Footer data = {data.settings.edges[0].node.frontmatter} />
          </Fragment>
        )
      }}
    />
  )
}


