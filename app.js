console.log("JS Working!")

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://frogs.media/api/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error("doesnt work :(");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error: ", error);
            })
    }
})