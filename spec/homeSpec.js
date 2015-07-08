/**
 * Created by EbyC on 7/6/2015.
 */
var request = require('http');
describe('my test suite',function() {
    //it("should respond with hello world", function (done) {
    //    request("http://localhost:3000/hello", function (error, response, body) {
    //        expect(body).toEqual("hello world");
    //        done();
    //    });
    //});
    it('Server should respond to /', function (done){
        request.get("http://localhost:3000/", function(response){
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return Creating an inventory app!"), function(home){
        request("http://localhost:3000/home", function(error, response, body){
            home.strapline = "Creating an inventory app!";
        });
    };
});

