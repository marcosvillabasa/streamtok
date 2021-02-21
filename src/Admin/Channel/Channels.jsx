import React, { useEffect } from "react"
import styles from "./channel.module.css"
import { fetchChannels } from "../../Redux/actions/channelsActions"
import { connect } from "react-redux"
import { Spinner } from "../../Components/Spinner"
import ModalChannel from "./ModalChannel"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { removeChannel } from "../../Redux/actions/channelsActions"
import Swal from "sweetalert2"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const Channels = (props) => {
  const classes = useStyles()
  useEffect(() => {
    props.dispatch(fetchChannels())
  }, [])
  const handleDelete = (id) => {
    Swal.fire({
      title: "Eliminaras un canal?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        props.dispatch(removeChannel(id))
        Swal.fire("Eliminado!")
      }
    })
  }
  return (
    <div>
      {props.channels.isFetching ? (
        <Spinner />
      ) : (
        <table class={`${styles.darkTable}`}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Src</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {props.channels.channels.map((channel) => {
              return (
                <tr>
                  <td>{channel.title}</td>
                  <td>{channel.slug}</td>
                  <td>{channel.src}</td>
                  <td>
                    <ModalChannel
                      labelButton="Editar"
                      isPost={false}
                      _id={channel._id}
                      title={channel.title}
                      src={channel.src}
                      slug={channel.slug}
                    />
                  </td>
                  <td>
                    <Button
                      size="small"
                      className={classes.margin}
                      variant="outlined"
                      color="primary"
                      onClick={() => handleDelete(channel._id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  }
}

export default connect(mapStateToProps)(Channels)
