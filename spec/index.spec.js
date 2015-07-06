/**
 * Created by EbyC on 7/6/2015.
 */
var request = require('request');
describe('my test suite',function() {
    //it("should respond with hello world", function (done) {
    //    request("http://localhost:3000/hello", function (error, response, body) {
    //        expect(body).toEqual("hello world");
    //        done();
    //    });
    //});
    it("should respond with hello world", function(done) {
        request("http://localhost:3000/hello", function(error, response, body){
            done();
        });
    }, 250); // timeout after 250 ms
    it("should return Creating an inventory app!"), function(home){
        request("http://localhost/home", function(error, response, body){
            home.strapline = "Creating an inventory app!";
        });
    };
});

