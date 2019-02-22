import React from 'react'
<link href="./BusinessList.css" rel="stylesheet" type="text/css">
import Business from "./Business/Business"

class BusinessList extends React.Components {
  redner () {
    return (
      <div className="BusinessList">
        <Business/>
        <Business/>
        <Business/>
        <Business/>
        <Business/>
        <Business/>
      </div>
    )
  }
};

export default BusinessList;
