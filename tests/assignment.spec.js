const jsdom = require('jsdom');
const fs = require('fs');

const JEKYLL_PATH = process.env.JEKYLL_PATH;

let $ = undefined;
beforeAll(() => {
    let html = fs.readFileSync(JEKYLL_PATH + '/index.html');
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
