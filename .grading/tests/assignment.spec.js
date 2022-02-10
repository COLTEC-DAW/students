const jsdom = require('jsdom');
const fs = require('fs');


let htmlFile = undefined;
let $ = undefined;
beforeAll(() => {
    let html = fs.readFileSync('../_site/index.html');
    let dom = new jsdom.JSDOM(html);
    $ = require('jquery')(dom.window);
});

test('Adicionado arquivo json', () => {
    let studentElement = $('.js-student')[0];
    expect(studentElement).toBeDefined();       
});

test('Adicionado texto de descrição', () => {
    let introText = $('.js-student .info p')[0].textContent.trim();
    expect(introText.length).toBeGreaterThan(0);
});

test('Adicionado emoji', () => {
    let emojiElement = $('.js-student .em')[0];
    expect(emojiElement).toBeDefined();
});


    // let fs = require('fs');

    // fs.readFile('../../_site/index.html', function (err, html) {

    //     if (err) throw err;

    //     http.createServer(function (request, response) {
    //         response.writeHeader(200, { "Content-Type": "text/html" });
    //         response.write(html);
    //         response.end();
    //     }).listen(PORT);
    // });
