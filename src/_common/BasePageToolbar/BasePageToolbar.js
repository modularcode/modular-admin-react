import React from 'react'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const BasePageToolbar = props => {
  const classes = useStyles()
  const externalClasses = props.classes || {}

  const Title = props.title ? (
    <Typography variant="h4" component="h1">
      {props.title}
    </Typography>
  ) : null
  const TitleComponent = props.titleComponent

  const Actions = props.actions
  const ActionsComponent = props.actionsComponent

  return (
    <Grid
      container
      spacing={3}
      className={clsx(classes.container, externalClasses.container)}
    >
      <Grid
        item
        sm={4}
        md={4}
        alignItems="center"
        container
        className={clsx(classes.titleContainer, externalClasses.titleContainer)}
      >
        {Title && Title}
        {TitleComponent && <TitleComponent />}
      </Grid>
      <Grid
        item
        md={8}
        sm={8}
        alignItems="center"
        container
        className={clsx(classes.actionsContainer, externalClasses.titleContainer)}
      >
        {Actions && Actions}
        {ActionsComponent && <ActionsComponent />}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginBottom: '1rem',
    },
    titleContainer: {},
    actionsContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
)

export default BasePageToolbar
