import React from "react"
import "twin.macro"
import { graphql, PageProps } from "gatsby"
import Image from "gatsby-image"

type DataProps = {
  postsJson: any
}

const IndexPage: React.FC<PageProps<DataProps>> = props => {
  return (
    <div tw="flex">
      <div tw="w-1/2">
        <Image fluid={props.data.postsJson.coverPhoto.fluid} />
      </div>
      <div tw="whitespace-pre p-8 overflow-scroll">
        <pre>{JSON.stringify(props.data, null, 4)}</pre>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    postsJson(id: { eq: "934539f8-c7ca-502c-9c86-2fd484a78cc5" }) {
      id
      coverPhoto {
        fluid(maxWidth: 1600) {
          ...CloudinaryAssetFluid
        }
      }
      post {
        title
        coverPhoto {
          cloudName
          cloudinaryAssetData
          originalHeight
          originalWidth
          publicId
        }
      }
    }
  }
`
