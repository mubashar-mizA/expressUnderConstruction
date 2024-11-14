const homeController = (req, res) => {
    const info = {
        title:'Home'
    }
    res.render('home', info)
}
export default homeController