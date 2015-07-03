/* GET 'Location info' page */
/*global require, module,  __dirname */
module.exports.locationList = function (req, res) {
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
            address: '125 High Street, Reading, PA  17017'
        }
    });
};