console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", function() {
    //////// Chalange-1 ///////////
    fetch(imgUrl)
    .then((response) => {
        return response.json();
    })
    .then((dogsImg) => {
        //console.log(dogsImg);

        let imgContainer = document.getElementById("dog-image-container");
        dogsImg.message.forEach(element => {
            //console.log(element);
            let image = document.createElement('img');
            image.setAttribute("src", element);
            image.setAttribute("width", "100px");
            imgContainer.appendChild(image);
        });
    });
    
    //////// Chalange-2 ///////////
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then((response) => {
        return response.json();
    })
    .then((breeds) => {
        //console.log(breeds);

        let dogsBreedsUl = document.getElementById("dog-breeds");
        let dropDown = document.getElementById("breed-dropdown");

        for (const key in breeds.message) {
            //console.log(breeds.message[key]);
            
            for (let i = 0; i < key.length -1; i++) {
                //console.log(breeds.message[key][i]);
                if (breeds.message[key][i] === undefined) {
                    //console.log("no value");
                }else {

    //////// Chalange-4 ///////////                

                    /////// Declaring the Regex //////////
                    const matchA = /(^a[a-z]+)/igm;
                    const matchB = /(^b[a-z]+)/igm;
                    const matchC = /(^c[a-z]+)/igm;
                    const matchD = /(^d[a-z]+)/igm;

                    ///// I will come back to this later
                    //// beacuase I have to finish more labs ):

                    let breedTxt = document.createTextNode(breeds.message[key][i]);
                    let breedLi = document.createElement("li");
                    breedLi.appendChild(breedTxt);
                    dogsBreedsUl.appendChild(breedLi);

    //////// Chalange-3 ///////////                
                    breedLi.addEventListener("click", function () {
                        breedLi.style.color = "red"
                    })
                }
            }
        }
    });
    
})


