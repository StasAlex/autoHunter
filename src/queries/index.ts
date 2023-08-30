export const AllLogos = `
query MyQuery {
  logo {
    logoImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
      width
      url
      title
      height
      id
      author
    }
  }
}
`;
export const HOME_SLIDER = `
query HomeSlider {
  allHomeSliders {
    description
    id
    title
    image {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}
`;
export const Navigation = `
query Navigations {
  allNavigations {
    id
    navItem
  }
}
`;
export const AllLanguages = `
query allLanguages {
  allLanguages {
    label
    url
    id
    image {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}
`;
