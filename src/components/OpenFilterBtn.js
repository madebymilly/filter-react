import React from 'react'

const OpenFilterBtn = ({ open }) => (
  <>
    <button href="#" className="btn open-filter js-open-filter"
      onClick={ ( e ) => open( e ) }>
      Filteren
    </button>
  </>
)


export default OpenFilterBtn;
