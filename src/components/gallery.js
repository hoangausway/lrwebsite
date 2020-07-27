import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './gallery.module.scss'

const Gallery = () => {
  const photos = useStaticQuery(query).allGalleryYaml.edges
  console.log(photos)

  return (
    <section className={styles.gallery}>
      <h1>Photo Gallery</h1>
      <div className={styles.container}>
        {photos.map(photo => (
          <div key={photo.node.id} className={styles.item}>
            <Img
              fluid={photo.node.gal_image.childImageSharp.fluid}
              alt={photo.node.gal_title}
            />
          </div>
        ))}
      </div>{' '}
    </section>
  )
}

export default Gallery

export const query = graphql`
  {
    allGalleryYaml(sort: { order: ASC, fields: gal_order }) {
      edges {
        node {
          id
          gal_order
          gal_title
          gal_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
