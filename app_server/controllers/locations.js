/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('category-list', {
        title: 'Hope Express - Home',
        pageHeader: {
            title: 'HOPE',
            strapline: 'Create an inventory app!'
        },
        sidebar: "Anyone for a sidebar?",
        hopeCategories: [{
            name: 'Clothing',
            perishable: 'no',
            bin: 3,
            location: '100 Main St.',
            value: '$10'
        }, {
            name: 'Food',
            perishable: 'yes',
            bin: 13,
            location: '100 Main St.',
            value: '$5'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Hope Home',
        pageHeader: {
            title: 'HOPE Office location'
        },
        sidebar: {
            context: 'sidebar contex'
        },
        location: {
            name: 'Main Office',
            address: '125 High Street, Reading, RG6 1PS',
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('item-create-form', {
        title: 'Create item in category',
        pageHeader: {
            title: 'Item'
        },
        user: {
            displayName: "Cliff Eby"
        }
    });
};