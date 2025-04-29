const images = document.getElementsByClassName("Artwork");
const Expanded_view = document.getElementsByClassName("Expanded-View")[0];

const Expanded_view_image = document.querySelector(".Expanded-View img");

const Expanded_view_button = document.querySelector(".Expanded-View button")

const Expaned_view_background = document.querySelector(".Background")

const AddtoBasket = document.querySelectorAll(".AddToBasket button");

Array.from(images).forEach(element => {
    element.addEventListener('click', () => {
        Expanded_view_image.src = element.src;
        Expanded_view.classList.add('show');
        Expaned_view_background.classList.add('show');
    });
});

Expanded_view_button.addEventListener('click', () => {
    Expanded_view.classList.remove('show');
    Expaned_view_background.classList.remove('show');
});

Array.from(AddtoBasket).forEach(element_btn => {
    element_btn.addEventListener('click', (event) => {
        const parentDiv = event.target.closest('.img-card');
        if (parentDiv) {
            const artworkName = parentDiv.querySelector('h1').textContent;
            alert(`${artworkName} has been added to the basket`);
        }
    });
});