const button = document.querySelector("button");

const Social_Images = document.getElementsByClassName("Social-Icons");

button.addEventListener('click', () => {
    const Name_box = document.getElementsByClassName("txtName")[0].value;
    const Enquiry_box = document.getElementsByClassName("txtEnquiery")[0].value;
    const Email_box = document.getElementsByClassName("txtEmail")[0].value;

    if (Name_box.length >= 5 && Email_box.length >= 5 && Enquiry_box.length >= 20) {
        console.log("Click clak!!!!")
    }
});

Array.from(Social_Images).forEach(SocialImg => {
    SocialImg.addEventListener('click', () => {
        const alt = SocialImg.getAttribute('alt');

        if (alt == "Youtube") {
            window.open("https://www.youtube.com/")
        }
        else if (alt == "Instagram") {
            window.open("https://www.instagram.com/")
        }
        else if (alt == "Facebook") {
            window.open("https://www.facebook.com/")
        }
    });
});