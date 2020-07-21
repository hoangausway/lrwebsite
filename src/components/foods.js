import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './foods.module.scss'
import Reveal from './reveal'

import { ScrollLinkTo } from './scrolllink'

const Foods = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const topRightImage = data.banhmibasket.childImageSharp.fluid
  const veggieBottom = data.bottom.childImageSharp.fluid

  const cards = data.cards.edges
  const cardStyles = [
    styles.card1,
    styles.card2,
    styles.card3,
    styles.card4,
    styles.card5,
    styles.card6
  ]
  const cardAnimate = [
    [
      ['-2vw', '2vw'],
      ['-2vw', '4vw']
    ],
    [
      ['-12.8vw', '-12.8vw'],
      ['20.2vw', '20.2vw']
    ],
    [
      ['-23.5vw', '-18vw'],
      ['42.5vw', '48vw']
    ],
    [
      ['-48vw', '-48vw'],
      ['-16vw', '-16vw']
    ],
    [
      ['-58.8vw', '-56vw'],
      ['6vw', '8.8vw']
    ],
    [
      ['-69.8vw', '-72vw'],
      ['28.4vw', '23.6vw']
    ]
  ]

  return (
    <section className={styles.foods}>
      <div className={styles.foodsToprightImg}>
        <Img fluid={topRightImage} alt='banh mi basket' />
      </div>
      <Reveal
        clsName={styles.foodsMsg}
        transProps={{
          opacity: [1, 0],
          transform: ['scale(1)', 'scale(0.5)']
        }}
        transition='opacity 3s ease, transform 3s ease'
      >
        ALWAYS <br /> FRESH
      </Reveal>
      <div className={styles.foodsMiddleCards}>
        {cards.map((edge, index) => (
          <RevealCard
            key={index}
            clsName={cardStyles[index]}
            tops={cardAnimate[index][0]}
            lefts={cardAnimate[index][1]}
            fluidImage={edge.node.frontmatter.image.childImageSharp.fluid}
            imageClass={styles.cardImage}
            linkTo={edge.node.frontmatter.linkto}
          />
        ))}
      </div>
      <div className={styles.foodsBottomImg}>
        <Img fluid={veggieBottom} alt='veggie' />
      </div>
      <ScrollLinkTo
        to='banhmi'
        smooth
        duration={800}
        className={styles.foodsMore}
      >
        Tap pictures to learn more...
      </ScrollLinkTo>
    </section>
  )
}

export default Foods

const RevealCard = ({
  clsName,
  tops,
  lefts,
  imageClass,
  fluidImage,
  linkTo
}) => {
  return (
    <ScrollLinkTo to={linkTo} smooth duration={800}>
      <Reveal
        clsName={clsName}
        transProps={{
          opacity: [1, 0],
          top: tops,
          left: lefts
        }}
        transition='opacity 0.7s ease, top 2s cubic-bezier(0, 0, 0.23, 0.95), left 2s cubic-bezier(0, 0, 0.23, 0.95)'
      >
        <div className={imageClass}>
          <Img fluid={fluidImage} alt='card' />
        </div>
      </Reveal>
    </ScrollLinkTo>
  )
}

export const query = graphql`
  {
    cards: allMarkdownRemark(
      filter: {
        frontmatter: { image: { childImageSharp: { fluid: { src: {} } } } }
        fileAbsolutePath: { regex: "/cards/" }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            cardorder
            linkto
            image {
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
    banhmibasket: file(relativePath: { eq: "images/banhmi-basket.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bottom: file(relativePath: { eq: "images/veggie-bottom.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
