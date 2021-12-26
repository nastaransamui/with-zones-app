import useStyles from "./footer-style"

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      this is footer
    </div>
  )
}
