//GET "categories" page
/*global require, module,  __dirname */
"use strict";
module.exports.categoryList = function(req, res) {
    res.render("categories-list", {
        title: "Hope Express - Categories List",
        pageHeader: {
            title: "HOPE",
            strapline: "Create an inventory app!"
        },
        sidebar: "Anyone for a sidebar?",
        hopeCategories: [{
            name: "Clothing",
            perishable: "no",
            bin: 3,
            location: "100 Main St.",
            value: "$10",
            id: 1,
            items: [{Name: "Socks"}, {Name: "Pants"}]
        }, {
            name: "Food",
            perishable: "yes",
            bin: 13,
            location: "100 Main St.",
            value: "$5",
            id: 2,
            items: [{Name: "Pretzels"}, {Name: "Diet Coke"}]
        }]
    });
};
//GET "categories" page
module.exports.itemList = function(req, res) {
    res.render("items-list", {
        title: "Hope Express - Items List",
        pageHeader: {
            title: "HOPE",
            strapline: "Create an inventory app!"
        },
        sidebar: "Time for a sidebar?",
        hopeCategories: [{
            name: "Clothing",
            perishable: "no",
            bin: 3,
            location: "100 Main St.",
            value: "$10",
            id: 1,
            items: [{name: "Socks"}, {name: "Pants"}]
        }, {
            name: "Food",
            perishable: "yes",
            bin: 13,
            location: "100 Main St.",
            value: "$5",
            id: 2,
            items: [{name: "Pretzels"}, {name: "Diet Coke"}]
        }]
    });
};
//GET "item" page
module.exports.item = function(req, res) {
    res.render("item", {
        title: "Hope Express - Item",

        pageHeader: {
            title: "HOPE",
            strapline: "Create an inventory app!"
        },
        sidebar: "Item sidebar?",
        hopeCategories: [{
            name: "Clothing",
            perishable: "no",
            bin: 3,
            location: "100 Main St.",
            value: "$10",
            id: 1,
            items: [{name: "Socks"}, {name: "Pants"}]
        }, {
            name: "Food",
            perishable: "yes",
            bin: 13,
            location: "100 Main St.",
            value: "$5",
            id: 2,
            items: [{name: "Pretzels"}, {name: "Diet Coke"}]
        }],
          item: "Diet Coke"
        //item: hopeCategories[1].name.items[1].name  item not defined
    });
};