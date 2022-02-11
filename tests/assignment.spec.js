const jsdom = require('jsdom');
const fs = require('fs');

const JEKYLL_PATH = process.env.JEKYLL_PATH;

let $ = undefined;
beforeAll(() => {
    let html = fs.readFileSync(JEKYLL_PATH + '/index.html');
    console.log(html.toString());
    let dom = new jsdom.JSDOM(html);
    $ = require('jquery')(dom.window);
});

test('1. Adicionado arquivo json', () => {
    let studentElement = $('.js-student')[0];
    expect(studentElement).toBeDefined();       
});

test('2. Adicionado texto de descrição', () => {
    let introText = $('.js-student .info p')[0].textContent.trim();
    expect(introText.length).toBeGreaterThan(0);
});

test('3. Adicionado emoji', () => {
    let emojiElement = $('.js-student .em')[0];
    expect(emojiElement).toBeDefined();
});
