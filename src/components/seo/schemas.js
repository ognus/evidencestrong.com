export const PAGE_TYPES = {
  BLOG: "BlogPosting",
  ABOUT: "AboutPage",
  CONTACT: "ContactPage",
  DEFAULT: "WebPage",
}

function toDate(value) {
  if (typeof value === "string") {
    if (value.includes("T")) {
      return new Date(value)
    }

    const params = value
      .split(/[-/:.\s]/)
      .filter(p => p)
      .map(p => Number.parseInt(p, 10))

    const [, month] = params
    params[1] = month - 1
    return new Date(...params)
  }

  if (typeof value === "number") {
    return new Date(value)
  }

  return value
}

function toISODate(date) {
  if (date) {
    return toDate(date).toISOString()
  }
  return date
}

function getPerson({ name, familyName, givenName, alumniOf, credential }) {
  return {
    "@type": "Person",
    name,
    familyName,
    givenName,
    alumniOf,
    hasCredential: credential,
  }
}

function getEducationalOrganization({ name, address }) {
  return {
    "@type": "EducationalOrganization",
    address,
    name,
  }
}

function getAddress({ country, region, city, streetAddress, postalCode }) {
  return {
    "@type": "PostalAddress",
    postalCode,
    streetAddress,
    addressLocality: city,
    addressRegion: region,
    addressCountry: country,
  }
}

function getCredentials({ degreeName, degreeLevel, field }) {
  return {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: degreeName,
    educationalLevel: degreeLevel,
    about: field,
  }
}

export function getAuthor() {
  const alumniOf = getEducationalOrganization({
    name: "University of Otago",
    address: getAddress({
      country: "NZ",
      region: "Otago",
      city: "Dunedin",
      streetAddress: "362 Leith Street",
      postalCode: "9016",
    }),
  })

  const credential = getCredentials({
    degreeName: "Doctor of Philosophy",
    degreeLevel: "PhD",
    field: "Physiotherapy",
  })

  return getPerson({
    name: "Alex Macznik",
    givenName: "Aleksandra",
    familyName: "Macznik",
    alumniOf,
    credential,
  })
}

export function getWebsite({ url, name, description, logoUrl }) {
  return {
    "@type": "WebSite",
    url,
    name,
    description,
    author: getAuthor(),
    publisher: {
      "@type": "Organization",
      name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  }
}

export function getPage({
  type = PAGE_TYPES.DEFAULT,
  title,
  url,
  description,
  datePublished,
  dateModified,
  logoUrl,
  siteName,
}) {
  return {
    "@type": type,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    datePublished: toISODate(datePublished),
    dateModified: toISODate(dateModified || datePublished),
    author: getAuthor(),
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    description,
  }
}
