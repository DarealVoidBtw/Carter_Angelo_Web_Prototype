const eventDetailH2 = document.querySelector(".card-7 h2");
const eventDetail = document.querySelector(".card-7");

const events = document.getElementsByClassName("event");

let dynamicIframe = null;

Array.from(events).forEach(eventItem => {
    eventItem.addEventListener('mouseover', () => {
        const desc = eventItem.getAttribute('data-description');
        eventDetailH2.textContent = desc;

        if (!dynamicIframe) {
            const iframeWrapper = document.createElement("div");
            iframeWrapper.style.backgroundColor = "#252729";
            iframeWrapper.className = "card";
            iframeWrapper.innerHTML = `
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.579061185163!2d-1.23206009771167!3d51.75517208748288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c15c12435c0b%3A0x8ebe64ce703ac01f!2sOxford%20Brookes%20University!5e0!3m2!1sen!2suk!4v1743512097540!5m2!1sen!2suk"
                    style="border:0; border-radius: 20px; position: relative; height: 50%; width: 100%;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            `;
    
            eventDetail.appendChild(iframeWrapper);
            dynamicIframe = iframeWrapper;
        }
    });
});