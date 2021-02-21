import React, { useEffect } from "react"
import { useFormik } from "formik"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import styles from "./channel.module.css"
import Button from "@material-ui/core/Button"
import {addChannel,updateChannel, fetchChannels} from '../../Redux/actions/channelsActions'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = "Titulo requerido"
  }

  if (!values.slug) {
    errors.slug = "Slug requerido"
  }

  if (!values.src) {
    errors.src = "Url canal requerido"
  }

  return errors
}

const FormChannel = ({isPost,data,...props}) => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      title: data.title ? data.title : "",
      slug: data.slug ? data.slug : "",
      src: data.src ? data.src : "",
    },
    validate,
    onSubmit: (values) => {
        if(isPost){
            props.dispatch(addChannel(values.title, values.slug,values.src))
            window.location='/admin'
            values.title = ''
            values.slug = ''
            values.src = ''
        }
        else{
            props.dispatch(updateChannel(data._id, values))
            window.location='/admin'
        }
      
    },
  })


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                name="title"
                label="Titulo"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
            </Grid>
            <Grid item xs={12}>
              {formik.errors.title ? (
                <span className={styles.error}>{formik.errors.title}</span>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                name="slug"
                label="Slug"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.slug}
              />
            </Grid>
            <Grid item xs={12}>
              {formik.errors.slug ? (
                <span className={styles.error}>{formik.errors.slug}</span>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                name="src"
                label="URL Canal"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.src}
              />
            </Grid>
            <Grid item xs={12}>
              {formik.errors.title ? (
                <span className={styles.error}>{formik.errors.src}</span>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={Object.keys(formik.errors).length > 0}
                type="submit"
              >
                {isPost ? 'Crear' : 'Editar'}
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        channels: state.channels
    }
    
  }
  
  export default connect(mapStateToProps)(FormChannel)
