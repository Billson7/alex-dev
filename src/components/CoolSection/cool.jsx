import React, { useState } from "react"
import { Typography, Rating } from "@mui/material"
export const Cool = () => {
  const [value, setValue] = useState()
  console.log(value)
  return (
    <section className="section section-cool">
      <div className="flex-row">
        <h2 className="profile-heading">Something cool</h2>
        <p className="profile-caption">trust me</p>
        <p className="profile-intro">Coming soon...</p>
        <Typography component="legend">Rate it?</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
        <Typography component="legend">How cool is this website?</Typography>
        <Rating name="read-only" value={5} readOnly />
        <Typography component="legend">things!</Typography>
        <Rating name="no-value" defaultValue={4.5} precision={0.5} />
      </div>
    </section>
  )
}
