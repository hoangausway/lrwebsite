import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Reveal from './reveal'
import styles from './foodlist.module.scss'

const FoodList = () => {
  const data = useStaticQuery(query)
  return (
    <>
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <Food
          key={edge.node.id}
          styles={styles}
          food={edge.node.frontmatter}
          isLeft={index % 2 !== 0}
        />
      ))}
    </>
  )
}
export default FoodList

export const Food = ({ styles, food, isLeft }) => {
  const featured = food.featured.childImageSharp.fluid
  const bottom = food.bottom.childImageSharp.fluid
  return (
    <section
      id={food.bookmark}
      className={isLeft ? styles.foodleft : styles.food}
    >
      <div className={styles.group}>{food.group}</div>
      <div className={styles.image}>
        <Img fluid={featured} alt='featured' />
      </div>
      <Reveal
        clsName={styles.desc}
        transProps={{
          opacity: [1, 0]
        }}
        transition='opacity 3s ease'
      >
        <p>{food.desc}</p>
      </Reveal>

      <div className={styles.flavours}>
        <div className={styles.contents}>{food.flavours}</div>
      </div>
      <div className={styles.bottom}>
        <Img fluid={bottom} alt='bottom' />
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { active: { eq: "yes" } }
        fileAbsolutePath: { regex: "/foods/" }
      }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          id
          frontmatter {
            active
            desc
            flavours
            group
            name
            order
            bookmark
            bottom {
              relativePath
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            featured {
              relativePath
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`