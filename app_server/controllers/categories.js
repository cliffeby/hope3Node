//GET 'categories' page
module.exports.categoryList = function(req, res) {
    res.render('categories-list', {
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
            value: '$10',
            items: [{Name: 'Socks'},{Name: 'Pants'}]
        }, {
            name: 'Food',
            perishable: 'yes',
            bin: 13,
            location: '100 Main St.',
            value: '$5',
            items: [{Name: 'Pretzels'},{Name: 'Diet Coke'}]
        }]
    });
};
//GET 'categories' page
module.exports.itemList = function(req, res) {
    res.render('items-list', {
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
            value: '$10',
            items: [{name: 'Socks'},{name: 'Pants'}]
        }, {
            name: 'Food',
            perishable: 'yes',
            bin: 13,
            location: '100 Main St.',
            value: '$5',
            items: [{name: 'Pretzels'},{name: 'Diet Coke'}]
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationList = function(req, res) {
    res.render('locations-list', {
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