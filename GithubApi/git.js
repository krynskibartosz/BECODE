const btnRepos = document.getElementById("btnRepos")
const btnResult = document.getElementById("api")
const repo = document.getElementById("repo")
btnRepos.addEventListener("click", () => {
    return getRepos()
})

async function getRepos(){
    const url = "https://api.github.com/search/repositories?q=user:krynskibartosz"
    const response = await fetch(url)
    const result = await response.json()

    console.log(result);
    result.items.forEach(element => {
        const anchor = document.createElement("a");
        anchor.href = element.html_url;
        anchor.textContent = element.full_name
        const list = document.createElement("li")
        list.appendChild(anchor)
        btnResult.appendChild(list);

    });
}