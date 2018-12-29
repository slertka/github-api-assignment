function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        console.log('hello');
    })
}
watchForm();