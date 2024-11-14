const aboutController = (req, res) => {
    const info = {
        title:'About'
    }
    res.render('about', info)
}
export default aboutController
