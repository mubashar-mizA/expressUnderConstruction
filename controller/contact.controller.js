const contactController = (req, res) => {
    const info = {
        title:'Contact'
    }
    res.render('contact', info)
}
export default contactController