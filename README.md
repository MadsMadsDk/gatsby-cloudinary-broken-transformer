# gatsby-transformer-cloudinary issue #52 reproduction repository

This repository demonstrates an issue with cloudinary assets nested within a graphQL query.

## Making it work

- Replace the `cloudName` properties of `./data/posts/helloworld.json`
- Create an `.env.development` file with the following vars:

```bash
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_UPLOAD_FOLDER=""
```

## The issue

Plugin works fine, but as soon as Cloudinary assets are nested, it no longer works.

Consider the following data:

```json
{
  "post": {
    "title": "Hello cloudinary!",
    "coverPhoto": {
      "cloudinaryAssetData": true,
      "cloudName": "<insert cloudName>",
      "publicId": "sample",
      "originalHeight": 576,
      "originalWidth": 864,
      "alt": "Sample image"
    }
  },
  "coverPhoto": {
    "cloudinaryAssetData": true,
    "cloudName": "<insert cloudName>",
    "publicId": "sample",
    "originalHeight": 576,
    "originalWidth": 864,
    "alt": "Sample image"
  }
}
```

The `post` property will display the raw data of `coverPhoto`, rather than transforming it to a Gatsby Image compatible entity, like it does with the top-level `coverPhoto` property.

## Bonus issue

The `alt` property of the top-level `coverPhoto` property is discarded. It would be really neat if that information was kept along side the transformed image.
