function createRepoHTML(responseJSON){
    $('#error-message').empty();
    $('#results-list').empty();
    for (let i=0; i<responseJSON.length; i++){
        $('#results-list').append(`
            <li>
                <h2><a href='${responseJSON[i].html_url}'>${responseJSON[i].name}</a></h2>
            </li>
        `)
    }
    $('#results').removeClass('hidden');
}

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
        .then(responseJson => createRepoHTML(responseJson))
        .catch(err => {
            $('#results-list').empty();
            $('#error-message').html(`<p>User not found. Please enter a valid username.</p>`)
        });
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        displayRepos();
    })
}

watchForm();