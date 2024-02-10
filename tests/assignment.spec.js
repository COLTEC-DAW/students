const jsdom = require('jsdom');
const fs = require('fs');

const JEKYLL_PATH = process.env.JEKYLL_PATH || '../_site';

let $ = undefined;
beforeAll(() => {
    let html = fs.readFileSync(JEKYLL_PATH + '/index.html');
    let dom = new jsdom.JSDOM(html);
    $ = require('jquery')(dom.window);
});

test('T1. Adicionado arquivo json', () => {
    let studentElement = $('.js-student')[0];
    expect(studentElement).toBeDefined();       
});

test('T2. Adicionado texto de descrição', () => {
    let introText = $('.js-student .info p')[0].textContent.trim();
    expect(introText.length).toBeGreaterThan(0);
});

test('T3. Adicionado emoji', () => {
    let emojiElement = $('.js-student .em')[0];
    expect(emojiElement).toBeDefined();
});
