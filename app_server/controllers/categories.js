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
            id: 1,
            items: [{Name: 'Socks'},{Name: 'Pants'}]
        }, {
            name: 'Food',
            perishable: 'yes',
            bin: 13,
            location: '100 Main St.',
            value: '$5',
            id: 2,
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
        sidebar: "Time for a sidebar?",
        hopeCategories: [{
            name: 'Clothing',
            perishable: 'no',
            bin: 3,
            location: '100 Main St.',
            value: '$10',
            id: 1,
            items: [{name: 'Socks'},{name: 'Pants'}]
        }, {
            name: 'Food',
            perishable: 'yes',
            bin: 13,
            location: '100 Main St.',
            value: '$5',
            id: 2,
            items: [{name: 'Pretzels'},{name: 'Diet Coke'}]
        }]
    });
};