// In this example we simulate a server side error response
router.render = (req, res) => {
  res.status(503).jsonp({
    error: "error message here"
  })
}
