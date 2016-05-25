/**
 * Created by Administrateur on 25/05/2016.
 */

describe('MyString', function(){

    describe('method length', function(){
       it('should indicate the correct length', function() {
          expect(MyString.length('Jeremie'), 7);
       });
    });

    describe('another test', function () {
       it('should fail', function(){
           expect(MyString.length('moi')).toEqual(6);
       });
    });

    describe('with integer', function(){
        it('catch Error', function(){
            expect(function() {
                MyString.length(42);
            }).toThrowError('str must be a string');
        });
    });
});