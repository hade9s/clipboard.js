var assert = chai.assert;

describe('Clipboard', () => {
    describe('#constructor', () => {
        it('should throw an error since there was no arguments passed', done => {
            try {
                new Clipboard();
            }
            catch(e) {
                done();
            }
        });

        it('should throw an error since an empty selector has been passed', done => {
            try {
                new Clipboard('#abc');
            }
            catch(e) {
                done();
            }
        });

        it('should create a NodeList and store it in a property', () => {
            let clipboard = new Clipboard('.btn');
            return assert.instanceOf(clipboard.triggers, NodeList);
        });
    });

    describe('#validate', () => {
        var elem = document.createElement('input');
        let clipboard = new Clipboard('.btn');

        it('should throw an error since there was no "data-target" or "data-text"', (done) => {
            try {
                clipboard.validate({
                    currentTarget: elem
                });
            }
            catch(e) {
                done();
            }
        });

        it('should throw an error since "data-action" is invalid', (done) => {
            try {
                elem.setAttribute('data-action', 'paste');

                clipboard.validate({
                    currentTarget: elem
                });
            }
            catch(e) {
                done();
            }
        });

        it('should throw an error since "data-target" do not match any element', (done) => {
            try {
                elem.setAttribute('data-target', 'xyz');

                clipboard.validate({
                    currentTarget: elem
                });
            }
            catch(e) {
                done();
            }
        });
    });
});
