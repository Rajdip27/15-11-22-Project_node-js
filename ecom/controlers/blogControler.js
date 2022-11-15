
module.exports={
    index:(req, res, next)=> {
        // blog list
        res.render('index', { title: 'blogs' });
    },
    create:(req, res, next)=> {
        // blog list
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' });
    },
    edit:(req, res, next)=> {
        // blog list
        res.render('index', { title: 'blogs' });
    },
    show:(req, res, next)=> {
        // blog list
        res.render('index', { title: 'blogs' });
    },
    delete:(req, res, next)=> {
        // blog list
        res.render('index', { title: 'blogs' });
    },
    update:(req, res, next)=> {
        // blog list
        res.render('index', { title: 'blogs' });
    },
    store:(req, res, next)=> {
        // blog list
        res.render('index', { title: 'blogs' });
    }
}