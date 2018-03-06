import React, { Component } from 'react';

const Breadcrumb = () => {
  return(
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">Library</li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb;