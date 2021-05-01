import React from 'react'
import clsx from 'clsx'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export type BasePageToolbarProps = {
  classes?: {
    container?: string
    titleContainer?: string
    actionsContainer?: string
  }
  title?: string
  TitleComponent?: React.ComponentType
  ActionsComponent?: React.ComponentType
}

const BasePageToolbar: React.FC<BasePageToolbarProps> = (props) => {
  const classes = useStyles()
  const externalClasses = props.classes || {}
  const ActionsComponent = props.ActionsComponent || null

  const Title =
    typeof props.title === 'string' ? (
      <Typography variant="h4" component="h1">
        {props.title}
      </Typography>
    ) : (
      props.TitleComponent
    )

  const Actions = ActionsComponent && <ActionsComponent />

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
        {Title}
      </Grid>
      <Grid
        item
        md={8}
        sm={8}
        alignItems="center"
        container
        className={clsx(classes.actionsContainer, externalClasses.titleContainer)}
      >
        {Actions}
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
