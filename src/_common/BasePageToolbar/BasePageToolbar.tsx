import React from 'react'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export interface IBasePageToolbarProps {
  classes?: {
    container?: string
    titleContainer?: string
    actionsContainer?: string
  }
  title: React.ReactNode
  actions: React.ReactNode
}

const BasePageToolbar: React.FC<IBasePageToolbarProps> = (props) => {
  const classes = useStyles()
  const externalClasses = props.classes || {}

  const Title =
    typeof props.title === 'string' ? (
      <Typography variant="h4" component="h1">
        {props.title}
      </Typography>
    ) : (
      props.title
    )
  // const TitleComponent = props.titleComponent

  const Actions = props.actions
  // const ActionsComponent = props.actionsComponent

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
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginBottom: '1rem',
    },
    titleContainer: {},
    actionsContainer: {
      color: theme.palette.grey[600],
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
)

export default BasePageToolbar
