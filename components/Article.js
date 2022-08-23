import React from 'react'
// import PropTypes from 'prop-types'

export const Article = ({ header, body }) => {
  return (
    <article className="pt-4">
        <h3
          className="text-bodyS font-black uppercase font-bigShoulder cursor-pointer pb-1"
          style={{ lineHeight: "1.5rem" }}
        >
          {header}
        </h3>
        <>
          {body}
        </>
        <br/>
      </article>
  )
}

Article.propTypes = {}