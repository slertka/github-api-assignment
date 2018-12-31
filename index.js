function displayRepos(){
    let user = $('form').find('#username').val();
    let url = `https://api.github.com/users/${user}/repos`;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText)
        })
        .then(responseJson => console.log(responseJson))
        .catch(err => console.log(err.message));
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        displayRepos();
    })
}

watchForm();