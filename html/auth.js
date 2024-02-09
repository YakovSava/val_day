async function auth() {
    let login = document.getElementById('login').value;
    let pass = document.getElementById('password').value;

    console.log(`${login}:${pass}`);

    let resp = await fetch('/service?entries.json');
    let allEnteries = await resp.json();

    console.log(allEnteries);

    if (allEnteries['entries'].includes(`${login}:${pass}`)) {
        window.location.replace(`${login}.html`);
//        alert('Ok!')
    } else {
        alert('Похоже вам нет открытки, простите пожалуйста :(')
    }
}