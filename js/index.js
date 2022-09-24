//Welcome phrase
console.log("Hello mate! Welcome to PTV")

//Mockup Array
const VRAC = [
    {
        id: "01",
        name: "Pokemon",
        picture: "https://www.picng.com/upload/pokemon/png_pokemon_43613.png",
        intro: "Gotta catch'em all!",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "02",
        name: "Dogma",
        picture: "https://www.picng.com/upload/god/png_god_42411.png",
        intro: "He said that faith is like a glass of water. When you're young, the glass is little, so it's easy to fill.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "03",
        name: "Bio-Dome",
        picture: "https://images.fanart.tv/fanart/bio-dome-52f1521e93174.png",
        intro: "Shaved-down pool nazis oiling up our women and swimming with them in an olympic-sized toilet.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "04",
        name: "Tucker and Dale Vs Evil",
        picture: "https://images.fanart.tv/fanart/tucker--dale-vs-evil-51aae8079bee9.png",
        intro: "Don't be sorry, it's my fault. I should have known if a guy like me talked to a girl like you, somebody would end up dead.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "05",
        name: "Lesbian Vampire Killers",
        picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/47246333-ae6f-4e1c-94b1-db620a5ddab2/de15tz8-b087790d-f597-4d1f-8985-692f62587cbf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ3MjQ2MzMzLWFlNmYtNGUxYy05NGIxLWRiNjIwYTVkZGFiMlwvZGUxNXR6OC1iMDg3NzkwZC1mNTk3LTRkMWYtODk4NS02OTJmNjI1ODdjYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QoNbNGAdKs5ILeC41-qhqBXdRLg3da2GlZccYEZgP4Y",
        intro: "Maybe it's just... that I don't like kids, y'know.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "06",
        name: "Knights of Badassdom",
        picture: "https://fanart.tv/api/download.php?type=download&image=37605&section=3",
        intro: "You just summoned a succubus from Hell!",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "07",
        name: "Squirrel Girl",
        picture: "https://www.seekpng.com/png/full/641-6418699_squirrel-girl-transparent-squirrel-girl.png",
        intro: "I'm Squirrel Girl! This is my friend Tippy-Toe!! We're here to kick butts and eat nuts... and you can't eat nuts in space.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "08",
        name: "Cloak and Dagger",
        picture: "https://i.pinimg.com/originals/c1/4a/62/c14a62ec223a3a596d6606607dfda02d.png",
        intro: "It's not just a game anymore.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "09",
        name: "Jupiter's Legacy",
        picture: "https://screenphiles.files.wordpress.com/2021/04/jupiters-legacy-symbol-1.png",
        intro: "All I know is there are parts of both of our lives we don’t want mixing.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "10",
        name: "Pôle position",
        picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b729e385-c0a7-4fd9-b695-420574463a26/deqe2zw-6100a3d1-9f25-4aed-900b-95035e4f042c.png/v1/fill/w_512,h_512,strp/pole_position_1984_cartoon_folder_icon_by_patomite_deqe2zw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYjcyOWUzODUtYzBhNy00ZmQ5LWI2OTUtNDIwNTc0NDYzYTI2XC9kZXFlMnp3LTYxMDBhM2QxLTlmMjUtNGFlZC05MDBiLTk1MDM1ZTRmMDQyYy5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Zr8NfQpDoZB_5fW9H-H0ujvuPehOBC9iUpNyt8uZ--s",
        intro: "Pôle positiononnnnnnnnnnn",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "11",
        name: "sharknado",
        picture: "https://www.nicepng.com/png/full/383-3832312_sharknado-logo-1-sharknado-logo.png",
        intro: "Sharks. I never saw that coming.",
        video: null,
        content: null,
        gallery: null
    },
    {
        id: "12",
        name: "My little Pony",
        picture: "https://i.pinimg.com/originals/38/b4/b2/38b4b2defcf25b5046cc4126cd5a9641.png",
        intro: "Never fear! Your friendly neighborhood Rainbow Dash is here.” – Rainbow Dash",
        video: null,
        content: null,
        gallery: null
    },
]

//Create card from mockup array VRAC and insert'em inside the gridContainer
VRAC.forEach((item) => {
    const cardElement = document.createElement("article")
    cardElement.classList.add("card")
    cardElement.innerHTML = `
        <div class="overlay"></div>
        <img src="${item.picture}" alt="${item.name}">
        <footer class="cardLink">
            <h2>${item.name}</h2>
            <p>${item.intro}</p>
        </footer>
    `
    document.querySelector(".gridContainer").appendChild(cardElement)
})

//Retrieve all cards created and displayed
const cardElements = document.querySelectorAll(".card")

//Put a size equal to width to card's height
cardElements.forEach((cardElement) => {
    cardElement.style.height = cardElement.offsetWidth + "px"
})
//resize height of card elements according to their width on window resize
window.addEventListener("resize", () => {
    cardElements.forEach((cardElement) => {
        cardElement.style.height = cardElement.offsetWidth + "px"
    })
})