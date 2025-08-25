const { XMLHttpRequest} = require('xmlhttprequest')
const {ajax} = require('rxjs/ajax')
const {map, concatAll} = require('rxjs/operators')
ajax({
    createXHR: () => new  XMLHttpRequest(),
    url: 'https://api.github.com/users/jrNaldo/repos'
})

    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText))
    )
    .subscribe(console.log)