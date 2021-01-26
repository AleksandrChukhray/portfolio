function JsonLd({ data }) {
  return (<script
        style={{display: "none"}}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />)
}

export default JsonLd
